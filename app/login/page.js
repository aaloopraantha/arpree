'use client'

import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main style={{
      background: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>

      <div style={{
        width: "400px",
        background: "#111",
        padding: "30px",
        borderRadius: "12px"
      }}>

        <h1 style={{ marginBottom: "20px" }}>Login</h1>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            background: "#000",
            border: "1px solid #333",
            color: "#fff"
          }}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            background: "#000",
            border: "1px solid #333",
            color: "#fff"
          }}
        />

        <button style={{
          width: "100%",
          padding: "10px",
          background: "#fff",
          color: "#000",
          fontWeight: "bold",
          border: "none"
        }}>
          Login (not connected yet)
        </button>

      </div>

    </main>
  )
}
