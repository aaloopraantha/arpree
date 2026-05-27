'use client'

import { useState } from 'react'
import { a2Reading } from '../../content/reading/a2'
import { b1Reading } from '../../content/reading/b1'

export default function ExamPage() {
  const [started, setStarted] = useState(false)
  const [level, setLevel] = useState('A2')
  const [passageIndex, setPassageIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const data = level === 'A2' ? a2Reading : b1Reading
  const current = data[passageIndex]

  function startExam() {
    setStarted(true)
  }

  function selectAnswer(option) {
    const question = current.questions[questionIndex]

    if (option === question.answer) {
      setScore((s) => s + 1)
    }

    nextQuestion()
  }

  function nextQuestion() {
    const nextQ = questionIndex + 1

    if (nextQ < current.questions.length) {
      setQuestionIndex(nextQ)
    } else {
      const nextP = passageIndex + 1

      if (nextP < data.length) {
        setPassageIndex(nextP)
        setQuestionIndex(0)
      } else {
        setFinished(true)
      }
    }
  }

  function restart() {
    setStarted(false)
    setPassageIndex(0)
    setQuestionIndex(0)
    setScore(0)
    setFinished(false)
  }

  /* START SCREEN */
  if (!started) {
    return (
      <main style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>TEF Reading Exam</h1>

          <p style={styles.text}>
            Real exam-style reading comprehension (A2–B1 structure)
          </p>

          <button style={styles.button} onClick={startExam}>
            Start Exam
          </button>
        </div>
      </main>
    )
  }

  /* RESULT */
  if (finished) {
    return (
      <main style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Exam Completed</h1>

          <p style={styles.text}>
            Score: {score}
          </p>

          <button style={styles.button} onClick={restart}>
            Restart
          </button>
        </div>
      </main>
    )
  }

  /* EXAM */
  return (
    <main style={styles.container}>
      <div style={styles.examBox}>

        {/* LEVEL */}
        <p style={styles.level}>Level: {level}</p>

        {/* PASSAGE */}
        <div style={styles.passageBox}>
          <h3>Passage</h3>
          <p style={styles.passage}>{current.passage}</p>
        </div>

        {/* QUESTION */}
        <h2 style={styles.question}>
          {current.questions[questionIndex].question}
        </h2>

        {/* OPTIONS */}
        <div>
          {current.questions[questionIndex].options.map((opt) => (
            <button
              key={opt}
              style={styles.option}
              onClick={() => selectAnswer(opt)}
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

  examBox: {
    width: '100%',
    maxWidth: 850,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 30,
  },

  card: {
    background: 'rgba(255,255,255,0.04)',
    padding: 30,
    borderRadius: 18,
    textAlign: 'center',
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
    padding: 12,
    borderRadius: 14,
    background: '#fff',
    border: 'none',
    cursor: 'pointer',
  },

  passageBox: {
    marginBottom: 20,
    padding: 15,
    background: 'rgba(255,255,255,0.03)',
    borderRadius: 12,
  },

  passage: {
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.6,
  },

  question: {
    marginBottom: 10,
  },

  option: {
    width: '100%',
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    background: 'rgba(255,255,255,0.06)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer',
    textAlign: 'left',
  },

  level: {
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 10,
  },
}
