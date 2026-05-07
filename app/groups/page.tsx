import { supabase } from '@/lib/supabase'

import CommunityCard from '@/components/CommunityCard'



export default async function GroupsPage() {

  const { data } = await supabase

    .from('communities')

    .select('*')



  return (

    <div className="p-4 grid grid-cols-2 gap-4">

      {data?.map((community) => (

        <CommunityCard

          key={community.id}

          community={community}

        />

      ))}

    </div>

  )

}