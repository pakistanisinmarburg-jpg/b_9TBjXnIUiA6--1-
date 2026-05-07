import { createClient } from '@/lib/supabase/server'
import CalendarClient from './CalendarClient'

export default async function CalendarPage() {
  const supabase = await createClient()
  const { data: events } = await supabase.from('events').select('*')
    .gte('starts_at', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString())
    .order('starts_at')
  return <CalendarClient events={events ?? []} />
}