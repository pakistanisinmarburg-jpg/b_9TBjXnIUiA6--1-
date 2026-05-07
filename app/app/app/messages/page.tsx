import { createClient } from '@/lib/supabase/server'
import MessagesClient from './MessagesClient'

export default async function MessagesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Get latest message per group the user belongs to
  const { data: memberships } = await supabase
    .from('group_members').select('group_id, groups(id, name, image_url)')
    .eq('user_id', user!.id)

  const groups = (memberships ?? []).map((m: any) => m.groups)
  const groupIds = groups.map((g: any) => g.id)

  const { data: latestMessages } = groupIds.length > 0
    ? await supabase.from('messages').select('*').in('group_id', groupIds)
        .order('created_at', { ascending: false })
    : { data: [] }

  // Build conversations with latest message per group
  const conversations = groups.map((g: any) => {
    const lastMsg = (latestMessages ?? []).find((m: any) => m.group_id === g.id)
    return { group: g, lastMsg, unread: (latestMessages ?? []).filter((m: any) =>
      m.group_id === g.id && !m.read_by.includes(user!.id)).length }
  }).sort((a, b) => {
    if (!a.lastMsg) return 1
    if (!b.lastMsg) return -1
    return new Date(b.lastMsg.created_at).getTime() - new Date(a.lastMsg.created_at).getTime()
  })

  return <MessagesClient conversations={conversations} userId={user!.id} />
}