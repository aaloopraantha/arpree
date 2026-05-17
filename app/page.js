export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#ffffff",
        color: "#0B2E4A",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Arpree
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          Bite-sized TEF & TCF exam simulations for Canada.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "24px",
              borderRadius: "16px",
            }}
          >
            <h2>CLB 5</h2>
            <p>Beginner simulations</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "24px",
              borderRadius: "16px",
            }}
          >
            <h2>CLB 6</h2>
            <p>Intermediate simulations</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "24px",
              borderRadius: "16px",
            }}
          >
            <h2>CLB 7</h2>
            <p>Advanced simulations</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            padding: "30px",
            background: "#F3F5F7",
            borderRadius: "20px",
          }}
        >
          <h2>Mini Bites</h2>

          <p
            style={{
              marginBottom: "20px",
              color: "#555",
            }}
          >
            Quick 5-minute practice simulations.
          </p>

          <button
            style={{
              background: "#C81D25",
              color: "white",
              border: "none",
              padding: "14px 22px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Try a Mini Bite
          </button>
        </div>
      </div>
    </main>
  );
}
