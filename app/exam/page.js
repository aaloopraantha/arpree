'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const EXAM_SECONDS = 10 * 60

export default function ExamPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [questions, setQuestions] = useState([])
  const [level, setLevel] = useState('A2')
  const [attemptId, setAttemptId] = useState(null)
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(EXAM_SECONDS)
  const [loading, setLoading] = useState(true)
  const [finished, setFinished] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data?.user) router.replace('/login')
      else setUser(data.user)
      setLoading(false)
    })
  }, [router])

  async function loadExam() {
    setLoading(true)
    setError('')
    setFinished(false)
    setAttemptId(null)
    setCurrent(0)
    setScore(0)
    setSeconds(EXAM_SECONDS)

    const { data, error: queryError } = await supabase
      .from('questions')
      .select('id,exam,skill,level,prompt,options')
      .eq('exam', 'TEF')
      .eq('skill', 'reading')
      .eq('level', level)
      .eq('is_published', true)
      .limit(10)

    if (queryError) setError(queryError.message)
    else if (!data?.length) setError('No published questions are available for this exam level.')
    else setQuestions(data)
    setLoading(false)
  }

  useEffect(() => {
    if (user) loadExam()
  }, [user, level])

  useEffect(() => {
    if (!attemptId || finished) return
    const timer = setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          clearInterval(timer)
          finishExam()
          return 0
        }
        return value - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [attemptId, finished])

  async function startExam() {
    const { data, error: insertError } = await supabase
      .from('attempts')
      .insert({
        user_id: user.id,
        exam: 'TEF',
        skill: 'reading',
        level,
        total_questions: questions.length,
      })
      .select('id')
      .single()

    if (insertError) setError(insertError.message)
    else setAttemptId(data.id)
  }

  async function answer(option) {
    const question = questions[current]
    const { data, error: rpcError } = await supabase.rpc('submit_practice_answer', {
      p_attempt_id: attemptId,
      p_question_id: question.id,
      p_selected_answer: option,
    })

    if (rpcError) return setError(rpcError.message)

    const nextScore = score + (data ? 1 : 0)
    setScore(nextScore)

    if (current + 1 >= questions.length) await finishExam()
    else setCurrent((value) => value + 1)
  }

  async function finishExam() {
    if (!attemptId || finished) return
    await supabase
      .from('attempts')
      .update({ completed_at: new Date().toISOString() })
      .eq('id', attemptId)
      .eq('user_id', user.id)
    setFinished(true)
  }

  const question = questions[current]
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0')
  const secs = (seconds % 60).toString().padStart(2, '0')

  if (loading) return <main className="page"><div className="container"><p className="muted">Loading exam…</p></div></main>
  if (!user) return null

  if (finished) {
    return (
      <main className="page">
        <div className="container">
          <div className="card" style={{ maxWidth: 680, margin: '40px auto', textAlign: 'center' }}>
            <span className="eyebrow">Exam complete</span>
            <h1 className="page-title" style={{ marginTop: 12 }}>TEF Reading Simulation</h1>
            <div className="stats" style={{ marginTop: 28 }}>
              <div className="stat"><span className="muted">Score</span><strong>{score}/{questions.length}</strong></div>
              <div className="stat"><span className="muted">Accuracy</span><strong>{questions.length ? Math.round(score / questions.length * 100) : 0}%</strong></div>
            </div>
            <div className="actions" style={{ marginTop: 28 }}>
              <button className="btn-primary" onClick={loadExam}>Take again</button>
              <button className="btn-secondary" onClick={() => router.push('/dashboard')}>Dashboard</button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Timed simulation · TEF Canada</span>
            <h1 className="page-title">Reading exam</h1>
          </div>
          <div><span className="tag">{minutes}:{secs}</span></div>
        </div>

        {error && <div className="card" style={{ marginBottom: 16 }}><p className="error">{error}</p></div>}

        {!questions.length ? (
          <div className="empty">No questions are available for this level.</div>
        ) : !attemptId ? (
          <div className="card" style={{ maxWidth: 760, margin: '30px auto' }}>
            <span className="tag">TEF · Reading · {level} · {questions.length} questions · 10 minutes</span>
            <h2 style={{ marginTop: 16 }}>Ready to begin?</h2>
            <p className="muted">This simulation uses the published ARPREE question bank. Your result will be saved to your account.</p>
            <div className="actions" style={{ marginTop: 24 }}>
              <button className="btn-primary" onClick={startExam}>Start timed exam</button>
              <button className="btn-secondary" onClick={() => setLevel(level === 'A2' ? 'B1' : 'A2')}>Switch to {level === 'A2' ? 'B1' : 'A2'}</button>
            </div>
          </div>
        ) : (
          <div className="exam-layout">
            <section className="exam-main">
              <div className="exam-meta"><span>Question {current + 1} of {questions.length}</span><span>{score} correct</span></div>
              <div className="progress" style={{ marginTop: 14 }}><span style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div>
              <h2 className="question">{question.prompt}</h2>
              <div className="options">
                {(question.options || []).map((option) => (
                  <button className="option" key={option} onClick={() => answer(option)}>{option}</button>
                ))}
              </div>
            </section>
            <aside className="exam-side">
              <span className="eyebrow">Simulation</span>
              <h3 style={{ marginTop: 10 }}>TEF Reading</h3>
              <p className="muted">{level} · {questions.length} questions</p>
              <button className="btn-secondary" style={{ marginTop: 20, width: '100%' }} onClick={finishExam}>Finish early</button>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}
