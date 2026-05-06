"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Clock } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { events, calendarEvents } from "@/lib/mock-data"

const allEvents = [
  ...events.map((e) => ({
    ...e,
    time: "14:00",
    fullDate: `May ${e.date.split(" ")[1]}, 2024`,
  })),
  ...calendarEvents.map((e) => ({
    id: e.id,
    title: e.title,
    date: new Date(e.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    fullDate: new Date(e.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    location: e.location,
    image: "/images/event-1.jpg",
    tag: "Event",
    tagColor: e.color,
    time: e.time,
  })),
]

export default function EventsPage() {
  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 hover:bg-accent rounded-full">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">All Events</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {allEvents.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            className="block bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-36">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1">
                <span className="text-xs font-semibold text-foreground">{event.date}</span>
              </div>
              {event.tag && (
                <div
                  className={`absolute top-2 right-2 rounded-full px-2 py-0.5 text-[10px] font-medium text-white ${event.tagColor}`}
                >
                  {event.tag}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {event.fullDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {event.location}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  )
}
