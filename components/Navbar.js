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

    const { data } = supabase.auth.onAuthStateChange(() => {
      getUser()
    })

    return () => {
      data.subscription.unsubscribe()
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
        padding: '18px 60px',
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* LOGO */}
      <div
        onClick={() => router.push('/')}
        style={{
          fontSize: '18px',
          fontWeight: 500,
          cursor: 'pointer',
          letterSpacing: '0.5px',
        }}
      >
        ARPREE
      </div>

      {/* LINKS */}
      <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
        <a style={linkStyle} href="/explore">
          Explore
        </a>

        {!user ? (
          <>
            <a style={linkStyle} href="/login">
              Login
            </a>

            <a style={buttonStyle} href="/register">
              Get Started
            </a>
          </>
        ) : (
          <>
            <a style={linkStyle} href="/dashboard">
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
  color: 'rgba(255,255,255,0.65)',
  fontSize: '14px',
}

const buttonStyle = {
  background: 'rgba(255,255,255,0.08)',
  color: '#fff',
  padding: '10px 14px',
  borderRadius: '14px',
  border: '1px solid rgba(255,255,255,0.10)',
  cursor: 'pointer',
  fontSize: '14px',
}
