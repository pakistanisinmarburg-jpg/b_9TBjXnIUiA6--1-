import { createClient } from '@/lib/supabase/server'
import ProfileClient from './ProfileClient'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [{ data: profile }, { data: memberships }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('group_members').select('group_id, groups(*)').eq('user_id', user.id),
  ])

  const groups = (memberships ?? []).map((m: any) => m.groups)
  return <ProfileClient profile={profile} groups={groups} email={user.email!} />
}