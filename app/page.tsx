import { supabaseServer } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function HomePage() {
  const supabase = await supabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        MarburgConnect
      </h1>

      {!user ? (
        <div className="space-y-4">
          <p>You are not logged in</p>

          <Link href="/login">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="border px-6 py-3 rounded-xl">
              Signup
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <p>✅ Logged in as: {user.email}</p>

          <Link href="/home">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
              Go to App
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}