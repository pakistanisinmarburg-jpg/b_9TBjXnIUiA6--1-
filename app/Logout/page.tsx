'use client'

import { supabaseClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const logout = async () => {
    await supabaseClient.auth.signOut()
    router.push('/login')
  }

  return (
    <button onClick={logout} className="mt-6 bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  )
}