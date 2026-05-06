import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuickActionCardProps {
  href: string
  icon: LucideIcon
  label: string
  iconColor?: string
  iconBgColor?: string
  highlight?: boolean
}

export function QuickActionCard({
  href,
  icon: Icon,
  label,
  iconColor = "text-primary",
  iconBgColor = "bg-primary/10",
  highlight = false,
}: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center gap-3 p-4 rounded-2xl border bg-card transition-all hover:shadow-md hover:scale-[1.02]",
        highlight && "border-destructive/30"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-xl",
          iconBgColor
        )}
      >
        <Icon className={cn("h-6 w-6", iconColor)} />
      </div>
      <span className="text-sm font-medium text-card-foreground text-center">
        {label}
      </span>
    </Link>
  )
}
