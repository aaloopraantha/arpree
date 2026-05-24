'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser()
      setUser(data?.user || null)
    }

    getUser()

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser()
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  async function logout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 60px',
        borderBottom: '1px solid #111',
        backgroundColor: '#000',
      }}
    >
      {/* LOGO */}
      <div
        style={{
          fontSize: '20px',
          fontWeight: 500,
          cursor: 'pointer',
        }}
        onClick={() => router.push('/')}
      >
        ARPREE
      </div>

      {/* NAV LINKS */}
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <a href="/explore" style={linkStyle}>
          Explore
        </a>

        {!user ? (
          <>
            <a href="/login" style={linkStyle}>
              Login
            </a>

            <a href="/register" style={buttonStyle}>
              Get Started
            </a>
          </>
        ) : (
          <>
            <a href="/dashboard" style={linkStyle}>
              Dashboard
            </a>

            <button onClick={logout} style={buttonStyle}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

const linkStyle = {
  color: '#aaa',
  textDecoration: 'none',
  fontSize: '14px',
}

const buttonStyle = {
  background: '#fff',
  color: '#000',
  padding: '10px 18px',
  fontSize: '14px',
  border: 'none',
  cursor: 'pointer',
}
