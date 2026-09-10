'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const skills = ['reading', 'listening', 'writing', 'speaking']

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [attempts, setAttempts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const { data: auth } = await supabase.auth.getUser()
      if (!auth?.user) { router.replace('/login'); return }
      setUser(auth.user)
      const { data, error: queryError } = await supabase.from('attempts').select('id,exam,skill,level,total_questions,correct_answers,score_percent,completed_at').order('completed_at', { ascending: false }).limit(20)
      if (queryError) setError(queryError.message)
      else setAttempts(data || [])
      setLoading(false)
    }
    load()
  }, [router])

  async function logout() { await supabase.auth.signOut(); router.push('/') }

  if (loading) return <main className="page"><div className="container"><p className="muted">Loading your dashboard…</p></div></main>
  if (!user) return null

  const completed = attempts.filter((item) => item.completed_at)
  const overall = completed.length ? Math.round(completed.reduce((sum, item) => sum + Number(item.score_percent || 0), 0) / completed.length) : 0
  const latest = completed[0]

  return <main className="page"><div className="container"><div className="section-head"><div><span className="eyebrow">Student workspace</span><h1 className="page-title">Dashboard</h1><p className="muted">{user.email}</p></div><button className="btn-secondary" onClick={logout}>Log out</button></div>{error && <div className="card" style={{ marginBottom: 16 }}><p className="error">{error}</p></div>}<div className="stats"><div className="stat"><span className="muted">Practice sessions</span><strong>{completed.length}</strong></div><div className="stat"><span className="muted">Average accuracy</span><strong>{overall}%</strong></div><div className="stat"><span className="muted">Latest score</span><strong>{latest ? `${Math.round(Number(latest.score_percent))}%` : '—'}</strong></div><div className="stat"><span className="muted">Latest level</span><strong>{latest?.level || '—'}</strong></div></div><section className="section" style={{ paddingBottom: 20 }}><div className="section-head"><div><h2>Skills</h2><p className="muted">Your recorded practice by skill.</p></div><button className="btn-primary" onClick={() => router.push('/practice')}>Start reading practice</button></div><div className="grid">{skills.map((skill) => { const rows = completed.filter((item) => item.skill === skill); const avg = rows.length ? Math.round(rows.reduce((sum, item) => sum + Number(item.score_percent || 0), 0) / rows.length) : 0; return <div className="card" key={skill}><span className="eyebrow">{skill}</span><h3 style={{ marginTop: 12 }}>{avg}%</h3><div className="progress" style={{ marginTop: 14 }}><span style={{ width: `${avg}%` }} /></div><p className="muted" style={{ marginTop: 10 }}>{rows.length} session{rows.length === 1 ? '' : 's'}</p></div> })}</div></section><section className="section" style={{ paddingTop: 20 }}><div className="section-head"><div><h2>Recent practice</h2><p className="muted">Your latest saved results.</p></div></div>{completed.length ? <div className="card"><table className="table"><thead><tr><th>Exam</th><th>Skill</th><th>Level</th><th>Score</th><th>Date</th></tr></thead><tbody>{completed.slice(0, 10).map((item) => <tr key={item.id}><td>{item.exam}</td><td style={{ textTransform: 'capitalize' }}>{item.skill}</td><td>{item.level}</td><td>{Math.round(Number(item.score_percent))}%</td><td>{new Date(item.completed_at).toLocaleDateString()}</td></tr>)}</tbody></table></div> : <div className="empty">You haven’t completed a practice session yet. Start one and your results will appear here.</div>}</section></div></main>
}
