export default function Home() {
  return (
    <main style={styles.page}>

      <header style={styles.nav}>
        <div style={styles.logo}>Arpree</div>
        <a href="/login" style={styles.link}>Login</a>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.title}>
          TEF & TCF Canada Practice Platform
        </h1>

        <p style={styles.subtitle}>
          Simulations, Mini Bites, and CLB-based preparation — all in one place.
        </p>

        <a href="/login">
          <button style={styles.button}>
            Start Practice
          </button>
        </a>
      </section>

    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#F6F8FB",
    minHeight: "100vh"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderBottom: "1px solid #E5E7EB",
    background: "white"
  },
  logo: {
    fontWeight: "bold"
  },
  link: {
    textDecoration: "none",
    color: "#333"
  },
  hero: {
    textAlign: "center",
    padding: "120px 20px"
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
    padding: "14px 22px",
    background: "#C81D25",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  }
};
