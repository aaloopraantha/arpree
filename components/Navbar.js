export default function Navbar() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 60px',
        borderBottom: '1px solid #111',
        backgroundColor: '#000',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 500,
        }}
      >
        Arpree
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '25px',
          alignItems: 'center',
        }}
      >
        <a href="/explore" style={linkStyle}>
          Explore
        </a>

        <a href="/login" style={linkStyle}>
          Login
        </a>

        <a href="/register" style={buttonStyle}>
          Get Started
        </a>
      </div>
    </nav>
  )
}

const linkStyle = {
  color: '#aaa',
  textDecoration: 'none',
  fontSize: '14px',
}

const buttonStyle = {
  background: '#fff',
  color: '#000',
  padding: '10px 18px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 500,
}
