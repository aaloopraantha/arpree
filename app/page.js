export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 20px" }}>

        {/* BADGE */}
        <div style={{
          display: "inline-block",
          padding: "6px 12px",
          border: "1px solid #333",
          borderRadius: "20px",
          fontSize: "14px",
          marginBottom: "20px"
        }}>
          TEF • TCF Canada Preparation
        </div>

        {/* TITLE */}
        <h1 style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "1.1" }}>
          Pass Your French Exam for Canadian Immigration
        </h1>

        {/* DESCRIPTION */}
        <p style={{ fontSize: "20px", color: "#aaa", marginTop: "20px", maxWidth: "700px" }}>
          Practice real TEF and TCF exams with structured reading, listening, writing,
          and speaking training.
        </p>

        {/* BUTTONS */}
        <div style={{ marginTop: "40px", display: "flex", gap: "15px" }}>

          <a href="/register" style={{
            background: "#fff",
            color: "#000",
            padding: "12px 20px",
            borderRadius: "10px",
            fontWeight: "bold",
            textDecoration: "none"
          }}>
            Get Started
          </a>

          <a href="/login" style={{
            border: "1px solid #444",
            padding: "12px 20px",
            borderRadius: "10px",
            color: "#fff",
            textDecoration: "none"
          }}>
            Login
          </a>

        </div>

        {/* FEATURES */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "80px"
        }}>

          <div style={{ background: "#111", padding: "20px", borderRadius: "15px" }}>
            <h2>Reading</h2>
            <p style={{ color: "#aaa" }}>Practice real exam questions</p>
          </div>

          <div style={{ background: "#111", padding: "20px", borderRadius: "15px" }}>
            <h2>Listening</h2>
            <p style={{ color: "#aaa" }}>Improve comprehension skills</p>
          </div>

          <div style={{ background: "#111", padding: "20px", borderRadius: "15px" }}>
            <h2>Writing & Speaking</h2>
            <p style={{ color: "#aaa" }}>With feedback</p>
          </div>

        </div>

      </section>

    </main>
  );
}
