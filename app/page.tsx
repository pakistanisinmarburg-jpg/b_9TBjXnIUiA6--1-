import { supabaseServer } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = await supabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">
        Welcome to MarburgConnect 🎉
      </h1>
      <p className="mt-4">You are logged in as {user.email}</p>
    </div>
  )
}