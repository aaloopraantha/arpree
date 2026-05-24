'use client'

import { useEffect, useState } from 'react'

export default function ExamPage() {
  const [step, setStep] = useState('start') 
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(60)
  const [finished, setFinished] = useState(false)

  const questions = [
    {
      type: 'reading',
      question: 'What is the capital of Canada?',
      options: ['Toronto', 'Ottawa', 'Montreal', 'Vancouver'],
      answer: 'Ottawa',
    },
    {
      type: 'reading',
      question: 'TEF is mainly used for?',
      options: ['Tourism', 'Immigration', 'Sports', 'Driving'],
      answer: 'Immigration',
    },
    {
      type: 'reading',
      question: 'Which language is tested in TEF?',
      options: ['English', 'French', 'Spanish', 'German'],
      answer: 'French',
    },
  ]

  useEffect(() => {
    if (step !== 'exam' || finished) return

    if (time <= 0) {
      nextQuestion()
      return
    }

    const timer = setInterval(() => {
      setTime((t) => t - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [time, step, finished])

  function startExam() {
    setStep('exam')
    setTime(60)
  }

  function selectAnswer(option) {
    if (option === questions[index].answer) {
      setScore((s) => s + 1)
    }
    nextQuestion()
  }

  function nextQuestion() {
    const next = index + 1

    if (next < questions.length) {
      setIndex(next)
      setTime(60)
    } else {
      setFinished(true)
      setStep('result')
    }
  }

  function restart() {
    setStep('start')
    setIndex(0)
    setScore(0)
    setTime(60)
    setFinished(false)
  }

  /* START SCREEN */
  if (step === 'start') {
    return (
      <main style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>TEF / TCF Exam Simulation</h1>
          <p style={styles.text}>
            Full timed exam with reading section
          </p>

          <button style={styles.button} onClick={startExam}>
            Start Exam
          </button>
        </div>
      </main>
    )
  }

  /* RESULT SCREEN */
  if (step === 'result') {
    return (
      <main style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Exam Completed</h1>

          <p style={styles.text}>
            Score: {score} / {questions.length}
          </p>

          <p style={styles.text}>
            Accuracy: {Math.round((score / questions.length) * 100)}%
          </p>

          <button style={styles.button} onClick={restart}>
            Restart Exam
          </button>
        </div>
      </main>
    )
  }

  /* EXAM SCREEN */
  return (
    <main style={styles.container}>
      <div style={styles.examBox}>

        {/* TOP BAR */}
        <div style={styles.topBar}>
          <p>Question {index + 1} / {questions.length}</p>
          <p>Time: {time}s</p>
        </div>

        {/* QUESTION */}
        <h2 style={{ fontWeight: 500 }}>
          {questions[index].question}
        </h2>

        {/* OPTIONS */}
        <div style={{ marginTop: 20 }}>
          {questions[index].options.map((opt) => (
            <button
              key={opt}
              onClick={() => selectAnswer(opt)}
              style={styles.option}
            >
              {opt}
            </button>
          ))}
        </div>

      </div>
    </main>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 30,
    textAlign: 'center',
    backdropFilter: 'blur(14px)',
  },

  examBox: {
    width: '100%',
    maxWidth: 700,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 30,
    backdropFilter: 'blur(14px)',
  },

  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    color: 'rgba(255,255,255,0.6)',
  },

  title: {
    fontSize: 26,
    fontWeight: 500,
  },

  text: {
    color: 'rgba(255,255,255,0.6)',
    marginTop: 10,
  },

  button: {
    marginTop: 20,
    background: '#fff',
    color: '#000',
    padding: '12px 18px',
    borderRadius: 14,
    border: 'none',
    cursor: 'pointer',
  },

  option: {
    width: '100%',
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.06)',
    color: '#fff',
    cursor: 'pointer',
    textAlign: 'left',
  },
}
