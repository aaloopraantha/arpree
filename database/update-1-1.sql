begin;
alter table public.journal_profiles add column if not exists bio text, add column if not exists public_profile boolean not null default true, add column if not exists show_journals boolean not null default true, add column if not exists show_calendar boolean not null default false, add column if not exists joined timestamptz;
create table if not exists public.journal_preferences (
 user_id uuid primary key references public.journal_profiles(id) on delete cascade,
 level text check(level in ('A1','A2','B1','B2','C1','C2') or level is null), bio text not null default '' check(char_length(bio)<=240),
 default_privacy text not null default 'private' check(default_privacy in ('private','public')),
 private_account boolean not null default false, public_profile boolean not null default true, show_level boolean not null default true, show_bio boolean not null default true,
 show_journals boolean not null default true, show_calendar boolean not null default false, show_joined boolean not null default false,
 joined timestamptz not null default now()
);
insert into public.journal_preferences(user_id,level,joined) select p.id,p.level,coalesce(u.created_at,now()) from public.journal_profiles p join auth.users u on u.id=p.id on conflict do nothing;
alter table public.journal_preferences enable row level security;
create policy preferences_owner on public.journal_preferences for all to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));
revoke all on public.journal_preferences from anon, public; grant select,insert,update on public.journal_preferences to authenticated;
create table public.journal_follows (user_id uuid references public.journal_profiles(id) on delete cascade, target_id uuid references public.journal_profiles(id) on delete cascade, primary key(user_id,target_id), check(user_id<>target_id));
create table public.journal_bookmarks (user_id uuid references public.journal_profiles(id) on delete cascade, entry_id uuid references public.journal_entries(id) on delete cascade, primary key(user_id,entry_id));
create table public.journal_shares (user_id uuid references public.journal_profiles(id) on delete cascade, entry_id uuid references public.journal_entries(id) on delete cascade, primary key(user_id,entry_id));
create table public.journal_visits (user_id uuid references public.journal_profiles(id) on delete cascade, day date not null, primary key(user_id,day));
create table public.journal_notifications (id uuid primary key default gen_random_uuid(),user_id uuid not null references public.journal_profiles(id) on delete cascade,actor_id uuid not null references public.journal_profiles(id) on delete cascade,entry_id uuid not null references public.journal_entries(id) on delete cascade, kind text not null check(kind in ('heart','bookmark','share')), read boolean not null default false, created_at timestamptz not null default now(),unique(user_id,actor_id,entry_id,kind));
alter table public.journal_follows enable row level security; alter table public.journal_bookmarks enable row level security; alter table public.journal_shares enable row level security; alter table public.journal_visits enable row level security; alter table public.journal_notifications enable row level security;
revoke all on public.journal_follows,public.journal_bookmarks,public.journal_shares,public.journal_visits,public.journal_notifications from anon,authenticated,public;
grant select,insert,delete on public.journal_follows,public.journal_bookmarks to authenticated; grant insert on public.journal_shares to authenticated; grant select,insert on public.journal_visits to authenticated; grant select on public.journal_visits to anon; grant select,update(read) on public.journal_notifications to authenticated;
create policy follows_read on public.journal_follows for select to authenticated using(user_id=(select auth.uid()));
create policy follows_add on public.journal_follows for insert to authenticated with check(user_id=(select auth.uid()) and exists(select 1 from public.journal_profiles p where p.id=target_id and p.public_profile));
create policy follows_delete on public.journal_follows for delete to authenticated using(user_id=(select auth.uid()));
create policy bookmarks_read on public.journal_bookmarks for select to authenticated using(user_id=(select auth.uid()));
create policy bookmarks_delete on public.journal_bookmarks for delete to authenticated using(user_id=(select auth.uid()));
create policy bookmarks_add on public.journal_bookmarks for insert to authenticated with check(user_id=(select auth.uid()) and exists(select 1 from public.journal_entries e join public.journal_profiles p on p.id=e.user_id where e.id=entry_id and e.visibility='public' and not e.hidden and p.public_profile and p.show_journals));
create policy shares_add on public.journal_shares for insert to authenticated with check(user_id=(select auth.uid()) and exists(select 1 from public.journal_entries e join public.journal_profiles p on p.id=e.user_id where e.id=entry_id and e.visibility='public' and not e.hidden and p.public_profile and p.show_journals));
create policy visits_read on public.journal_visits for select to anon,authenticated using(user_id=(select auth.uid()) or exists(select 1 from public.journal_profiles p where p.id=user_id and p.public_profile and p.show_calendar));
create policy visits_add on public.journal_visits for insert to authenticated with check(user_id=(select auth.uid()) and day between current_date-1 and current_date+1);
create policy notifications_read on public.journal_notifications for select to authenticated using(user_id=(select auth.uid()));
create policy notifications_update on public.journal_notifications for update to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));
alter policy entry_read on public.journal_entries using(visibility='public' and not hidden and exists(select 1 from public.journal_profiles p where p.id=user_id and p.public_profile and p.show_journals));
alter policy likes_read on public.journal_likes using(exists(select 1 from public.journal_entries e join public.journal_profiles p on p.id=e.user_id where e.id=entry_id and e.visibility='public' and not e.hidden and p.public_profile and p.show_journals));
alter policy likes_add on public.journal_likes with check(user_id=(select auth.uid()) and exists(select 1 from public.journal_entries e join public.journal_profiles p on p.id=e.user_id where e.id=entry_id and e.visibility='public' and not e.hidden and p.public_profile and p.show_journals));
alter policy comments_read on public.journal_comments using(exists(select 1 from public.journal_entries e join public.journal_profiles p on p.id=e.user_id where e.id=entry_id and e.visibility='public' and not e.hidden and p.public_profile and p.show_journals));
alter policy comments_add on public.journal_comments with check(user_id=(select auth.uid()) and exists(select 1 from public.journal_entries e join public.journal_profiles p on p.id=e.user_id where e.id=entry_id and e.visibility='public' and not e.hidden and p.public_profile and p.show_journals));
alter policy reports_add on public.journal_reports with check(user_id=(select auth.uid()) and exists(select 1 from public.journal_entries e join public.journal_profiles p on p.id=e.user_id where e.id=entry_id and e.visibility='public' and not e.hidden and p.public_profile and p.show_journals));
create schema if not exists journal_internal;
revoke all on schema journal_internal from public,anon,authenticated;
create or replace function journal_internal.activity_notification() returns trigger language plpgsql security definer set search_path='' as $$
declare recipient uuid; k text;
begin
 select e.user_id into recipient from public.journal_entries e join public.journal_profiles p on p.id=e.user_id where e.id=new.entry_id and e.visibility='public' and not e.hidden and p.public_profile and p.show_journals;
 if recipient is null or recipient=new.user_id then return new; end if;
 k:=case tg_table_name when 'journal_likes' then 'heart' when 'journal_bookmarks' then 'bookmark' else 'share' end;
 insert into public.journal_notifications(user_id,actor_id,entry_id,kind) values(recipient,new.user_id,new.entry_id,k) on conflict do nothing;
 return new;
