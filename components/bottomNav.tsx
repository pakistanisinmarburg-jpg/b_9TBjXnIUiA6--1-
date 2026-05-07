'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Calendar, MessageCircle, User } from 'lucide-react'

const tabs = [
  { href: '/home', icon: Home, label: 'Home' },
  { href: '/groups', icon: Users, label: 'Groups' },
  { href: '/calendar', icon: Calendar, label: 'Calendar' },
  { href: '/messages', icon: MessageCircle, label: 'Messages' },
  { href: '/profile', icon: User, label: 'Profile' },
]

export default function BottomNav() {
  const path = usePathname()
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 z-50">
      <div className="flex justify-around py-2">
        {tabs.map(({ href, icon: Icon, label }) => {
          const active = path.startsWith(href)
          return (
            <Link key={href} href={href} className="flex flex-col items-center gap-1 px-3 py-1">
              <Icon size={22} color={active ? 'var(--green)' : '#9ca3af'} strokeWidth={active ? 2.5 : 1.8} />
              <span className="text-[10px]" style={{ color: active ? 'var(--green)' : '#9ca3af' }}>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}