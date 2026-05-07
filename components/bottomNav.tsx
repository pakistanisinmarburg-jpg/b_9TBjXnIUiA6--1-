'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-50">
      <div className="flex justify-around items-center text-3xl">
        <Link href="/" className={pathname === '/' ? 'text-green-600' : 'text-gray-400'}>🏠</Link>
        <Link href="/groups" className={pathname === '/groups' ? 'text-green-600' : 'text-gray-400'}>👥</Link>
        <Link href="/calendar" className={pathname === '/calendar' ? 'text-green-600' : 'text-gray-400'}>📅</Link>
        <Link href="/messages" className={pathname === '/messages' ? 'text-green-600' : 'text-gray-400'}>💬</Link>
        <Link href="/profile" className={pathname === '/profile' ? 'text-green-600' : 'text-gray-400'}>👤</Link>
      </div>
    </div>
  );
}