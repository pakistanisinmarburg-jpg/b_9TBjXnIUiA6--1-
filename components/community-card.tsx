export default function CommunityCard({ community }: any) {

  return (

    <div className="relative rounded-2xl overflow-hidden">

      <img

        src={community.image_url}

        className="h-48 w-full object-cover"

      />



      <div className="absolute bottom-0 p-4 text-white bg-black/40 w-full">

        <h2 className="font-bold text-xl">{community.name}</h2>



        <p>{community.category}</p>

      </div>

    </div>

  )

}


