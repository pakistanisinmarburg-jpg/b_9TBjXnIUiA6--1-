'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

export default function MessagesClient({ conversations, userId }: { conversations: any[]; userId: string }) {
  const [query, setQuery] = useState('')
  const filtered = conversations.filter(c =>
    c.group.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="px-4 pt-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Messages</h1>

      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input value={query} onChange={e => setQuery(e.target.value)}
          placeholder="Search messages..."
          className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--green)]" />
      </div>

      <div className="space-y-0.5">
        {filtered.map(({ group, lastMsg, unread }) => (
          <Link key={group.id} href={`/groups/${group.id}`}
            className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 mb-2 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--green-light)] flex items-center justify-center text-lg font-bold text-[var(--green)] flex-shrink-0 relative">
              {group.name[0]}
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[var(--green)] rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-[7px]">👥</span>
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="font-semibold text-sm truncate">{group.name}</p>
                {lastMsg && (
                  <p className={`text-xs ml-2 flex-shrink-0 ${unread > 0 ? 'text-[var(--green)] font-semibold' : 'text-gray-400'}`}>
                    {formatDistanceToNow(new Date(lastMsg.created_at), { addSuffix: false })} ago
                  </p>
                )}
              </div>
              <p className="text-xs text-gray-500 truncate mt-0.5">
                {lastMsg ? lastMsg.content : 'No messages yet'}
              </p>
            </div>
            {unread > 0 && (
              <div className="w-5 h-5 bg-[var(--green)] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">{unread}</span>
              </div>
            )}
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">💬</p>
            <p className="text-sm">Join groups to start messaging</p>
            <Link href="/groups" className="text-[var(--green)] font-semibold text-sm mt-2 block">Browse Groups →</Link>
          </div>
        )}
      </div>
    </div>
  )
}