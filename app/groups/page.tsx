'use client';

import BottomNav from '@/components/BottomNav';
import Link from 'next/link';

const myGroups = [
  { name: "International Marburg", members: "1250", image: "🌍" },
  { name: "Students", members: "890", image: "🎓" },
  { name: "Jobs & Accommodation", members: "620", image: "🏢" },
];

const discoverGroups = [
  { name: "Pakistani Community", members: "180", image: "🇵🇰" },
  { name: "Sports & Fitness", members: "340", image: "⚽" },
];

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white sticky top-0 z-10 border-b p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Groups</h1>
          <button className="bg-green-600 text-white px-5 py-2 rounded-2xl font-medium flex items-center gap-2">
            + Create
          </button>
        </div>

        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search groups..."
            className="w-full bg-gray-100 border border-transparent focus:border-green-500 rounded-2xl py-3 px-5 pl-12"
          />
          <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="p-6">
        {/* My Groups */}
        <h2 className="font-semibold text-lg mb-4">MY GROUPS</h2>
        <div className="space-y-3 mb-10">
          {myGroups.map((group, i) => (
            <div key={i} className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center text-4xl">
                {group.image}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{group.name}</h3>
                <p className="text-gray-500">👥 {group.members} members</p>
              </div>
              <div className="text-green-600">→</div>
            </div>
          ))}
        </div>

        {/* Discover */}
        <h2 className="font-semibold text-lg mb-4">DISCOVER</h2>
        <div className="grid grid-cols-2 gap-4">
          {discoverGroups.map((group, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="h-32 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-6xl">
                {group.image}
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{group.name}</h3>
                <p className="text-sm text-gray-500">👥 {group.members} members</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-6 flex justify-around text-3xl z-50">
        <Link href="/" className="text-gray-400">🏠</Link>
        <Link href="/groups" className="text-green-600">👥</Link>
        <Link href="/calendar" className="text-gray-400">📅</Link>
        <Link href="/messages" className="text-gray-400">💬</Link>
        <Link href="/profile" className="text-gray-400">👤</Link>
        <BottomNav />
        </div>
    </div>
  );
}