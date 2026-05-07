'use client';

import BottomNav from '@/components/BottomNav';

const upcomingEvents = [
  {
    title: "Sunday Football Match",
    date: "May 11",
    time: "14:00",
    location: "Stadtpark",
    type: "Sports"
  },
  {
    title: "Sprach Café - Language Exchange",
    date: "May 12",
    time: "18:00",
    location: "Café Roter Stern",
    type: "Social"
  },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white p-6 border-b">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-gray-500 mt-1">May 2026</p>
      </div>

      {/* Simple Calendar View */}
      <div className="p-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="grid grid-cols-7 gap-1 text-center text-sm mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="font-medium text-gray-400">{day}</div>
            ))}
            {/* Placeholder days */}
            {Array.from({ length: 35 }).map((_, i) => (
              <div 
                key={i} 
                className={`h-10 flex items-center justify-center rounded-xl text-sm
                  ${i === 14 ? 'bg-green-100 text-green-700 font-bold' : 'hover:bg-gray-100'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-6">
        <h2 className="font-semibold text-xl mb-4">Upcoming Events</h2>
        
        <div className="space-y-4">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  📅
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-green-600 font-medium mt-1">
                    {event.date} • {event.time}
                  </p>
                  <p className="text-gray-500 mt-1">📍 {event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}