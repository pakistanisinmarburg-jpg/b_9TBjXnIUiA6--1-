"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Users, Plus } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { communities } from "@/lib/mock-data"

const allCommunities = [
  ...communities,
  {
    id: "pakistani",
    name: "Pakistani Community",
    memberCount: 180,
    image: "/images/community-international.jpg",
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    memberCount: 340,
    image: "/images/event-1.jpg",
  },
  {
    id: "food",
    name: "Food & Cooking",
    memberCount: 290,
    image: "/images/event-3.jpg",
  },
]

export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCommunities = allCommunities.filter((community) =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">Groups</h1>
          <Button size="sm" className="h-8">
            <Plus className="h-4 w-4 mr-1" />
            Create
          </Button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* My Groups */}
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            My Groups
          </h2>
          <div className="space-y-2">
            {filteredCommunities.slice(0, 3).map((community) => (
              <Link
                key={community.id}
                href={`/groups/${community.id}`}
                className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground truncate">{community.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    <span>{community.memberCount} members</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Discover */}
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Discover
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {filteredCommunities.slice(3).map((community) => (
              <Link
                key={community.id}
                href={`/groups/${community.id}`}
                className="relative overflow-hidden rounded-xl h-32 group"
              >
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-semibold text-white text-sm mb-0.5">{community.name}</h3>
                  <div className="flex items-center gap-1 text-white/80 text-xs">
                    <Users className="h-3 w-3" />
                    <span>{community.memberCount} members</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  )
}
