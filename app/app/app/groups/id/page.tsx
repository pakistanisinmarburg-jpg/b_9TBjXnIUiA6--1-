import { createClient } from '@/lib/supabase/server'
import GroupDetailClient from './GroupDetailClient'
import { notFound } from 'next/navigation'

export default async function GroupDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const [{ data: group }, { data: messages }, { data: membership }] = await Promise.all([
    supabase.from('groups').select('*').eq('id', params.id).single(),
    supabase.from('messages').select('*, profiles(full_name, avatar_url)')
      .eq('group_id', params.id).order('created_at').limit(50),
    supabase.from('group_members').select('*').eq('group_id', params.id).eq('user_id', user!.id).maybeSingle(),
  ])

  if (!group) return notFound()
  return <GroupDetailClient group={group} initialMessages={messages ?? []} isMember={!!membership} userId={user!.id} />
}