'use client'
import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { ArrowLeft, Send, UserPlus } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'
import type { Group, Message } from '@/lib/types'

export default function GroupDetailClient({ group, initialMessages, isMember, userId }: {
  group: Group; initialMessages: Message[]; isMember: boolean; userId: string
}) {
  const supabase = createClient()
  const [messages, setMessages] = useState(initialMessages)
  const [text, setText] = useState('')
  const [joined, setJoined] = useState(isMember)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const channel = supabase.channel(`group:${group.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages',
        filter: `group_id=eq.${group.id}` },
        async ({ new: msg }) => {
          const { data: profile } = await supabase.from('profiles').select('*').eq('id', msg.sender_id).single()
          setMessages(prev => [...prev, { ...msg, profiles: profile } as Message])
          setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
        })
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [group.id])

  async function join() {
    await supabase.from('group_members').insert({ group_id: group.id, user_id: userId })
    setJoined(true)
  }

  async function send() {
    if (!text.trim() || !joined) return
    await supabase.from('messages').insert({ group_id: group.id, sender_id: userId, content: text.trim() })
    setText('')
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100">
        <Link href="/groups"><ArrowLeft size={20} /></Link>
        <div className="w-9 h-9 rounded-lg bg-[var(--green-light)] flex items-center justify-center font-bold text-[var(--green)]">
          {group.name[0]}
        </div>
        <div>
          <p className="font-semibold text-sm">{group.name}</p>
          <p className="text-xs text-gray-500">👥 {group.member_count.toLocaleString()} members</p>
        </div>
        {!joined && (
          <button onClick={join}
            className="ml-auto flex items-center gap-1 bg-[var(--green)] text-white rounded-xl px-3 py-1.5 text-xs font-semibold">
            <UserPlus size={13} /> Join
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map(msg => {
          const isMe = msg.sender_id === userId
          return (
            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] rounded-2xl px-3 py-2 ${isMe ? 'bg-[var(--green)] text-white' : 'bg-white text-gray-800'}`}>
                {!isMe && <p className="text-[10px] font-semibold text-[var(--green)] mb-1">{(msg as any).profiles?.full_name}</p>}
                <p className="text-sm">{msg.content}</p>
                <p className={`text-[10px] mt-1 ${isMe ? 'text-white/70' : 'text-gray-400'}`}>
                  {format(new Date(msg.created_at), 'HH:mm')}
                </p>
              </div>
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>

      {joined ? (
        <div className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-100">
          <input value={text} onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Type a message..."
            className="flex-1 bg-[var(--bg)] rounded-xl px-4 py-2.5 text-sm focus:outline-none" />
          <button onClick={send}
            className="w-10 h-10 bg-[var(--green)] rounded-xl flex items-center justify-center">
            <Send size={16} color="white" />
          </button>
        </div>
      ) : (
        <div className="px-4 py-3 bg-white border-t">
          <button onClick={join}
            className="w-full bg-[var(--green)] text-white rounded-xl py-3 text-sm font-semibold">
            Join group to chat
          </button>
        </div>
      )}
    </div>
  )
}