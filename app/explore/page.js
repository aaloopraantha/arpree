'use client'

import { useRouter } from 'next/navigation'

export default function ExplorePage() {
  const router = useRouter()

  return (
    <main style={styles.page}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Explore Programs</h1>
        <p style={styles.subtitle}>
          Choose a preparation path for TEF / TCF certification
        </p>
      </section>

      {/* 3 PANEL GRID */}
      <section style={styles.grid}>

        {/* QUICK BITES */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Quick Bites</h2>

          <p style={styles.priceTag}>
            Under $5 — cheaper than a coffee
          </p>

          <p style={styles.text}>
            Short focused practice sessions designed for daily improvement.
          </p>

          <ul style={styles.list}>
            <li>A1 – Beginner drills</li>
            <li>A2 – Basic comprehension</li>
            <li>B1 – Intermediate practice</li>
            <li>B2 – Advanced practice</li>
            <li>C1–C2 – Expert level</li>
          </ul>

          <p style={styles.small}>
            Each includes Reading, Listening, Writing, and Speaking.
          </p>

          <button
            style={styles.button}
            onClick={() => router.push('/quick-bites')}
          >
            Start Quick Bites
          </button>
        </div>

        {/* SUBSCRIPTIONS */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Subscriptions</h2>

          <p style={styles.priceTag}>
            Starting from $9.99 / month
          </p>

          <p style={styles.text}>
            Structured learning paths with full exam preparation.
          </p>

          <div style={styles.compareBox}>
            <div style={styles.plan}>
              <h3>CLB 5</h3>
              <p>Foundation Level</p>
            </div>

            <div style={styles.plan}>
              <h3>CLB 6</h3>
              <p>Intermediate Level</p>
            </div>

            <div style={styles.plan}>
              <h3>CLB 7</h3>
              <p>Advanced Level</p>
            </div>
          </div>

          <p style={styles.small}>
            Includes progress tracking, structured lessons, and AI feedback.
          </p>

          <button
            style={styles.button}
            onClick={() => router.push('/pricing')}
          >
            View Subscription Plans
          </button>
        </div>

        {/* FULL EXAMS */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Full Exam Simulation</h2>

          <p style={styles.priceTag}>
            $30 per exam attempt
          </p>

          <p style={styles.text}>
            Real TEF / TCF exam simulation under strict timed conditions.
          </p>

          <ul style={styles.list}>
            <li>Full Reading Section</li>
            <li>Listening Simulation</li>
            <li>Writing Tasks</li>
            <li>Speaking Evaluation</li>
          </ul>

          <p style={styles.small}>
            Designed to replicate official test environment and scoring pressure.
          </p>

          <button
            style={styles.button}
            onClick={() => router.push('/exam')}
          >
            Start Full Exam
          </button>
        </div>

      </section>
    </main>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#000',
    color: '#fff',
    padding: '80px 20px',
  },

  header: {
    textAlign: 'center',
    marginBottom: 50,
  },

  title: {
    fontSize: 42,
    fontWeight: 500,
  },

  subtitle: {
    marginTop: 10,
    color: 'rgba(255,255,255,0.6)',
  },

  grid: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 20,
  },

  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 24,
    backdropFilter: 'blur(14px)',
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 6,
  },

  priceTag: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 12,
    opacity: 0.9,
  },

  text: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 1.5,
  },

  list: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    paddingLeft: 18,
    lineHeight: 1.8,
  },

  small: {
    marginTop: 10,
    fontSize: 12,
    color: 'rgba(255,255,255,0.4)',
  },

  button: {
    marginTop: 20,
    width: '100%',
    padding: 12,
    borderRadius: 14,
    border: 'none',
    background: '#fff',
    color: '#000',
    cursor: 'pointer',
    fontSize: 14,
  },

  compareBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  plan: {
    padding: 12,
    borderRadius: 12,
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
  },
}
