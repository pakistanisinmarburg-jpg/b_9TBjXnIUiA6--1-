import { createClient } from '@/lib/supabase/server'
import GroupsClient from './GroupsClient'

export default async function GroupsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const [{ data: myGroups }, { data: allGroups }] = await Promise.all([
    supabase.from('group_members').select('group_id, groups(*)').eq('user_id', user!.id),
    supabase.from('groups').select('*').order('member_count', { ascending: false }),
  ])

  const myGroupIds = (myGroups ?? []).map((m: any) => m.group_id)
  const myGroupData = (myGroups ?? []).map((m: any) => m.groups)
  const discover = (allGroups ?? []).filter(g => !myGroupIds.includes(g.id))

  return <GroupsClient myGroups={myGroupData} discover={discover} userId={user!.id} />
}