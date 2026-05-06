"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, Users } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { messages } from "@/lib/mock-data"

export default function MessagesPage() {
  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3">
          <h1 className="text-lg font-semibold text-foreground text-center">Messages</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-10" />
        </div>

        {/* Message List */}
        <div className="space-y-1">
          {messages.map((message) => (
            <Link
              key={message.id}
              href={`/messages/${message.id}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  {message.avatar ? (
                    <Image
                      src={message.avatar}
                      alt={message.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
                {message.isGroup && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-secondary border-2 border-card flex items-center justify-center">
                    <Users className="h-3 w-3 text-secondary-foreground" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3
                    className={cn(
                      "font-medium text-foreground truncate",
                      message.unread > 0 && "font-semibold"
                    )}
                  >
                    {message.name}
                  </h3>
                  <span
                    className={cn(
                      "text-xs",
                      message.unread > 0 ? "text-primary font-medium" : "text-muted-foreground"
                    )}
                  >
                    {message.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p
                    className={cn(
                      "text-sm truncate",
                      message.unread > 0
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {message.lastMessage}
                  </p>
                  {message.unread > 0 && (
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                      {message.unread}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {messages.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">No messages yet</h3>
            <p className="text-sm text-muted-foreground">
              Start a conversation with someone from the community
            </p>
          </div>
        )}
      </div>
    </AppShell>
  )
}
