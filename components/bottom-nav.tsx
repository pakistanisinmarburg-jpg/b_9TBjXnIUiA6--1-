'use client'



import Link from 'next/link'



export default function BottomNav() {

  return (

    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-4">

      <Link href="/">Home</Link>

      <Link href="/groups">Groups</Link>

      <Link href="/calendar">Calendar</Link>

      <Link href="/messages">Messages</Link>

      <Link href="/profile">Profile</Link>

    </div>

  )

}