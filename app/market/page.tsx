"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Plus, MapPin, Euro, Search } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { marketItems } from "@/lib/mock-data"

export default function MarketPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = marketItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 hover:bg-accent rounded-full">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">Market</h1>
          <Button size="sm" className="h-8">
            <Plus className="h-4 w-4 mr-1" />
            Sell
          </Button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Furniture", "Electronics", "Clothing", "Books", "Other"].map(
            (category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="flex-shrink-0"
              >
                {category}
              </Button>
            )
          )}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/market/${item.id}`}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm text-foreground line-clamp-2 mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-0.5 font-bold text-primary mb-1">
                  <Euro className="h-3.5 w-3.5" />
                  <span>{item.price}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
