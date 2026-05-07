'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const [form, setForm] = useState({ full_name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setError('')
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { full_name: form.full_name } }
    })
    if (error) { setError(error.message); setLoading(false) }
    else setSuccess(true)
  }

  if (success) return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-5xl mb-4">📧</div>
        <h2 className="text-xl font-bold mb-2">Check your email!</h2>
        <p className="text-gray-500">We sent a confirmation link to {form.email}</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[var(--bg)]">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-[var(--green)] mb-1">Join MarburgConnect</h1>
        <p className="text-gray-500 mb-8">Your Marburg community awaits</p>

        <form onSubmit={handleRegister} className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          {(['full_name', 'email', 'password'] as const).map(field => (
            <div key={field}>
              <label className="text-sm font-medium text-gray-700 block mb-1 capitalize">
                {field.replace('_', ' ')}
              </label>
              <input type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                value={form[field]} onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                required />
            </div>
          ))}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-[var(--green)] text-white rounded-xl py-3 font-semibold text-sm disabled:opacity-60">
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-[var(--green)] font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  )
}