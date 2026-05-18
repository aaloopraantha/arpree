"use client";

export default function Home() {
  return (
    <main style={styles.page}>

      {/* NAVBAR */}
      <header style={styles.nav}>
        <div style={styles.logo}>Arpree</div>

        <div style={styles.navButtons}>
          <button
            style={styles.secondaryBtn}
            onClick={() => window.location.href = "/login"}
          >
            Login
          </button>

          <button
            style={styles.primaryBtn}
            onClick={() => window.location.href = "/dashboard"}
          >
            Start Practicing
          </button>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.badge}>
          TEF / TCF Canada Simulation Platform
        </div>

        <h1 style={styles.title}>
          French exam practice that feels like the real test.
        </h1>

        <p style={styles.subtitle}>
          Bite-sized simulations, CLB-level tracking, and full mock exams for TEF & TCF Canada.
        </p>

        <div style={styles.heroButtons}>
          <button
            style={styles.primaryBtnLarge}
            onClick={() => window.location.href = "/dashboard"}
          >
            Start Free Practice
          </button>

          <button
            style={styles.secondaryBtnLarge}
            onClick={() => window.location.href = "/mini-bites"}
          >
            Explore Mini Bites
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why learners choose Arpree</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>CLB-Level Simulations</h3>
            <p>Practice by CLB 5, 6, or 7 levels with realistic timing.</p>
          </div>

          <div style={styles.card}>
            <h3>Mini Bites</h3>
            <p>Quick 5-minute simulations you can purchase individually.</p>
          </div>

          <div style={styles.card}>
};
