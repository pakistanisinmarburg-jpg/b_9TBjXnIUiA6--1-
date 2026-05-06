"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Plus, MapPin, Clock, Banknote, Search, Building2 } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { jobPosts } from "@/lib/mock-data"

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = jobPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.company.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 hover:bg-accent rounded-full">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">Jobs & Career</h1>
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
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Part-time", "Mini-job", "Freelance", "Full-time"].map((filter) => (
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

        {/* Job Listings */}
        <div className="space-y-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/jobs/${post.id}`}
              className="block bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{post.company}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                      <Clock className="h-3 w-3" />
                      {post.type}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full text-primary">
                      <Banknote className="h-3 w-3" />
                      {post.salary}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent rounded-full text-accent-foreground">
                      <MapPin className="h-3 w-3" />
                      {post.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Posted {post.date}</span>
                <Button variant="ghost" size="sm" className="h-7 text-primary">
                  Apply Now
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
