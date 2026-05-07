'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, Mail, Users, Calendar, LogOut, Edit } from 'lucide-react'
import { format } from 'date-fns'
import type { Profile, Group } from '@/lib/types'

export default function ProfileClient({ profile, groups, email }: {
  profile: Profile; groups: Group[]; email: string
}) {
  const supabase = createClient()
  const router = useRouter()
  const [uploading, setUploading] = useState(false)

  async function signOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  async function uploadAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return
    setUploading(true)
    const file = e.target.files[0]
    const path = `${profile.id}/${Date.now()}.${file.name.split('.').pop()}`
    const { data } = await supabase.storage.from('avatars').upload(path, file, { upsert: true })
    if (data) {
      const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(path)
      await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', profile.id)
      router.refresh()
    }
    setUploading(false)
  }

  return (
    <div className="px-4 pt-5 pb-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Link href="/profile/edit" className="text-[var(--green)] font-semibold text-sm">Edit</Link>
      </div>

      {/* Avatar + Info */}
      <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center mb-4">
        <label className="relative cursor-pointer group">
          <div className="w-20 h-20 rounded-full bg-[var(--green-light)] flex items-center justify-center overflow-hidden">
            {profile.avatar_url
              ? <img src={profile.avatar_url} alt="" className="w-full h-full object-cover" />
              : <User size={36} color="var(--green)" />}
          </div>
          <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <Edit size={16} color="white" />
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={uploadAvatar} disabled={uploading} />
        </label>
        <h2 className="font-bold text-lg mt-3">{profile.full_name || 'Anonymous'}</h2>
        <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
          <Mail size={13} /> {email}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
          <p className="flex items-center gap-1.5 text-xs text-gray-500 justify-center mb-1"><Users size={13} /> Communities</p>
          <p className="text-2xl font-bold">{groups.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
          <p className="flex items-center gap-1.5 text-xs text-gray-500 justify-center mb-1"><Calendar size={13} /> Member Since</p>
          <p className="font-bold text-sm">{format(new Date(profile.created_at), 'MMMM yyyy')}</p>
        </div>
      </div>

      {/* My Communities */}
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">My Communities</p>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5">
        {groups.map((g, i) => (
          <Link key={g.id} href={`/groups/${g.id}`}
            className={`flex items-center gap-3 px-4 py-3.5 ${i < groups.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="w-9 h-9 rounded-xl bg-[var(--green-light)] flex items-center justify-center text-[var(--green)] font-bold">
              {g.name[0]}
            </div>
            <p className="font-medium text-sm">{g.name}</p>
          </Link>
        ))}
      </div>

      <button onClick={signOut}
        className="w-full flex items-center justify-center gap-2 border border-red-200 text-red-500 rounded-2xl py-3 text-sm font-semibold">
        <LogOut size={16} /> Sign Out
      </button>
    </div>
  )
}