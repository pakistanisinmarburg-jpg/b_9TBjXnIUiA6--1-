import { supabaseServer } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import LogoutButton from '@/components/logout-button'
import QuickActionCard from '@/components/quick-action-card'
import BottomNav from '@/components/bottom-nav'

const quickActions = [
  {
    href: '/housing',
    title: 'Housing',
    icon: '🏠',
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-600',
  },
  {
    href: '/jobs',
    title: 'Jobs & Career',
    icon: '💼',
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-600',
  },
  {
    href: '/market',
    title: 'Market',
    icon: '🛍️',
    iconBg: 'bg-purple-50',
    iconText: 'text-purple-600',
  },
  {
    href: '/questions',
    title: 'Questions',
    icon: '❓',
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-600',
  },
  {
    href: '/report',
    title: 'Report Issue',
    icon: '⚠️',
    iconBg: 'bg-red-50',
    iconText: 'text-red-600',
  },
  {
    href: '/join',
    title: 'Join via QR',
    icon: '📱',
    iconBg: 'bg-cyan-50',
    iconText: 'text-cyan-600',
  },
]

export default async function HomePage() {
  const supabase = await supabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <section className="relative h-[320px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="relative flex h-full flex-col justify-end px-6 pb-8 text-white">
          <h1 className="text-4xl font-black tracking-tight">MarburgConnect</h1>
          <p className="mt-2 text-2xl font-semibold text-white/90">
            Connect. Belong. Thrive.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-md px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((item) => (
            <QuickActionCard
              key={item.href}
              href={item.href}
              title={item.title}
              icon={item.icon}
              iconBg={item.iconBg}
              iconText={item.iconText}
            />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Weekly Events</h2>
          <Link href="/events" className="font-semibold text-green-600">
            See all
          </Link>
        </div>

        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="font-semibold text-gray-900">No events yet</p>
          <p className="mt-1 text-sm text-gray-500">
            Your upcoming events will appear here.
          </p>
        </div>

        <div className="mt-6">
          <LogoutButton />
        </div>
      </main>

      <BottomNav />
    </div>
  )
}