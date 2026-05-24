'use client'

import { useRouter } from 'next/navigation'

export default function ExplorePage() {
  const router = useRouter()

  return (
    <main style={{ minHeight: '100vh', background: '#000', padding: 60 }}>
      <h1 style={{ fontSize: 42, fontWeight: 500 }}>
        Learning Paths
      </h1>

      <p style={{ color: 'rgba(255,255,255,0.6)' }}>
        Choose your preparation level
      </p>

      {/* QUICK BITES */}
      <section style={{ marginTop: 50 }}>
        <h2 style={title}>Quick Bites</h2>

        <div style={grid}>
          {levels.map((l) => (
            <div key={l.level} style={card}>
              <h3>{l.level}</h3>
              <p style={muted}>{l.desc}</p>
              <p>${l.price}</p>

              <button style={btn} onClick={() => router.push('/dashboard')}>
                Start
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SUBS */}
      <section style={{ marginTop: 80 }}>
        <h2 style={title}>Subscription Plans</h2>

        <div style={grid}>
          {plans.map((p) => (
            <div key={p.title} style={card}>
              <h3>{p.title}</h3>
              <p style={muted}>{p.levels}</p>
              <p>{p.price}</p>

              <button style={btn} onClick={() => router.push('/register')}>
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

const levels = [
  { level: 'A1', price: 1, desc: 'Basic French communication' },
  { level: 'A2', price: 1.5, desc: 'Simple conversations' },
  { level: 'B1', price: 2, desc: 'Intermediate exam prep' },
  { level: 'B2', price: 3, desc: 'Advanced comprehension' },
  { level: 'C1', price: 4, desc: 'Professional level' },
  { level: 'C2', price: 5, desc: 'Native-like mastery' },
]

const plans = [
  { title: 'CLB 5', levels: 'A1 - B1', price: '$9.99' },
  { title: 'CLB 6', levels: 'A1 - B2', price: '$14.99' },
  { title: 'CLB 7', levels: 'A1 - C2', price: '$19.99' },
]

const card = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '18px',
  padding: 20,
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 16,
  marginTop: 20,
}

const btn = {
  marginTop: 10,
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  padding: '10px 14px',
  borderRadius: '14px',
}

const title = {
  fontSize: 22,
  fontWeight: 500,
}

const muted = {
  color: 'rgba(255,255,255,0.6)',
}
