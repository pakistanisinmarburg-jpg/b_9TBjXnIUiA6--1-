import { createClient } from '@/lib/supabase/server'
import ListingsClient from './ListingsClient'

export default async function ListingsPage({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams.type || 'housing'
  const supabase = await createClient()
  const { data: listings } = await supabase.from('listings').select('*, profiles(full_name)')
    .eq('type', type).eq('is_active', true).order('created_at', { ascending: false })
  return <ListingsClient listings={listings ?? []} type={type} />
}