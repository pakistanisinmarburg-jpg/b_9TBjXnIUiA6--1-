'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false) }
    else router.push('/home')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[var(--bg)]">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-[var(--green)] mb-1">MarburgConnect</h1>
        <p className="text-gray-500 mb-8">Connect. Belong. Thrive.</p>

        <form onSubmit={handleLogin} className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              placeholder="you@example.com" required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              placeholder="••••••••" required />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-[var(--green)] text-white rounded-xl py-3 font-semibold text-sm disabled:opacity-60">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          No account?{' '}
          <Link href="/register" className="text-[var(--green)] font-semibold">Register</Link>
        </p>
      </div>
    </div>
  )
}