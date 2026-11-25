'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const LEVELS = ['A2', 'B1']

export default function PracticePage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [level, setLevel] = useState('A2')
  const [questions, setQuestions] = useState([])
  const [attemptId, setAttemptId] = useState(null)
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [answering, setAnswering] = useState(false)
  const [finished, setFinished] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return
      if (!data?.user) router.replace('/login')
      else setUser(data.user)
      setLoading(false)
    })
    return () => { mounted = false }
  }, [router])

  async function loadQuestions(selectedLevel = level) {
    setLoading(true)
    setError('')
    setFinished(false)
    setCurrent(0)
    setScore(0)
    setAttemptId(null)

    const { data, error: queryError } = await supabase
      .from('questions')
      .select('id,exam,skill,level,prompt,passage,options,explanation')
      .eq('exam', 'TEF')
      .eq('skill', 'reading')
      .eq('level', selectedLevel)
      .eq('is_published', true)
      .limit(10)

    if (queryError) setError(queryError.message)
    else if (!data?.length) setError('No practice questions are published for this level yet.')
    else setQuestions(data)
    setLoading(false)
  }

  useEffect(() => { if (user) loadQuestions() }, [user])

  const question = questions[current]
  const options = useMemo(() => Array.isArray(question?.options) ? question.options : [], [question])

  async function startAttempt() {
    if (!user || !questions.length) return
    const { data, error: insertError } = await supabase
      .from('attempts')
      .insert({ user_id: user.id, exam: 'TEF', skill: 'reading', level, total_questions: questions.length })
      .select('id')
      .single()
    if (insertError) return setError(insertError.message)
    setAttemptId(data.id)
  }

  async function handleAnswer(option) {
    if (!attemptId || answering || !question) return
    setAnswering(true)
    const { data, error: rpcError } = await supabase.rpc('submit_practice_answer', {
      p_attempt_id: attemptId,
      p_question_id: question.id,
      p_selected_answer: option,
    })
    if (rpcError) {
      setError(rpcError.message)
      setAnswering(false)
      return
    }
    const nextScore = score + (data ? 1 : 0)
    setScore(nextScore)
    if (current + 1 < questions.length) setCurrent((value) => value + 1)
    else {
      await supabase.from('attempts').update({ completed_at: new Date().toISOString() }).eq('id', attemptId).eq('user_id', user.id)
      setFinished(true)
    }
    setAnswering(false)
  }

  function chooseLevel(nextLevel) { setLevel(nextLevel); loadQuestions(nextLevel) }

  if (loading) return <main className="page"><div className="container"><p className="muted">Loading practice…</p></div></main>
  if (!user) return null

  if (finished) {
    const percent = Math.round((score / questions.length) * 100)
    return <main className="page"><div className="container"><div className="card" style={{ maxWidth: 680, margin: '40px auto', textAlign: 'center' }}><span className="eyebrow">Session complete</span><h1 className="page-title" style={{ marginTop: 12 }}>Reading practice finished.</h1><div className="stats" style={{ marginTop: 28 }}><div className="stat"><span className="muted">Score</span><strong>{score}/{questions.length}</strong></div><div className="stat"><span className="muted">Accuracy</span><strong>{percent}%</strong></div></div><div className="actions" style={{ marginTop: 28 }}><button className="btn-primary" onClick={() => loadQuestions(level)}>Practice again</button><button className="btn-secondary" onClick={() => router.push('/dashboard')}>View dashboard</button></div></div></div></main>
  }

  return <main className="page"><div className="container"><div className="section-head"><div><span className="eyebrow">TEF Canada · Reading</span><h1 className="page-title">Practice</h1></div><div style={{ display: 'flex', gap: 8 }}>{LEVELS.map((item) => <button key={item} className={item === level ? 'btn-primary' : 'btn-secondary'} onClick={() => chooseLevel(item)}>{item}</button>)}</div></div>{error && <div className="card" style={{ marginBottom: 16 }}><p className="error">{error}</p></div>}{!questions.length ? <div className="empty">No questions available. Publish questions in Supabase to start practicing.</div> : !attemptId ? <div className="card" style={{ maxWidth: 760, margin: '30px auto' }}><span className="tag">{level} · Reading</span><h2 style={{ marginTop: 16 }}>Ready for a short practice session?</h2><p className="muted">You’ll get {questions.length} TEF-style reading questions. Your result will be saved to your account automatically.</p><button className="btn-primary" style={{ marginTop: 24 }} onClick={startAttempt}>Start practice</button></div> : <div className="exam-layout"><section className="exam-main"><div className="exam-meta"><span>Question {current + 1} of {questions.length}</span><span>{score} correct</span></div><div className="progress" style={{ marginTop: 14 }}><span style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div>{question.passage && <div className="passage" style={{ marginTop: 24 }}>{question.passage}</div>}<h2 className="question">{question.prompt}</h2><div className="options">{options.map((option) => <button className="option" key={option} disabled={answering} onClick={() => handleAnswer(option)}>{option}</button>)}</div></section><aside className="exam-side"><span className="eyebrow">Session</span><h3 style={{ marginTop: 10 }}>TEF Reading</h3><p className="muted">{level} level · {questions.length} questions</p><div className="side-list">{questions.map((item, index) => <div className="side-item" key={item.id} style={{ opacity: index === current ? 1 : .55 }}>{index + 1}. {index === current ? 'Current question' : index < current ? 'Completed' : 'Upcoming'}</div>)}</div></aside></div>}</div></main>
}
