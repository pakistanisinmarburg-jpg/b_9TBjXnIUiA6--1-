'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { QrCode } from 'lucide-react'

export default function JoinViaQR() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const supabase = createClient()
  const router = useRouter()

  async function joinByCode() {
    const { data: group } = await supabase.from('groups').select('id').eq('join_code', code).single()
    if (!group) { setError('Invalid code'); return }
    const { data: { user } } = await supabase.auth.getUser()
    await supabase.from('group_members').insert({ group_id: group.id, user_id: user!.id })
    router.push(`/groups/${group.id}`)
  }

  return (
    <div className="px-4 pt-10 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[var(--green-light)] flex items-center justify-center mx-auto mb-4">
        <QrCode size={32} color="var(--green)" />
      </div>
      <h1 className="text-2xl font-bold mb-2">Join via QR</h1>
      <p className="text-gray-500 text-sm mb-6">Enter the group code or scan a QR code</p>
      <input value={code} onChange={e => setCode(e.target.value.toUpperCase())}
        placeholder="Enter group code"
        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-center text-lg font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-[var(--green)] mb-3" />
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <button onClick={joinByCode}
        className="w-full bg-[var(--green)] text-white rounded-xl py-3 font-semibold">Join Group</button>
    </div>
  )
}