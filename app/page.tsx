'use client';

import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center flex items-end"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1580130684518-8d3d4c3c3c3c')" 
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative p-6 text-white">
          <h1 className="text-4xl font-bold">MarburgConnect</h1>
          <p className="text-lg mt-1">Connect. Belong. Thrive.</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: "🏠", label: "Housing", href: "/housing" },
            { icon: "💼", label: "Jobs", href: "/jobs" },
            { icon: "🛍️", label: "Market", href: "/market" },
            { icon: "❓", label: "Questions", href: "/questions" },
            { icon: "⚠️", label: "Report", href: "/report" },
            { icon: "📱", label: "Join QR", href: "/join" },
          ].map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className="bg-white rounded-3xl p-6 flex flex-col items-center shadow-sm hover:shadow transition-all active:scale-95"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <span className="text-sm font-medium text-center">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}