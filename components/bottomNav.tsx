'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const items = [
    { href: '/', icon: '🏠' },
    { href: '/groups', icon: '👥' },
    { href: '/calendar', icon: '📅' },
    { href: '/messages', icon: '💬' },
    { href: '/profile', icon: '👤' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 z-50">
      <div className="flex justify-around">
        {items.map(item => (
          <Link key={item.href} href={item.href} className={`text-3xl ${pathname === item.href ? 'text-green-600' : 'text-gray-400'}`}>
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}