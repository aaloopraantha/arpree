"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Login() {
  const [loading, setLoading] = useState(false);

  const loginWithGoogle = async () => {
    setLoading(true);

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });

    setLoading(false);
  };

  const loginWithEmail = async () => {
    const email = prompt("Enter your email:");

    if (!email) return;

    setLoading(true);

    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`
      }
    });

    setLoading(false);

    alert("Check your email for the login link!");
  };

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1>Login to Arpree</h1>

        <p>Start your TEF/TCF practice journey</p>

        <button onClick={loginWithGoogle} style={styles.googleBtn}>
          Continue with Google
        </button>

        <button onClick={loginWithEmail} style={styles.emailBtn}>
          Continue with Email
        </button>

        {loading && <p>Loading...</p>}
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
    textAlign: "center",
    border: "1px solid #E5E7EB",
    width: "300px"
  },
  googleBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    background: "#0B1F3B",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  emailBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#C81D25",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
