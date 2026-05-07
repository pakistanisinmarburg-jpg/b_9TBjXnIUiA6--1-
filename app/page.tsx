'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580130684518-8d3d4c3c3c3c')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-6 text-white">
          <h1 className="text-4xl font-bold">MarburgConnect</h1>
          <p className="text-lg mt-1">Connect. Belong. Thrive.</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-3 gap-4">
          {['Housing', 'Jobs & Career', 'Market', 'Questions', 'Report Issue', 'Join via QR'].map((label, i) => (
            <Link key={i} href={`/${label.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-sm hover:shadow">
              <div className="text-3xl mb-3">🏠</div>
              <span className="text-sm font-medium text-center">{label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Weekly Events</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        {['🏠', '👥', '📅', '💬', '👤'].map((icon, i) => (
          <div key={i} className="text-2xl cursor-pointer">{icon}</div>
        ))}
      </div>
    </div>
  );
}