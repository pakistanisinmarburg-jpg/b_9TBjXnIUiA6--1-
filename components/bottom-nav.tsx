import Link from 'next/link'

const navItems = [
  { href: '/home', label: 'Home', icon: '🏠' },
  { href: '/groups', label: 'Groups', icon: '👥' },
  { href: '/calendar', label: 'Calendar', icon: '🗓️' },
  { href: '/messages', label: 'Messages', icon: '💬' },
  { href: '/profile', label: 'Profile', icon: '👤' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center gap-1 py-1 text-gray-500 hover:text-green-600"
          >
            <span className="text-2xl leading-none">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}