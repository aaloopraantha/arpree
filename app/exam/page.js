'use client'

import { useEffect, useState } from 'react'

export default function ExamPage() {
  const [step, setStep] = useState('start')
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(90)
  const [finished, setFinished] = useState(false)

  const exam = {
    passage:
      "Le Canada est un pays bilingue où le français et l'anglais sont les langues officielles. Le français est principalement parlé au Québec et dans certaines régions du Nouveau-Brunswick. Le système d'immigration canadien utilise des tests de langue comme le TEF et le TCF pour évaluer les compétences des candidats.",

    questions: [
      {
        question: "Quelle est une langue officielle du Canada ?",
        options: ["Espagnol", "Français", "Italien", "Allemand"],
        answer: "Français",
      },
      {
        question: "Où le français est-il principalement parlé ?",
        options: ["Ontario", "Québec", "Alberta", "Colombie-Britannique"],
        answer: "Québec",
      },
      {
        question: "À quoi servent les tests TEF et TCF ?",
        options: ["Tourisme", "Immigration", "Sport", "Éducation primaire"],
        answer: "Immigration",
      },
    ],
  }

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
    setTime(90)
  }

  function selectAnswer(option) {
    if (option === exam.questions[index].answer) {
      setScore((s) => s + 1)
    }
    nextQuestion()
  }

  function nextQuestion() {
    const next = index + 1

    if (next < exam.questions.length) {
      setIndex(next)
      setTime(90)
    } else {
      setFinished(true)
      setStep('result')
    }
  }

  function restart() {
    setStep('start')
    setIndex(0)
    setScore(0)
    setTime(90)
    setFinished(false)
  }

  /* START SCREEN */
  if (step === 'start') {
    return (
      <main style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>TEF Reading Simulation</h1>

          <p style={styles.text}>
            Read the passage and answer questions like real exam conditions.
          </p>

          <button style={styles.button} onClick={startExam}>
            Start Reading Test
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
          <h1 style={styles.title}>Test Completed</h1>

          <p style={styles.text}>
            Score: {score} / {exam.questions.length}
          </p>

          <p style={styles.text}>
            Accuracy: {Math.round((score / exam.questions.length) * 100)}%
          </p>

          <button style={styles.button} onClick={restart}>
            Restart
          </button>
        </div>
      </main>
    )
  }

  /* EXAM SCREEN */
  return (
    <main style={styles.container}>
      <div style={styles.examBox}>

        {/* PASSAGE */}
        <div style={styles.passageBox}>
          <h3 style={{ fontWeight: 500 }}>Passage</h3>
          <p style={styles.passage}>{exam.passage}</p>
        </div>

        {/* TOP BAR */}
        <div style={styles.topBar}>
          <p>Question {index + 1} / {exam.questions.length}</p>
          <p>Time: {time}s</p>
        </div>

        {/* QUESTION */}
        <h2 style={{ fontWeight: 500 }}>
          {exam.questions[index].question}
        </h2>

        {/* OPTIONS */}
        <div style={{ marginTop: 20 }}>
          {exam.questions[index].options.map((opt) => (
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

  examBox: {
    width: '100%',
    maxWidth: 850,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 30,
    backdropFilter: 'blur(14px)',
  },

  passageBox: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },

  passage: {
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.6,
    fontSize: 15,
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
