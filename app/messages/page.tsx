'use client';

import Link from 'next/link';
import BottomNav from '../components/BottomNav';

const conversations = [
  {
    id: 1,
    name: "International Marburg",
    avatar: "🌍",
    lastMessage: "Welcome to the community!",
    time: "2m ago",
    unread: 3,
    isGroup: true
  },
  {
    id: 2,
    name: "Anna M.",
    avatar: "👩🏻",
    lastMessage: "Is the room still available?",
    time: "1h ago",
    unread: 1,
    isGroup: false
  },
  {
    id: 3,
    name: "Students Group",
    avatar: "🎓",
    lastMessage: "Study session tomorrow at 3pm",
    time: "3h ago",
    unread: 0,
    isGroup: true
  },
];

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 border-b p-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-gray-100 border border-transparent focus:border-green-500 rounded-2xl py-3 px-5 pl-12"
          />
          <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Conversations List */}
      <div className="p-6 space-y-3">
        {conversations.map((chat) => (
          <Link 
            key={chat.id} 
            href={`/messages/${chat.id}`} 
            className="bg-white rounded-3xl p-5 flex gap-4 items-center hover:bg-gray-50 active:bg-gray-100 transition-all"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              {chat.avatar}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500 whitespace-nowrap">{chat.time}</span>
              </div>
              <p className="text-gray-600 text-sm truncate mt-0.5">{chat.lastMessage}</p>
            </div>

            {chat.unread > 0 && (
              <div className="bg-green-600 text-white text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                {chat.unread}
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-6 flex justify-around text-3xl z-50">
        <Link href="/" className="text-gray-400">🏠</Link>
        <Link href="/groups" className="text-gray-400">👥</Link>
        <Link href="/calendar" className="text-gray-400">📅</Link>
        <Link href="/messages" className="text-green-600">💬</Link>
        <Link href="/profile" className="text-gray-400">👤</Link>
      
      <BottomNav />
      </div>
    </div>
  );
}