'use client'

import { supabaseClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabaseClient.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="mt-6 bg-black text-white px-4 py-2 rounded-xl"
    >
      Logout
    </button>
  )
}