end;$$;
revoke all on function journal_internal.activity_notification() from public,anon,authenticated;
create trigger notify_like after insert on public.journal_likes for each row execute function journal_internal.activity_notification();
create trigger notify_bookmark after insert on public.journal_bookmarks for each row execute function journal_internal.activity_notification();
create trigger notify_share after insert on public.journal_shares for each row execute function journal_internal.activity_notification();
create or replace function public.save_journal_settings(p_name text,p_level text,p_bio text,p_default text,p_private boolean,p_allow boolean,p_show_level boolean,p_show_bio boolean,p_show_journals boolean,p_show_calendar boolean,p_show_joined boolean)
returns void language plpgsql security invoker set search_path='' as $$
declare uid uuid:=auth.uid(); enabled boolean:=not p_private and p_allow; joined_at timestamptz;
begin
 if uid is null then raise exception 'Authentication required'; end if;
 if char_length(trim(p_name)) not between 1 and 50 or char_length(coalesce(p_bio,''))>240 then raise exception 'Invalid profile'; end if;
 insert into public.journal_profiles(id,display_name,level,public_profile,show_journals,show_calendar) values(uid,trim(p_name),null,false,false,false) on conflict(id) do nothing;
 insert into public.journal_preferences(user_id,level,bio,default_privacy,private_account,public_profile,show_level,show_bio,show_journals,show_calendar,show_joined)
 values(uid,nullif(p_level,''),coalesce(p_bio,''),p_default,p_private,p_allow,p_show_level,p_show_bio,p_show_journals,p_show_calendar,p_show_joined)
 on conflict(user_id) do update set level=excluded.level,bio=excluded.bio,default_privacy=excluded.default_privacy,private_account=excluded.private_account,public_profile=excluded.public_profile,show_level=excluded.show_level,show_bio=excluded.show_bio,show_journals=excluded.show_journals,show_calendar=excluded.show_calendar,show_joined=excluded.show_joined returning joined into joined_at;
 update public.journal_profiles set display_name=trim(p_name),level=case when not enabled or p_show_level then nullif(p_level,'') else null end,bio=case when not enabled or p_show_bio then coalesce(p_bio,'') else null end,public_profile=enabled,show_journals=enabled and p_show_journals,show_calendar=enabled and p_show_calendar,joined=case when enabled and p_show_joined then joined_at else null end where id=uid;
end;$$;
revoke all on function public.save_journal_settings(text,text,text,text,boolean,boolean,boolean,boolean,boolean,boolean,boolean) from public,anon;
grant execute on function public.save_journal_settings(text,text,text,text,boolean,boolean,boolean,boolean,boolean,boolean,boolean) to authenticated;
create index on public.journal_entries(user_id,created_at desc);
create index on public.journal_notifications(user_id,created_at desc);
commit;