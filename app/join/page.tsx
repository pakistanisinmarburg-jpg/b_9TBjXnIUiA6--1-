"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, QrCode, Camera, Loader2 } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function JoinPage() {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate joining
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <AppShell showNav={false}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 hover:bg-accent rounded-full">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Join via QR</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6 space-y-8">
        {/* QR Scanner Placeholder */}
        <div className="aspect-square bg-card rounded-2xl border border-border flex flex-col items-center justify-center p-8">
          <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <QrCode className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-2 text-center">
            Scan QR Code
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Point your camera at a MarburgConnect QR code to join a community
          </p>
          <Button variant="outline" className="gap-2">
            <Camera className="h-4 w-4" />
            Open Camera
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">or enter code</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Manual Code Entry */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Invite Code</Label>
            <Input
              id="code"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              maxLength={6}
              className="text-center text-lg font-mono tracking-widest"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={code.length < 6 || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              "Join Community"
            )}
          </Button>
        </form>
      </div>
    </AppShell>
  )
}
