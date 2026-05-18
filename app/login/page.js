"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const loginWithGoogle = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });

    if (error) alert(error.message);

    setLoading(false);
  };

  const loginWithEmail = async () => {
    const email = prompt("Enter your email:");
    if (!email) return;

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`
      }
    });

    if (error) alert(error.message);
    else alert("Check your email for login link");

    setLoading(false);
  };

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1>Arpree Login</h1>
        <p>TEF / TCF Practice Platform</p>

        <button onClick={loginWithGoogle} style={styles.google}>
          Continue with Google
        </button>

        <button onClick={loginWithEmail} style={styles.email}>
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
    width: "320px",
    border: "1px solid #E5E7EB"
  },
  google: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    background: "#0B1F3B",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  },
  email: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#C81D25",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  }
};
