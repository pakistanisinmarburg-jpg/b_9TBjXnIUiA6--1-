'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Briefcase, ShoppingBag, HelpCircle, AlertTriangle, QrCode } from 'lucide-react'
import type { Event, Group } from '@/lib/types'
import { format } from 'date-fns'

const quickActions = [
  { label: 'Housing', icon: Home, color: '#16a34a', bg: '#dcfce7', href: '/listings?type=housing' },
  { label: 'Jobs & Career', icon: Briefcase, color: '#2563eb', bg: '#dbeafe', href: '/listings?type=job' },
  { label: 'Market', icon: ShoppingBag, color: '#7c3aed', bg: '#ede9fe', href: '/listings?type=market' },
  { label: 'Questions', icon: HelpCircle, color: '#d97706', bg: '#fef3c7', href: '/posts?type=question' },
  { label: 'Report Issue', icon: AlertTriangle, color: '#dc2626', bg: '#fee2e2', href: '/posts?type=issue' },
  { label: 'Join via QR', icon: QrCode, color: '#16a34a', bg: '#dcfce7', href: '/join' },
]

export default function HomeClient({ events, groups }: { events: Event[]; groups: Group[] }) {
  return (
    <div className="pb-4">
      {/* Hero */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
        <div className="absolute inset-0 bg-[var(--green)] opacity-80" />
        <div className="relative z-20 flex flex-col justify-end h-full p-5">
          <h1 className="text-3xl font-bold text-white">MarburgConnect</h1>
          <p className="text-white/90 text-sm mt-1">Connect. Belong. Thrive.</p>
        </div>
      </div>

      <div className="px-4 pt-5">
        {/* Quick Actions */}
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {quickActions.map(({ label, icon: Icon, color, bg, href }) => (
            <Link key={label} href={href}
              className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm active:scale-95 transition-transform">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                <Icon size={22} color={color} />
              </div>
              <span className="text-xs font-medium text-center text-gray-800 leading-tight">{label}</span>
            </Link>
          ))}
        </div>

        {/* Weekly Events */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">Weekly Events</h2>
          <Link href="/calendar" className="text-sm text-[var(--green)] font-semibold">See all</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 mb-6">
          {events.map(event => (
            <Link key={event.id} href={`/calendar`}
              className="min-w-[200px] bg-white rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
              <div className="relative h-28 bg-gray-200">
                <div className="absolute top-2 left-2 bg-white rounded-lg px-2 py-1 text-xs font-bold">
                  {format(new Date(event.starts_at), 'MMM d')}
                </div>
                {event.category && (
                  <div className="absolute top-2 right-2 bg-[var(--green)] text-white rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize">
                    {event.category}
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm leading-tight">{event.title}</p>
                {event.location && (
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">📍 {event.location}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Communities */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">Communities</h2>
          <Link href="/groups" className="text-sm text-[var(--green)] font-semibold">See all</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {groups.slice(0, 3).map(group => (
            <Link key={group.id} href={`/groups/${group.id}`}
              className={`relative rounded-2xl overflow-hidden h-36 bg-gray-300 ${groups.indexOf(group) === 2 ? 'col-span-2' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-3 z-20">
                <p className="text-white font-bold text-sm leading-tight">{group.name}</p>
                <p className="text-white/80 text-xs mt-0.5">👥 {group.member_count.toLocaleString()} members</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}