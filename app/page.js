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
        <h1 style={{ fontSize: '28px' }}>
          Arpree
        </h1>

        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
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
          Master TEF & TCF Canada With AI-Powered Practice
        </h1>

        <p
          style={{
            marginTop: '30px',
            color: '#aaa',
            fontSize: '22px',
            lineHeight: '1.6',
          }}
        >
          Practice reading, listening, writing, and speaking with
          real exam simulations and instant AI feedback.
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
            href="/login"
            style={{
              border: '1px solid #333',
              color: '#fff',
              padding: '16px 32px',
              textDecoration: 'none',
              borderRadius: '10px',
              fontSize: '18px',
            }}
          >
            Login
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
          Everything You Need To Succeed
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
              title: 'Reading Practice',
              desc: 'Interactive TEF & TCF reading simulations with scoring.',
            },
            {
              title: 'Listening Practice',
              desc: 'Audio exercises that mirror the real exam structure.',
            },
            {
              title: 'AI Writing Feedback',
              desc: 'Instant corrections and score predictions for writing tasks.',
            },
            {
              title: 'Speaking Preparation',
              desc: 'Prepare for oral interviews with guided prompts.',
            },
            {
              title: 'Performance Tracking',
              desc: 'Track your progress and weak areas over time.',
            },
            {
              title: 'Canada Immigration Focus',
              desc: 'Built specifically for TEF Canada & TCF Canada success.',
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
              <h3 style={{ fontSize: '24px' }}>
                {feature.title}
              </h3>

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
          Start Your TEF/TCF Journey Today
        </h2>

        <p
          style={{
            marginTop: '20px',
            color: '#aaa',
            fontSize: '20px',
          }}
        >
          Join future Canadian immigrants improving their French scores.
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
