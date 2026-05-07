'use client';

import BottomNav from '@/components/BottomNav';

const upcomingEvents = [
  { title: "Sunday Football Match", date: "May 11", time: "14:00", location: "Stadtpark" },
  { title: "Sprach Café - Language Exchange", date: "May 12", time: "18:00", location: "Café Roter Stern" },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white p-6 border-b">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-gray-500 mt-1">May 2026</p>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm">
          <h3 className="font-semibold mb-4">Upcoming Events</h3>
          {upcomingEvents.map((event, i) => (
            <div key={i} className="border-b last:border-0 py-4">
              <h4 className="font-medium">{event.title}</h4>
              <p className="text-green-600 text-sm">{event.date} • {event.time}</p>
              <p className="text-gray-500 text-sm">📍 {event.location}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}