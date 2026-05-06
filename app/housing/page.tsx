"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Plus, MapPin, Euro, Search } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { housingPosts } from "@/lib/mock-data"

export default function HousingPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = housingPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 hover:bg-accent rounded-full">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">Housing</h1>
          <Button size="sm" className="h-8">
            <Plus className="h-4 w-4 mr-1" />
            Post
          </Button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search housing..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Room", "Apartment", "WG"].map((filter) => (
            <Button
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              size="sm"
              className="flex-shrink-0"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Listings */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/housing/${post.id}`}
              className="block bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-xs font-medium text-foreground">
                    {post.type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{post.location}</span>
                  </div>
                  <div className="flex items-center gap-0.5 font-semibold text-primary">
                    <Euro className="h-3.5 w-3.5" />
                    <span>{post.price}/month</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Posted by {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
