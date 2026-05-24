export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#000',
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '120px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '64px', fontWeight: 500 }}>
          TEF & TCF Preparation Platform
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>
          Structured exam simulation for Canadian immigration French tests
        </p>

        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <a style={buttonPrimary} href="/register">
            Start Free
          </a>

          <a style={buttonSecondary} href="/explore">
            Explore Plans
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '60px 20px 120px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px',
        }}
      >
        {features.map((f) => (
          <div key={f.title} style={cardStyle}>
            <h3 style={{ fontWeight: 500 }}>{f.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
              {f.desc}
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}

const features = [
  {
    title: 'Real Exam Simulation',
    desc: 'Practice TEF/TCF style structured exams.',
  },
  {
    title: 'Reading & Listening',
    desc: 'Authentic comprehension tasks.',
  },
  {
    title: 'Writing Evaluation',
    desc: 'AI-based correction system.',
  },
  {
    title: 'Speaking Practice',
    desc: 'Oral response simulation.',
  },
]

const cardStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '18px',
  padding: '20px',
  backdropFilter: 'blur(12px)',
}

const buttonPrimary = {
  background: '#fff',
  color: '#000',
  padding: '12px 18px',
  borderRadius: '14px',
  fontSize: '14px',
}

const buttonSecondary = {
  background: 'rgba(255,255,255,0.08)',
  color: '#fff',
  padding: '12px 18px',
  borderRadius: '14px',
  fontSize: '14px',
  border: '1px solid rgba(255,255,255,0.1)',
}
