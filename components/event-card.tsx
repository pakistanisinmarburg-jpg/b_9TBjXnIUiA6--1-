import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface EventCardProps {
  id: string
  title: string
  date: string
  location: string
  image: string
  tag?: string
  tagColor?: string
}

export function EventCard({
  id,
  title,
  date,
  location,
  image,
  tag,
  tagColor = "bg-primary",
}: EventCardProps) {
  return (
    <Link
      href={`/events/${id}`}
      className="flex-shrink-0 w-44 rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-24">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-xs font-semibold text-foreground">{date}</span>
        </div>
        {tag && (
          <div
            className={cn(
              "absolute top-2 right-2 rounded-full px-2 py-0.5 text-[10px] font-medium text-white",
              tagColor
            )}
          >
            {tag}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm text-card-foreground line-clamp-2 mb-1">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="text-xs truncate">{location}</span>
        </div>
      </div>
    </Link>
  )
}
