'use client';

import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 flex justify-around text-3xl z-50">
      <Link href="/">🏠</Link>
      <Link href="#" className="text-gray-400">👥</Link>
      <Link href="#" className="text-gray-400">📅</Link>
      <Link href="#" className="text-gray-400">💬</Link>
      <Link href="#" className="text-gray-400">👤</Link>
    </div>
  );
}