import Link from 'next/link'

type QuickActionCardProps = {
  href: string
  title: string
  icon: string
  iconBg: string
  iconText: string
}

export default function QuickActionCard({
  href,
  title,
  icon,
  iconBg,
  iconText,
}: QuickActionCardProps) {
  return (
    <Link href={href} className="block">
      <div className="flex h-full min-h-[160px] flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg}`}>
          <span className={`text-3xl ${iconText}`}>{icon}</span>
        </div>
        <p className="text-center text-lg font-semibold text-gray-900">{title}</p>
      </div>
    </Link>
  )
}