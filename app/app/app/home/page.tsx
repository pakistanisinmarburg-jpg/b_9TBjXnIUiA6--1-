import { createClient } from '@/lib/supabase/server'
import HomeClient from './HomeClient'

export default async function HomePage() {
  const supabase = await createClient()

  const [{ data: events }, { data: groups }] = await Promise.all([
    supabase.from('events').select('*').gte('starts_at', new Date().toISOString())
      .order('starts_at').limit(5),
    supabase.from('groups').select('*').order('member_count', { ascending: false }).limit(6),
  ])

  return <HomeClient events={events ?? []} groups={groups ?? []} />
}