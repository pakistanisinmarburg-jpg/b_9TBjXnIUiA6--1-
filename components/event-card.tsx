export default function EventCard({ event }: any) {

  return (

    <div className="rounded-2xl overflow-hidden shadow bg-white">

      <img

        src={event.image_url}

        className="h-48 w-full object-cover"

      />



      <div className="p-4">

        <h2 className="font-bold text-lg">{event.title}</h2>



        <p className="text-gray-500">{event.location}</p>



        <p className="text-sm mt-2">

          {new Date(event.event_date).toLocaleDateString()}

        </p>

      </div>

    </div>

  )

}


