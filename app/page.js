'use client'

import { useRouter } from 'next/navigation'

const features = [
  ['01', 'Exam-style practice', 'Train with structured TEF/TCF-style reading and comprehension tasks.'],
  ['02', 'Four core skills', 'Build reading, listening, writing, and speaking confidence in one place.'],
  ['03', 'Progress that matters', 'See what you have practiced and where you need more work.'],
]

export default function HomePage() {
  const router = useRouter()
  return (
    <main className="shell">
      <section className="hero">
        <div className="container">
          <span className="eyebrow">French exam preparation · Canada</span>
          <h1>Prepare smarter for TEF &amp; TCF Canada.</h1>
          <p>ARPREE is being rebuilt into a focused practice platform for learners who want realistic exam preparation, measurable progress, and a clear path toward their target language level.</p>
          <div className="actions">
            <button className="btn-primary" onClick={() => router.push('/register')}>Create free account</button>
            <button className="btn-secondary" onClick={() => router.push('/explore')}>Explore practice</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><h2>Built around how you actually prepare</h2><span className="muted">A1 → C2</span></div>
          <div className="grid">
            {features.map(([num, title, text]) => <article className="card" key={num}><div className="feature-icon">{num}</div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <span className="eyebrow">Your workspace</span>
            <h2 style={{margin:'12px 0 8px'}}>One dashboard for your French journey.</h2>
            <p className="muted">Start with a practice session, review your results, and keep building toward your target.</p>
            <div className="stats" style={{marginTop:24}}>
              {['Reading','Listening','Writing','Speaking'].map((skill, i) => <div className="stat" key={skill}><span className="muted">{skill}</span><strong>{[68,54,61,47][i]}%</strong><div className="progress" style={{marginTop:12}}><span style={{width:`${[68,54,61,47][i]}%`}} /></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{textAlign:'center',padding:'48px 24px'}}>
            <span className="eyebrow">Start today</span><h2 style={{margin:'12px 0'}}>Your next practice session is one click away.</h2>
            <p className="muted">Free account. Practice first. Build from there.</p>
            <div className="actions"><button className="btn-primary" onClick={() => router.push('/register')}>Get started</button><button className="btn-secondary" onClick={() => router.push('/exam')}>Try an exam</button></div>
          </div>
        </div>
      </section>
      <footer className="footer"><div className="container">© 2021–2026 ARPREE · TEF &amp; TCF Canada preparation</div></footer>
    </main>
  )
}
