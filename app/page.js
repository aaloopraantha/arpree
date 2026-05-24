export default function HomePage() {
  return (
    <main
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'Arial',
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '25px 60px',
          borderBottom: '1px solid #111',
        }}
      >
        <h1 style={{ fontSize: '28px' }}>Arpree</h1>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <a
            href="/explore"
            style={{
              color: '#aaa',
              textDecoration: 'none',
            }}
          >
            Explore
          </a>

          <a
            href="/login"
            style={{
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Login
          </a>

          <a
            href="/register"
            style={{
              background: '#fff',
              color: '#000',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: '120px 20px',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            color: '#888',
            marginBottom: '20px',
            fontSize: '18px',
          }}
        >
          TEF • TCF • Canada Immigration French Exam Prep
        </p>

        <h1
          style={{
            fontSize: '72px',
            lineHeight: '1.1',
            fontWeight: 'bold',
          }}
        >
          Master TEF & TCF With Real Exam Simulations
        </h1>

        <p
          style={{
            marginTop: '30px',
            color: '#aaa',
            fontSize: '22px',
            lineHeight: '1.6',
          }}
        >
          Practice reading, listening, writing, and speaking with structured
          exam-style tests and AI-powered feedback.
        </p>

        <div
          style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="/register"
            style={{
              background: '#fff',
              color: '#000',
              padding: '16px 32px',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Start Free
          </a>

          <a
            href="/explore"
            style={{
              border: '1px solid #333',
              color: '#fff',
              padding: '16px 32px',
              textDecoration: 'none',
              borderRadius: '10px',
              fontSize: '18px',
            }}
          >
            View Plans
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '48px',
            marginBottom: '60px',
          }}
        >
          Everything You Need To Pass TEF & TCF
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
          }}
        >
          {[
            {
              title: 'Real Exam Simulation',
              desc: 'Practice full TEF/TCF-style tests with structured sections.',
            },
            {
              title: 'Reading & Listening',
              desc: 'Immersive comprehension exercises based on real exam patterns.',
            },
            {
              title: 'Writing AI Feedback',
              desc: 'Get instant scoring and corrections for writing tasks.',
            },
            {
              title: 'Speaking Practice',
              desc: 'Prepare oral responses with guided prompts.',
            },
            {
              title: 'Quick Bites',
              desc: 'Small paid practice exams for fast improvement.',
            },
            {
              title: 'Structured Learning Paths',
              desc: 'CLB-based progression from A1 to C2.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              style={{
                background: '#111',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid #1f1f1f',
              }}
            >
              <h3 style={{ fontSize: '22px' }}>{feature.title}</h3>

              <p
                style={{
                  marginTop: '15px',
                  color: '#aaa',
                  lineHeight: '1.7',
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '120px 20px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '54px',
            lineHeight: '1.2',
          }}
        >
          Start Preparing for Canadian Immigration Today
        </h2>

        <p
          style={{
            marginTop: '20px',
            color: '#aaa',
            fontSize: '20px',
          }}
        >
          Join students preparing for TEF & TCF success worldwide.
        </p>

        <a
          href="/register"
          style={{
            display: 'inline-block',
            marginTop: '40px',
            background: '#fff',
            color: '#000',
            padding: '18px 40px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '18px',
          }}
        >
          Create Free Account
        </a>
      </section>
    </main>
  )
}
