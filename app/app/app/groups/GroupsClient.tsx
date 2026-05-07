'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Search, Plus } from 'lucide-react'
import type { Group } from '@/lib/types'

export default function GroupsClient({ myGroups, discover, userId }: {
  myGroups: Group[]; discover: Group[]; userId: string
}) {
  const [query, setQuery] = useState('')
  const filtered = discover.filter(g =>
    g.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="px-4 pt-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Groups</h1>
        <Link href="/groups/create"
          className="flex items-center gap-1.5 bg-[var(--green)] text-white rounded-xl px-4 py-2 text-sm font-semibold">
          <Plus size={16} /> Create
        </Link>
      </div>

      <div className="relative mb-5">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input value={query} onChange={e => setQuery(e.target.value)}
          placeholder="Search groups..."
          className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--green)]" />
      </div>

      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">My Groups</p>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5">
        {myGroups.map((g, i) => (
          <Link key={g.id} href={`/groups/${g.id}`}
            className={`flex items-center gap-3 px-4 py-3.5 ${i < myGroups.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="w-11 h-11 rounded-xl bg-[var(--green-light)] flex items-center justify-center text-lg">
              {g.name[0]}
            </div>
            <div>
              <p className="font-semibold text-sm">{g.name}</p>
              <p className="text-xs text-gray-500">👥 {g.member_count.toLocaleString()} members</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Discover</p>
      <div className="grid grid-cols-2 gap-3">
        {filtered.map(g => (
          <Link key={g.id} href={`/groups/${g.id}`}
            className="relative rounded-2xl overflow-hidden h-36 bg-gray-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-3">
              <p className="text-white font-bold text-sm leading-tight">{g.name}</p>
              <p className="text-white/80 text-xs">👥 {g.member_count.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}