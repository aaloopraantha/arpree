export default function Home() {
  return (
    <main style={styles.page}>
      <h1>Arpree</h1>
      <p>TEF & TCF Practice Platform</p>

      <a href="/login">
        <button style={styles.button}>
          Start Practice
        </button>
      </a>
    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    textAlign: "center",
    padding: 80,
    background: "#F6F8FB",
    minHeight: "100vh"
  },
  button: {
    padding: "12px 20px",
    background: "#C81D25",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  }
};
