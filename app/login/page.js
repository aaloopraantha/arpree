'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function login() {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (!error) {
      router.push('/dashboard')
    } else {
      alert(error.message)
    }
  }

  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })
  }

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.primaryBtn} onClick={login}>
          {loading ? 'Loading...' : 'Login'}
        </button>

        <div style={styles.divider}>or</div>

        <button style={styles.googleBtn} onClick={loginWithGoogle}>
          Continue with Google
        </button>
      </div>
    </main>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 360,
    padding: 30,
    borderRadius: 18,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
  },

  title: {
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 20,
  },

  input: {
    width: '100%',
    padding: 12,
    marginTop: 10,
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
  },

  primaryBtn: {
    width: '100%',
    marginTop: 15,
    padding: 12,
    borderRadius: 14,
    border: 'none',
    background: '#fff',
    color: '#000',
    cursor: 'pointer',
  },

  googleBtn: {
    width: '100%',
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
    cursor: 'pointer',
  },

  divider: {
    textAlign: 'center',
    margin: '15px 0',
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },
}
