'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main style={{
      background: '#000',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <div style={{
        width: '400px',
        background: '#111',
        padding: '30px',
        borderRadius: '12px'
      }}>

        <h1>Login</h1>

        <input
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '10px'
          }}
        />

        <input
          placeholder='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '10px'
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '20px',
            background: '#fff',
            color: '#000',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Login
        </button>

      </div>

    </main>
  )
}
