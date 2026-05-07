import { supabase } from '@/lib/supabase'

import EventCard from '@/components/EventCard'

import CommunityCard from '@/components/CommunityCard'

import BottomNav from '@/components/BottomNav'



export default async function HomePage() {

  const { data: events } = await supabase

    .from('events')

    .select('*')

    .limit(5)



  const { data: communities } = await supabase

    .from('communities')

    .select('*')

    .limit(6)



  return (

    <div className="p-4 pb-28 space-y-6">

      <div

        className="h-64 rounded-3xl bg-cover bg-center p-6 text-white flex items-end"

        style={{

          backgroundImage:

            "url('/hero.jpg')",

        }}

      >

        <div>

          <h1 className="text-3xl font-bold">

            Pakistanis in Marburg

          </h1>



          <p>Connect. Belong. Thrive.</p>

        </div>

      </div>



      <div>

        <h2 className="text-2xl font-bold mb-4">

          Upcoming Events

        </h2>



        <div className="grid gap-4">

          {events?.map((event) => (

            <EventCard key={event.id} event={event} />

          ))}

        </div>

      </div>



      <div>

        <h2 className="text-2xl font-bold mb-4">

          Active Communities

        </h2>



        <div className="grid grid-cols-2 gap-4">

          {communities?.map((community) => (

            <CommunityCard

              key={community.id}

              community={community}

            />

          ))}

        </div>

      </div>



      <BottomNav />

    </div>

  )

}