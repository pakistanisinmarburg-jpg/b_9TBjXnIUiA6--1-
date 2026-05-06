import { supabaseServer } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import LogoutButton from '@/components/logout-button'

export default async function AppHome() {
  const supabase = await supabaseServer()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // A list of your features. This makes it easy to add more later!
  const features = [
    { name: 'Housing', path: '/home/housing', icon: '🏠' },
    { name: 'Jobs', path: '/home/jobs', icon: '💼' },
    { name: 'Market', path: '/home/market', icon: '🛒' },
    { name: 'Questions', path: '/home/questions', icon: '❓' },
    { name: 'Events', path: '/home/events', icon: '📅' },
    { name: 'Report', path: '/home/report', icon: '🚨' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        MarburgConnect 🎉
      </h1>
      <p className="mb-6 text-gray-600">Logged in as: {user.email}</p>

      <LogoutButton />

      <div className="grid grid-cols-2 gap-4 mt-8">
        {features.map((feature) => (
          <Link 
            key={feature.name} 
            href={feature.path}
            className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center justify-center gap-2"
          >
            <span className="text-3xl">{feature.icon}</span>
            <span className="font-semibold text-gray-700">{feature.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}