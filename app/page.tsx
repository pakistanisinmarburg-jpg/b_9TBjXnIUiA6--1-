'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero */}
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
          {['Housing', 'Jobs', 'Market', 'Questions', 'Report', 'QR'].map((label) => (
            <div key={label} className="bg-white rounded-3xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-2">🏠</div>
              <p className="text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}