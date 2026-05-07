'use client';

import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  const quickActions = [
    { label: "Housing", icon: "🏠", href: "/housing" },
    { label: "Jobs & Career", icon: "💼", href: "/jobs" },
    { label: "Market", icon: "🛍️", href: "/market" },
    { label: "Questions", icon: "❓", href: "/questions" },
    { label: "Report Issue", icon: "⚠️", href: "/report" },
    { label: "Join via QR", icon: "📱", href: "/join" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero */}
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580130684518-8d3d4c3c3c3c')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-6 text-white">
          <h1 className="text-4xl font-bold">MarburgConnect</h1>
          <p className="text-lg mt-1">Connect. Belong. Thrive.</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-5">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map((item, i) => (
            <Link key={i} href={item.href} className="bg-white rounded-3xl p-6 flex flex-col items-center shadow-sm hover:shadow">
              <div className="text-4xl mb-3">{item.icon}</div>
              <span className="text-sm font-medium text-center">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}