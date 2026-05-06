"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { calendarEvents } from "@/lib/mock-data"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 4)) // May 2024
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const blanks = Array.from({ length: firstDay }, (_, i) => i)

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1))
  }

  const getEventsForDay = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return calendarEvents.filter((e) => e.date === dateStr)
  }

  const selectedEvents = selectedDate
    ? calendarEvents.filter((e) => e.date === selectedDate)
    : []

  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3">
          <h1 className="text-lg font-semibold text-foreground text-center">Calendar</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Month Navigation */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-lg font-semibold text-foreground">
            {MONTHS[month]} {year}
          </h2>
          <Button variant="ghost" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="bg-card rounded-xl border border-border p-4">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-muted-foreground py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-1">
            {blanks.map((_, i) => (
              <div key={`blank-${i}`} className="aspect-square" />
            ))}
            {days.map((day) => {
              const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
              const dayEvents = getEventsForDay(day)
              const isSelected = selectedDate === dateStr
              const hasEvents = dayEvents.length > 0

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(dateStr)}
                  className={cn(
                    "aspect-square flex flex-col items-center justify-center rounded-lg text-sm transition-colors relative",
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent",
                    hasEvents && !isSelected && "font-medium"
                  )}
                >
                  {day}
                  {hasEvents && (
                    <div className="absolute bottom-1 flex gap-0.5">
                      {dayEvents.slice(0, 3).map((event, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-1 h-1 rounded-full",
                            isSelected ? "bg-primary-foreground" : event.color
                          )}
                        />
                      ))}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Events for Selected Day */}
        {selectedDate && (
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">
              Events on {new Date(selectedDate).toLocaleDateString("en-US", { month: "long", day: "numeric" })}
            </h3>
            {selectedEvents.length > 0 ? (
              <div className="space-y-2">
                {selectedEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="block bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-1 h-full min-h-[40px] rounded-full",
                          event.color
                        )}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{event.title}</h4>
                        <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
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
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground py-4 text-center">
                No events scheduled for this day
              </p>
            )}
          </div>
        )}

        {/* Upcoming Events */}
        {!selectedDate && (
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Upcoming Events</h3>
            <div className="space-y-2">
              {calendarEvents.slice(0, 3).map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="block bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-1 h-full min-h-[40px] rounded-full",
                        event.color
                      )}
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}
