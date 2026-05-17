export default function Home() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      background: '#ffffff',
      color: '#0B2E4A',
      minHeight: '100vh'
    }}>

      <section style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
            Arpree
          </h1>

          <button style={{
            background: '#C81D25',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '8px'
          }}>
            Start Practice
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>

          <div>
            <p style={{
              display: 'inline-block',
              background: '#F3F5F7',
              padding: '8px 12px',
              borderRadius: '6px',
              marginBottom: '20px'
            }}>
              Bite-Sized TEF & TCF Simulations
            </p>

            <h2 style={{
              fontSize: '48px',
              lineHeight: '1.1',
              marginBottom: '20px'
            }}>
              Practice real French exam simulations in minutes.
            </h2>

            <p style={{
              color: '#555',
}
