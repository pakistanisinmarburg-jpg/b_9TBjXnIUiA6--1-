'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay,
         addMonths, subMonths, startOfWeek, endOfWeek } from 'date-fns'
import type { Event } from '@/lib/types'

const CATEGORY_COLORS: Record<string, string> = {
  sports: '#16a34a', social: '#2563eb', language: '#7c3aed', culture: '#d97706', default: '#6b7280'
}

export default function CalendarClient({ events }: { events: Event[] }) {
  const [month, setMonth] = useState(new Date())
  const [selected, setSelected] = useState<Date | null>(null)

  const start = startOfWeek(startOfMonth(month))
  const end = endOfWeek(endOfMonth(month))
  const days = eachDayOfInterval({ start, end })

  const eventsOnDay = (day: Date) => events.filter(e => isSameDay(new Date(e.starts_at), day))
  const upcoming = selected
    ? events.filter(e => isSameDay(new Date(e.starts_at), selected))
    : events.filter(e => new Date(e.starts_at) >= new Date())

  return (
    <div className="px-4 pt-5">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>

      <div className="bg-white rounded-2xl p-4 shadow-sm mb-5">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setMonth(subMonths(month, 1))}><ChevronLeft size={20} /></button>
          <p className="font-bold">{format(month, 'MMMM yyyy')}</p>
          <button onClick={() => setMonth(addMonths(month, 1))}><ChevronRight size={20} /></button>
        </div>

        <div className="grid grid-cols-7 mb-2">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
            <p key={d} className="text-center text-[11px] text-gray-400 font-medium">{d}</p>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {days.map(day => {
            const dayEvents = eventsOnDay(day)
            const isCurrentMonth = day.getMonth() === month.getMonth()
            const isSelected = selected && isSameDay(day, selected)
            const isToday = isSameDay(day, new Date())
            return (
              <button key={day.toISOString()} onClick={() => setSelected(isSameDay(day, selected!) ? null : day)}
                className={`flex flex-col items-center py-1 rounded-xl transition-colors
                  ${isSelected ? 'bg-[var(--green)] text-white' : isToday ? 'text-[var(--green)] font-bold' : ''}
                  ${!isCurrentMonth ? 'opacity-30' : ''}`}>
                <span className="text-sm">{format(day, 'd')}</span>
                <div className="flex gap-0.5 mt-0.5 h-1.5">
                  {dayEvents.slice(0, 3).map(e => (
                    <div key={e.id} className="w-1.5 h-1.5 rounded-full"
                      style={{ background: isSelected ? 'white' : CATEGORY_COLORS[e.category] || CATEGORY_COLORS.default }} />
                  ))}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <h2 className="font-bold text-lg mb-3">{selected ? format(selected, 'MMMM d') : 'Upcoming'} Events</h2>
      <div className="space-y-3">
        {upcoming.length === 0 && <p className="text-gray-400 text-sm text-center py-8">No events</p>}
        {upcoming.map(event => (
          <div key={event.id} className="bg-white rounded-2xl p-4 shadow-sm flex gap-3">
            <div className="w-1 rounded-full self-stretch" style={{ background: CATEGORY_COLORS[event.category] || CATEGORY_COLORS.default }} />
            <div className="flex-1">
              <p className="font-semibold text-sm">{event.title}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={11} /> {format(new Date(event.starts_at), 'MMM d · HH:mm')}
                </span>
                {event.location && (
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={11} /> {event.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}