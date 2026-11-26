import { NextResponse } from 'next/server'
const views={explore:'explore',login:'login',register:'register',journal:'journal',write:'write',profile:'profile',settings:'profile',dashboard:'journal',practice:'write',exam:'write'}
export function middleware(request){
 const first=request.nextUrl.pathname.split('/')[1]
 const parts=request.nextUrl.pathname.split('/').filter(Boolean)
 if(first==='profile'&&parts.length===2&&/^[0-9a-f-]{36}$/i.test(parts[1])){const url=request.nextUrl.clone();url.pathname='/';url.searchParams.set('profile',parts[1]);url.searchParams.delete('view');return NextResponse.redirect(url)}
 const view=views[first]
 if(!view)return NextResponse.next()
 const url=request.nextUrl.clone()
 url.pathname='/'
 url.searchParams.set('view',view)
 return NextResponse.redirect(url)
}
export const config={matcher:['/explore/:path*','/login/:path*','/register/:path*','/journal/:path*','/write/:path*','/profile/:path*','/settings/:path*','/dashboard/:path*','/practice/:path*','/exam/:path*']}
