"use client"

import Link from "next/link"
import {
  User,
  Mail,
  Calendar,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Shield,
  Bell,
  HelpCircle,
} from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { userProfile } from "@/lib/mock-data"

const menuItems = [
  {
    icon: Bell,
    label: "Notifications",
    href: "/profile/notifications",
  },
  {
    icon: Shield,
    label: "Privacy & Security",
    href: "/profile/privacy",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/profile/settings",
  },
  {
    icon: HelpCircle,
    label: "Help & Support",
    href: "/profile/help",
  },
]

export default function ProfilePage() {
  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">Profile</h1>
          <Link href="/profile/edit">
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-card rounded-xl border border-border p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <User className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">{userProfile.name}</h2>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
            <Mail className="h-4 w-4" />
            <span>{userProfile.email}</span>
          </div>
          {userProfile.isAdmin && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              Admin
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
              <Users className="h-4 w-4" />
              <span className="text-sm">Communities</span>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {userProfile.communities.length}
            </p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Member Since</span>
            </div>
            <p className="text-lg font-bold text-foreground">
              {userProfile.memberSince}
            </p>
          </div>
        </div>

        {/* My Communities */}
        <section>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            My Communities
          </h3>
          <div className="bg-card rounded-xl border border-border divide-y divide-border">
            {userProfile.communities.map((community, index) => (
              <div key={index} className="flex items-center gap-3 p-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{community}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Menu */}
        <section>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Settings
          </h3>
          <div className="bg-card rounded-xl border border-border divide-y divide-border">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between p-3 hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full text-destructive border-destructive/30 hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </Button>
      </div>
    </AppShell>
  )
}
