"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Plus, MessageSquare, Search, Tag } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { questions } from "@/lib/mock-data"

export default function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredQuestions = questions.filter(
    (q) =>
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 hover:bg-accent rounded-full">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">Q&A</h1>
          <Button size="sm" className="h-8">
            <Plus className="h-4 w-4 mr-1" />
            Ask
          </Button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Popular Tags */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "bureaucracy", "housing", "students", "transport", "banking"].map(
            (tag) => (
              <Button
                key={tag}
                variant={tag === "All" ? "default" : "outline"}
                size="sm"
                className="flex-shrink-0"
              >
                {tag === "All" ? tag : `#${tag}`}
              </Button>
            )
          )}
        </div>

        {/* Questions List */}
        <div className="space-y-3">
          {filteredQuestions.map((question) => (
            <Link
              key={question.id}
              href={`/questions/${question.id}`}
              className="block bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                {question.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary rounded-full text-xs text-secondary-foreground"
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Asked by {question.author}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" />
                    {question.replies} replies
                  </span>
                  <span>{question.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">No questions found</h3>
            <p className="text-sm text-muted-foreground">
              Try a different search or ask a new question
            </p>
          </div>
        )}
      </div>
    </AppShell>
  )
}
