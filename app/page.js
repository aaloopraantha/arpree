'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <p style={styles.kicker}>Since 2021</p>

        <h1 style={styles.title}>
          Master TEF & TCF with a Real Exam Simulation Platform
        </h1>

        <p style={styles.subtitle}>
          Structured preparation for Canadian immigration language exams with
          reading, listening, writing, and speaking practice.
        </p>

        <div style={styles.heroButtons}>
          <button style={styles.primaryBtn} onClick={() => router.push('/register')}>
            Start Preparing
          </button>

          <button style={styles.secondaryBtn} onClick={() => router.push('/explore')}>
            View Programs
          </button>
        </div>
      </section>

      {/* FEATURES TILES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Everything You Need to Pass</h2>

        <div style={styles.grid}>
          {features.map((f) => (
            <div key={f.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardText}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Your Progress Dashboard</h2>

        <div style={styles.dashboardMock}>
          <div style={styles.mockLeft}>
            <p style={styles.mockLabel}>Current Level</p>
            <h3>B1 Intermediate</h3>

            <p style={styles.mockLabel}>Overall Progress</p>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>

            <p style={styles.muted}>42% completed</p>
          </div>

          <div style={styles.mockRight}>
            <div style={styles.statBox}>
              <p>Reading</p>
              <h3>68%</h3>
            </div>

            <div style={styles.statBox}>
              <p>Listening</p>
              <h3>54%</h3>
            </div>

            <div style={styles.statBox}>
              <p>Writing</p>
              <h3>61%</h3>
            </div>

            <div style={styles.statBox}>
              <p>Speaking</p>
              <h3>47%</h3>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>

        <div style={styles.grid}>
          {steps.map((s) => (
            <div key={s.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardText}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={styles.contact}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>

        <p style={styles.muted}>
          For support, partnerships, or inquiries
        </p>

        <input style={styles.input} placeholder="Email address" />
        <textarea style={styles.textarea} placeholder="Message"></textarea>

        <button style={styles.primaryBtn}>Send Message</button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2021–2026 ARPREE. All rights reserved.</p>
      </footer>
    </main>
  )
}

const features = [
  {
    title: 'Real Exam Simulation',
    desc: 'Practice under real TEF/TCF timed conditions.',
  },
  {
    title: 'Reading & Listening',
    desc: 'Authentic comprehension exercises with difficulty scaling.',
  },
  {
    title: 'Writing Evaluation',
    desc: 'Get structured feedback on your responses.',
  },
  {
    title: 'Speaking Practice',
    desc: 'Simulated oral response system for fluency.',
  },
]

const steps = [
  {
    title: '1. Choose Level',
    desc: 'Start from A1 to C2 based on your ability.',
  },
  {
    title: '2. Take Exams',
    desc: 'Practice real exam-style questions.',
  },
  {
    title: '3. Track Progress',
    desc: 'Monitor improvement across all skills.',
  },
  {
    title: '4. Pass Exam',
    desc: 'Reach CLB target for immigration success.',
  },
]

const styles = {
  page: {
    background: '#000',
    color: '#fff',
  },

  hero: {
    textAlign: 'center',
    padding: '120px 20px 80px',
    maxWidth: 900,
    margin: '0 auto',
  },

  kicker: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    letterSpacing: 1,
  },

  title: {
    fontSize: 54,
    fontWeight: 500,
    marginTop: 20,
  },

  subtitle: {
    marginTop: 20,
    color: 'rgba(255,255,255,0.6)',
    fontSize: 18,
    lineHeight: 1.6,
  },

  heroButtons: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
  },

  primaryBtn: {
    background: '#fff',
    color: '#000',
    padding: '12px 18px',
    borderRadius: 14,
    border: 'none',
    cursor: 'pointer',
  },

  secondaryBtn: {
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
    padding: '12px 18px',
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.12)',
    cursor: 'pointer',
  },

  section: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '80px 20px',
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: 500,
    marginBottom: 30,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 16,
  },

  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 20,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 500,
  },

  cardText: {
    marginTop: 10,
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    lineHeight: 1.5,
  },

  dashboardMock: {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
    marginTop: 20,
  },

  mockLeft: {
    flex: 1,
    minWidth: 280,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 20,
  },

  mockRight: {
    flex: 1,
    minWidth: 280,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 12,
  },

  statBox: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 15,
  },

  progressBar: {
    height: 8,
    background: '#222',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },

  progressFill: {
    width: '42%',
    height: '100%',
    background: '#fff',
  },

  muted: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    marginTop: 8,
  },

  contact: {
    maxWidth: 700,
    margin: '0 auto',
    padding: '80px 20px',
    textAlign: 'center',
  },

  input: {
    width: '100%',
    padding: 12,
    marginTop: 20,
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
  },

  textarea: {
    width: '100%',
    padding: 12,
    marginTop: 12,
    height: 120,
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
  },

  footer: {
    textAlign: 'center',
    padding: 40,
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13,
  },
}
