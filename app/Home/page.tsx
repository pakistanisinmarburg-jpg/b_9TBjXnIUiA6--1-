import { supabaseServer } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function AppHome() {
  const supabase = await supabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Welcome to MarburgConnect 🎉
      </h1>

      <p className="mb-6">Logged in as: {user.email}</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-xl shadow">🏠 Housing</div>
        <div className="p-4 bg-white rounded-xl shadow">💼 Jobs</div>
        <div className="p-4 bg-white rounded-xl shadow">🛒 Market</div>
        <div className="p-4 bg-white rounded-xl shadow">❓ Questions</div>
        <div className="p-4 bg-white rounded-xl shadow">📅 Events</div>
        <div className="p-4 bg-red-100 rounded-xl shadow">🚨 Report</div>
      </div>
    </div>
  )
}