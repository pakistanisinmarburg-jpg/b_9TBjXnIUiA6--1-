import Image from "next/image"
import Link from "next/link"
import {
  Home as HomeIcon,
  Briefcase,
  ShoppingBag,
  HelpCircle,
  AlertTriangle,
  QrCode,
} from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { QuickActionCard } from "@/components/quick-action-card"
import { EventCard } from "@/components/event-card"
import { CommunityCard } from "@/components/community-card"
import { events, communities } from "@/lib/mock-data"

const quickActions = [
  {
    href: "/housing",
    icon: HomeIcon,
    label: "Housing",
    iconColor: "text-teal-600",
    iconBgColor: "bg-teal-50",
  },
  {
    href: "/jobs",
    icon: Briefcase,
    label: "Jobs & Career",
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-50",
  },
  {
    href: "/market",
    icon: ShoppingBag,
    label: "Market",
    iconColor: "text-purple-600",
    iconBgColor: "bg-purple-50",
  },
  {
    href: "/questions",
    icon: HelpCircle,
    label: "Questions",
    iconColor: "text-amber-600",
    iconBgColor: "bg-amber-50",
  },
  {
    href: "/report",
    icon: AlertTriangle,
    label: "Report Issue",
    iconColor: "text-red-500",
    iconBgColor: "bg-red-50",
    highlight: true,
  },
  {
    href: "/join",
    icon: QrCode,
    label: "Join via QR",
    iconColor: "text-emerald-600",
    iconBgColor: "bg-emerald-50",
  },
]

export default function HomePage() {
  return (
    <AppShell>
      {/* Hero Section */}
      <section className="relative h-80">
        <Image
          src="/images/marburg-hero.jpg"
          alt="Marburg cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-3xl font-bold text-white mb-1">MarburgConnect</h1>
          <p className="text-white/90 text-lg">Connect. Belong. Thrive.</p>
        </div>
      </section>

      <div className="max-w-md mx-auto px-4 py-6 space-y-8">
        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action) => (
              <QuickActionCard key={action.href} {...action} />
            ))}
          </div>
        </section>

        {/* Weekly Events */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">Weekly Events</h2>
            <Link
              href="/events"
              className="text-sm font-medium text-primary hover:underline"
            >
              See all
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>

        {/* Communities */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">Communities</h2>
            <Link
              href="/groups"
              className="text-sm font-medium text-primary hover:underline"
            >
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {communities.map((community) => (
              <CommunityCard key={community.id} {...community} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  )
}
