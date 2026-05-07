import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarburgConnect',
  description: 'Connect. Belong. Thrive.',
  themeColor: '#1a6b3c',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}