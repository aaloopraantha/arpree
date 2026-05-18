export default function Home() {
  return (
    <main style={styles.page}>

      <header style={styles.nav}>
        <div style={styles.logo}>Arpree</div>

        <div style={styles.links}>
          <a href="/login" style={styles.link}>Login</a>
          <a href="/dashboard" style={styles.link}>Dashboard</a>
        </div>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.title}>
          TEF & TCF Practice, Simplified
        </h1>

        <p style={styles.subtitle}>
          CLB-based simulations, Mini Bites, and real exam-style practice tests.
        </p>

        <button style={styles.button}>
          Start Practice
        </button>
      </section>

    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#F6F8FB",
    minHeight: "100vh",
    margin: 0
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderBottom: "1px solid #E5E7EB",
    background: "white"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    textDecoration: "none",
    color: "#333"
  },
  hero: {
    textAlign: "center",
    padding: "120px 20px",
    maxWidth: "800px",
    margin: "0 auto"
  },
  title: {
    fontSize: "42px",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px"
  },
  button: {
    background: "#C81D25",
    color: "white",
    border: "none",
    padding: "14px 22px",
    borderRadius: "10px",
    cursor: "pointer"
  }
};
