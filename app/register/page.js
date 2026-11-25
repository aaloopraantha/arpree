'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function register() {
    setLoading(true); setError(''); setMessage('')
    const { data, error: signupError } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } })
    setLoading(false)
    if (signupError) return setError(signupError.message)
    if (data.session) router.push('/dashboard')
    else setMessage('Account created. Check your email to confirm your account, then log in.')
  }

  async function signInWithGoogle() {
    setError('')
    const { error: oauthError } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/dashboard` } })
    if (oauthError) setError(oauthError.message)
  }

  return <main className="auth-wrap"><div className="auth-card"><span className="eyebrow">ARPREE</span><h1 style={{ margin: '12px 0 8px' }}>Create your account</h1><p className="muted">Save practice results and track your French progress.</p><div className="form" style={{ marginTop: 24 }}><input className="input" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} /><input className="input" placeholder="Email" type="email" autoComplete="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><input className="input" placeholder="Password (8+ characters)" type="password" autoComplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)} /><button className="btn-primary" disabled={loading || password.length < 8 || !email} onClick={register}>{loading ? 'Creating account…' : 'Create account'}</button><div className="divider">or</div><button className="btn-secondary" onClick={signInWithGoogle}>Continue with Google</button>{error && <p className="error">{error}</p>}{message && <p className="success">{message}</p>}</div><p className="muted" style={{ marginTop: 18, fontSize: 13 }}>Already have an account? <button onClick={()=>router.push('/login')} style={{background:'none',border:0,color:'#fff',padding:0,textDecoration:'underline'}}>Log in</button></p></div></main>
}
