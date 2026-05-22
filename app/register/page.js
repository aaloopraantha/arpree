'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function RegisterPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert('Account created successfully!')
      router.push('/login')
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

        <h1>Create Account</h1>

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
          onClick={handleRegister}
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
          Register
        </button>

      </div>

    </main>
  )
}
