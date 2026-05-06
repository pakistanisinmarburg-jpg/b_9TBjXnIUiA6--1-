import Link from 'next/link'

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-2">
        <Link href="/home" className="flex flex-col items-center justify-center gap-1 py-1 text-gray-500 hover:text-green-600">
          <span className="text-2xl leading-none">🏠</span>
          <span className="text-xs font-medium">Home</span>
        </Link>
        <Link href="/groups" className="flex flex-col items-center justify-center gap-1 py-1 text-gray-500 hover:text-green-600">
          <span className="text-2xl leading-none">👥</span>
          <span className="text-xs font-medium">Groups</span>
        </Link>
        <Link href="/calendar" className="flex flex-col items-center justify-center gap-1 py-1 text-gray-500 hover:text-green-600">
          <span className="text-2xl leading-none">🗓️</span>
          <span className="text-xs font-medium">Calendar</span>
        </Link>
        <Link href="/messages" className="flex flex-col items-center justify-center gap-1 py-1 text-gray-500 hover:text-green-600">
          <span className="text-2xl leading-none">💬</span>
          <span className="text-xs font-medium">Messages</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center gap-1 py-1 text-gray-500 hover:text-green-600">
          <span className="text-2xl leading-none">👤</span>
          <span className="text-xs font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  )
}