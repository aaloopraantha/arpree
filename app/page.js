export default function Home() {
  return (
    <main style={styles.page}>
      
      {/* TOP NAV */}
      <header style={styles.nav}>
        <div style={styles.logo}>arpree</div>
        <div style={styles.navRight}>
          <button style={styles.navBtn}>Login</button>
          <button style={styles.navBtnPrimary}>Start Practice</button>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.badge}>
          TEF & TCF Canada Simulation Platform
        </div>

        <h1 style={styles.title}>
          Practice real French exam conditions in minutes.
        </h1>

        <p style={styles.subtitle}>
          Bite-sized CLB-based simulations designed to feel like the real TEF/TCF exam.
        </p>

        <div style={styles.ctaRow}>
          <button style={styles.primaryBtn}>Start Free Test</button>
          <button style={styles.secondaryBtn}>View Mini Bites ($1)</button>
        </div>
      </section>

      {/* LEVELS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Choose Your Level</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>CLB 5</h3>
            <p>Beginner immigration level simulations</p>
          </div>

          <div style={styles.card}>
            <h3>CLB 6</h3>
            <p>Intermediate TEF/TCF practice sets</p>
          </div>

          <div style={styles.card}>
            <h3>CLB 7</h3>
            <p>Advanced exam simulation training</p>
          </div>
        </div>
      </section>

      {/* MINI BITES */}
      <section style={styles.mini}>
        <h2 style={styles.sectionTitle}>Mini Bites</h2>
        <p style={styles.miniText}>
          5-minute real exam-style questions you can buy individually.
        </p>

        <div style={styles.grid}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={styles.miniCard}>
              <h3>Listening Bite #{i}</h3>
              <p>Quick TEF-style simulation</p>
              <div style={styles.price}>$1.99</div>
              <button style={styles.buyBtn}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} arpree — TEF/TCF Simulation Platform
      </footer>
    </main>
  );
}

/* STYLES */
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#F7F9FC",
    color: "#0B1F3B",
    minHeight: "100vh",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    background: "white",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
  },

  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },

  navRight: {
    display: "flex",
    gap: "10px",
  },

  navBtn: {
    padding: "8px 14px",
    border: "1px solid #ddd",
    background: "white",
    borderRadius: "8px",
  },

  navBtnPrimary: {
    padding: "8px 14px",
    border: "none",
    background: "#C81D25",
    color: "white",
    borderRadius: "8px",
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  badge: {
    display: "inline-block",
    background: "#E8EEF7",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "42px",
    marginBottom: "15px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },

  ctaRow: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primaryBtn: {
    background: "#C81D25",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
  },

  secondaryBtn: {
    background: "white",
    border: "1px solid #ddd",
    padding: "12px 20px",
    borderRadius: "10px",
  },

  section: {
    padding: "60px 40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "26px",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #eee",
  },

  mini: {
    padding: "60px 40px",
    background: "#EEF3FA",
  },

  miniText: {
    marginBottom: "20px",
    color: "#555",
  },

  miniCard: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #eee",
  },

  price: {
    fontSize: "18px",
    margin: "10px 0",
  },

  buyBtn: {
    width: "100%",
    padding: "10px",
    background: "#0B1F3B",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },

  footer: {
    textAlign: "center",
    padding: "30px",
    fontSize: "12px",
    color: "#777",
  },
};
