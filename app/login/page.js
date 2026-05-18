export default function Login() {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1>Login</h1>
        <p>Authentication will be enabled next step</p>

        <button style={styles.btn}>Continue with Google</button>
        <button style={styles.btn2}>Continue with Email</button>
      </div>
    </main>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial",
    background: "#F6F8FB"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center"
  },
  btn: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    background: "#0B1F3B",
    color: "white",
    border: "none",
    borderRadius: "10px"
  },
  btn2: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#C81D25",
    color: "white",
    border: "none",
    borderRadius: "10px"
  }
};
