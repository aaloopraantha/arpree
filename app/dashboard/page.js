export default function Dashboard() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "Arial",
      background: "#F5F7FA",
      minHeight: "100vh"
    }}>

      <h1>Welcome back 👋</h1>

      <p>Your TEF/TCF progress dashboard.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "40px"
      }}>

        <div style={card}>
          <h3>Current CLB</h3>
          <h1>6</h1>
        </div>

        <div style={card}>
          <h3>Mini Bites Completed</h3>
          <h1>12</h1>
        </div>

        <div style={card}>
          <h3>Average Score</h3>
          <h1>78%</h1>
        </div>

      </div>

    </main>
  );
}

const card = {
  background: "white",
  padding: "24px",
  borderRadius: "16px",
  border: "1px solid #E5E7EB"
};
