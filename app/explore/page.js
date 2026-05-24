'use client'

import { useRouter } from 'next/navigation'

export default function ExplorePage() {
  const router = useRouter()

  const quickBites = [
    {
      level: 'A1',
      price: 1,
      desc: 'Basic daily life French (food, greetings, travel)',
    },
    {
      level: 'A2',
      price: 1.5,
      desc: 'Simple conversations and workplace basics',
    },
    {
      level: 'B1',
      price: 2,
      desc: 'Intermediate immigration-level French practice',
    },
    {
      level: 'B2',
      price: 3,
      desc: 'Advanced TEF/TCF reading + listening tasks',
    },
    {
      level: 'C1',
      price: 4,
      desc: 'Complex academic + professional French',
    },
    {
      level: 'C2',
      price: 5,
      desc: 'Near-native exam simulation (expert level)',
    },
  ]

  const subscriptions = [
    {
      title: 'CLB 5 Plan',
      levels: 'A1 → B1',
      price: '9.99 / month',
      desc: 'Basic immigration preparation path',
    },
    {
      title: 'CLB 6 Plan',
      levels: 'A1 → B2',
      price: '14.99 / month',
      desc: 'Full TEF/TCF preparation system',
    },
    {
      title: 'CLB 7 Plan (Premium)',
      levels: 'A1 → C2',
      price: '19.99 / month',
      desc: 'Complete exam mastery + AI feedback',
    },
  ]

  return (
    <main
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '60px',
      }}
    >
      {/* HEADER */}
      <h1 style={{ fontSize: '40px' }}>
        Choose Your Learning Path
      </h1>

      <p style={{ color: '#aaa', marginTop: '10px' }}>
        Practice TEF & TCF like a real exam system
      </p>

      {/* QUICK BITES */}
      <section style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '28px' }}>
          ⚡ Quick Bites (Pay Per Practice)
        </h2>

        <p style={{ color: '#888', marginTop: '5px' }}>
          Instant full exam simulations (Reading + Listening + Writing + Speaking)
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '25px',
          }}
        >
          {quickBites.map((item) => (
            <div
              key={item.level}
              style={{
                background: '#111',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #222',
              }}
            >
              <h3 style={{ fontSize: '22px' }}>
                {item.level}
              </h3>

              <p style={{ color: '#aaa', marginTop: '10px' }}>
                {item.desc}
              </p>

              <p style={{ marginTop: '15px' }}>
                💰 ${item.price}
              </p>

              <button
                style={{
                  marginTop: '15px',
                  width: '100%',
                  padding: '10px',
                  background: '#fff',
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
                onClick={() => router.push('/dashboard')}
              >
                Start Quick Bite
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTIONS */}
      <section style={{ marginTop: '80px' }}>
        <h2 style={{ fontSize: '28px' }}>
          📚 Subscription Plans
        </h2>

        <p style={{ color: '#888', marginTop: '5px' }}>
          Full structured TEF/TCF preparation paths
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '25px',
          }}
        >
          {subscriptions.map((plan) => (
            <div
              key={plan.title}
              style={{
                background: '#111',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #222',
              }}
            >
              <h3 style={{ fontSize: '22px' }}>
                {plan.title}
              </h3>

              <p style={{ color: '#aaa', marginTop: '10px' }}>
                Levels: {plan.levels}
              </p>

              <p style={{ marginTop: '10px' }}>
                {plan.desc}
              </p>

              <p style={{ marginTop: '15px' }}>
                💳 {plan.price}
              </p>

              <button
                style={{
                  marginTop: '15px',
                  width: '100%',
                  padding: '10px',
                  background: '#fff',
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
                onClick={() => router.push('/register')}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
