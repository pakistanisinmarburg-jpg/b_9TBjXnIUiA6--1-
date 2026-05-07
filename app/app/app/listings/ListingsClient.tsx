'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Plus, MapPin } from 'lucide-react'
import type { Listing } from '@/lib/types'

const TABS = ['housing', 'job', 'market'] as const
const TAB_LABELS = { housing: '🏠 Housing', job: '💼 Jobs', market: '🛍️ Market' }

export default function ListingsClient({ listings, type }: { listings: Listing[]; type: string }) {
  const router = useRouter()

  return (
    <div className="px-4 pt-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold capitalize">{TAB_LABELS[type as keyof typeof TAB_LABELS]}</h1>
        <Link href={`/listings/new?type=${type}`}
          className="flex items-center gap-1 bg-[var(--green)] text-white rounded-xl px-3 py-2 text-xs font-semibold">
          <Plus size={14} /> Post
        </Link>
      </div>

      <div className="flex gap-2 mb-5">
        {TABS.map(t => (
          <button key={t} onClick={() => router.push(`/listings?type=${t}`)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${t === type ? 'bg-[var(--green)] text-white' : 'bg-white text-gray-600'}`}>
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {listings.map(listing => (
          <div key={listing.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <p className="font-semibold text-sm flex-1 pr-2">{listing.title}</p>
              {listing.price && (
                <p className="text-[var(--green)] font-bold text-sm flex-shrink-0">
                  €{listing.price}
                </p>
              )}
            </div>
            {listing.description && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{listing.description}</p>}
            <div className="flex items-center justify-between mt-2">
              {listing.location && (
                <p className="flex items-center gap-1 text-xs text-gray-400"><MapPin size={11} />{listing.location}</p>
              )}
              <p className="text-xs text-gray-400 ml-auto">{(listing as any).profiles?.full_name}</p>
            </div>
          </div>
        ))}
        {listings.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">{type === 'housing' ? '🏠' : type === 'job' ? '💼' : '🛍️'}</p>
            <p className="text-sm">No listings yet. Be the first!</p>
          </div>
        )}
      </div>
    </div>
  )
}