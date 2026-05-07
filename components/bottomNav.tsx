'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', icon: '🏠', label: 'Home' },
  { href: '/groups', icon: '👥', label: 'Groups' },
  { href: '/calendar', icon: '📅', label: 'Calendar' },
  { href: '/messages', icon: '💬', label: 'Messages' },
  { href: '/profile', icon: '👤', label: 'Profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-2xl transition-all ${
              pathname === item.href 
                ? 'text-green-600 scale-110' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <span>{item.icon}</span>
            <span className="text-[10px] mt-1 font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}