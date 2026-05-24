'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function DashboardPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
      } else {
        setEmail(user.email)
      }
    }

    checkUser()
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <main
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '40px',
      }}
    >
      <h1>Student Dashboard</h1>

      <p style={{ marginTop: '20px', color: '#aaa' }}>
        Logged in as:
      </p>

      <p>{email}</p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          background: '#fff',
          color: '#000',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>

      <div
        style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        <div
          style={{
            background: '#111',
            padding: '20px',
            borderRadius: '12px',
          }}
        >
          <h2>Reading Practice</h2>
          <p style={{ color: '#aaa' }}>
            Coming soon
          </p>
        </div>

        <div
          style={{
            background: '#111',
            padding: '20px',
            borderRadius: '12px',
          }}
        >
          <h2>Listening Practice</h2>
          <p style={{ color: '#aaa' }}>
            Coming soon
          </p>
        </div>

        <div
          style={{
            background: '#111',
            padding: '20px',
            borderRadius: '12px',
          }}
        >
          <h2>Writing AI Feedback</h2>
          <p style={{ color: '#aaa' }}>
            Coming soon
          </p>
        </div>
      </div>
    </main>
  )
}
