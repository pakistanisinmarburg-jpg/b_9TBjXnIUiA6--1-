'use client';

import BottomNav from '../components/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero */}
      <div className="relative h-80 bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580130684518-8d3d4c3c3c3c')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-8 left-6 text-white">
          <h1 className="text-4xl font-bold">MarburgConnect</h1>
          <p className="text-lg">Connect. Belong. Thrive.</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-3xl p-8">🏠<br/>Housing</div>
          <div className="bg-white rounded-3xl p-8">💼<br/>Jobs</div>
          <div className="bg-white rounded-3xl p-8">🛍️<br/>Market</div>
          <div className="bg-white rounded-3xl p-8">❓<br/>Questions</div>
          <div className="bg-white rounded-3xl p-8">⚠️<br/>Report</div>
          <div className="bg-white rounded-3xl p-8">📱<br/>QR</div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}