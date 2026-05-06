import Image from "next/image"
import Link from "next/link"
import { Users } from "lucide-react"

interface CommunityCardProps {
  id: string
  name: string
  memberCount: number
  image: string
}

export function CommunityCard({
  id,
  name,
  memberCount,
  image,
}: CommunityCardProps) {
  return (
    <Link
      href={`/groups/${id}`}
      className="relative overflow-hidden rounded-2xl h-32 group"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="font-semibold text-white text-sm mb-1">{name}</h3>
        <div className="flex items-center gap-1 text-white/80">
          <Users className="h-3 w-3" />
          <span className="text-xs">{memberCount} members</span>
        </div>
      </div>
    </Link>
  )
}
