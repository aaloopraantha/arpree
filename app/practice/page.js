'use client'

import { useState } from 'react'

export default function PracticePage() {
  const questions = [
    {
      question: 'What is the capital of Canada?',
      options: ['Toronto', 'Ottawa', 'Montreal', 'Vancouver'],
      answer: 'Ottawa',
    },
    {
      question: 'Which language is mainly tested in TEF Canada?',
      options: ['Spanish', 'French', 'German', 'Italian'],
      answer: 'French',
    },
    {
      question: 'TEF Canada is mainly used for?',
      options: [
        'Driving License',
        'Immigration',
        'Tourism',
        'Medical School',
      ],
      answer: 'Immigration',
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function handleAnswer(option) {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setFinished(true)
    }
  }

  if (finished) {
    return (
      <main
        style={{
          background: '#000',
          color: '#fff',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            background: '#111',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h1>Practice Complete</h1>

          <p
            style={{
              marginTop: '20px',
              fontSize: '24px',
            }}
          >
            Your Score: {score} / {questions.length}
          </p>

          <a
            href="/dashboard"
            style={{
              display: 'inline-block',
              marginTop: '30px',
              background: '#fff',
              color: '#000',
              padding: '10px 20px',
              textDecoration: 'none',
            }}
          >
            Back to Dashboard
          </a>
        </div>
      </main>
    )
  }

  return (
    <main
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '600px',
          background: '#111',
          padding: '40px',
          borderRadius: '12px',
        }}
      >
        <p style={{ color: '#888' }}>
          Question {currentQuestion + 1} / {questions.length}
        </p>

        <h1
          style={{
            marginTop: '20px',
          }}
        >
          {questions[currentQuestion].question}
        </h1>

        <div
          style={{
            marginTop: '30px',
            display: 'grid',
            gap: '15px',
          }}
        >
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              style={{
                padding: '15px',
                background: '#222',
                color: '#fff',
                border: '1px solid #333',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
