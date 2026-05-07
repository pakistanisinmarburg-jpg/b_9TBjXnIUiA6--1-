'use client';

import BottomNav from '@/components/BottomNav';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/utils/supabase/client';

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabaseClient.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const quickActions = [
    { label: "Housing", icon: "🏠", href: "/housing" },
    { label: "Jobs & Career", icon: "💼", href: "/jobs" },
    { label: "Market", icon: "🛍️", href: "/market" },
    { label: "Questions", icon: "❓", href: "/questions" },
    { label: "Report Issue", icon: "⚠️", href: "/report", color: "text-red-500" },
    { label: "Join via QR", icon: "📱", href: "/join" },
  ];

  const events = [
    { title: "Sunday Football Match", date: "May 11", location: "Stadtpark", tag: "Sports" },
    { title: "Sprach Café - Language Exchange", date: "May 12", location: "Café Roter Stern", tag: "Social" },
  ];

  const communities = [
    { name: "International Marburg", members: "1250", image: "🌍" },
    { name: "Students", members: "890", image: "🎓" },
    { name: "Jobs & Accommodation", members: "620", image: "🏢" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580130684518-8d3d4c3c3c3c?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-6 right-6 text-white">
          <h1 className="text-4xl font-bold">MarburgConnect</h1>
          <p className="text-lg mt-1">Connect. Belong. Thrive.</p>
        </div>
      </div>

      <div className="p-6">
        {/* Quick Actions */}
        <h2 className="text-2xl font-semibold mb-5">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <div className={`text-4xl mb-3 ${item.color || ''}`}>{item.icon}</div>
              <span className="text-sm font-medium text-center leading-tight">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Weekly Events */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Weekly Events</h2>
            <Link href="/events" className="text-green-600 font-medium">See all</Link>
          </div>
          
          <div className="space-y-4">
            {events.map((event, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <div className="p-4">
                  <div className="flex gap-3">
                    <div className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full self-start">
                      {event.date}
                    </div>
                    <div className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                      {event.tag}
                    </div>
                  </div>
                  <h3 className="font-semibold mt-3 text-lg">{event.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">📍 {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communities */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Communities</h2>
            <Link href="/groups" className="text-green-600 font-medium">See all</Link>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {communities.map((comm, i) => (
              <div key={i} className="bg-white rounded-3xl p-5 flex gap-4 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                  {comm.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{comm.name}</h3>
                  <p className="text-gray-500 text-sm">👥 {comm.members} members</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6">
        <div className="flex justify-around text-2xl">
          <Link href="/" className="text-green-600">🏠</Link>
          <Link href="/groups" className="text-gray-400 hover:text-gray-600">👥</Link>
          <Link href="/calendar" className="text-gray-400 hover:text-gray-600">📅</Link>
          <Link href="/messages" className="text-gray-400 hover:text-gray-600">💬</Link>
          <Link href="/profile" className="text-gray-400 hover:text-gray-600">👤</Link>
          <BottomNav />
        </div>
      </div>
    </div>
  );
}