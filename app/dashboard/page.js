'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser()

      if (!data?.user) {
        router.push('/login')
      } else {
        setUser(data.user)
      }

      setLoading(false)
    }

    getUser()
  }, [])

  async function logout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) return null

  return (
    <main
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '60px',
      }}
    >
      <h1 style={{ fontSize: '40px' }}>Dashboard</h1>

      <div
        style={{
          marginTop: '40px',
          background: '#111',
          padding: '30px',
          borderRadius: '12px',
        }}
      >
        <p>Email</p>
        <p style={{ color: '#aaa' }}>{user?.email}</p>

        <div style={{ marginTop: '30px' }}>
          <p>Progress</p>

          <div
            style={{
              width: '100%',
              height: '10px',
              background: '#222',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '35%',
                height: '100%',
                background: '#fff',
              }}
            />
          </div>

          <p style={{ color: '#aaa', marginTop: '10px' }}>
            35% Complete (Mock Data)
          </p>
        </div>

        <button
          onClick={logout}
          style={{
            marginTop: '40px',
            background: '#fff',
            color: '#000',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </main>
  )
}
