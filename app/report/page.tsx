"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, AlertTriangle, Shield, Loader2 } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function ReportPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <AppShell showNav={false}>
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2 text-center">
            Report Submitted
          </h1>
          <p className="text-muted-foreground text-center mb-8 max-w-xs">
            Thank you for your report. Our team will review it and take appropriate action.
          </p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell showNav={false}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 hover:bg-accent rounded-full">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Report Issue</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Info Banner */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-foreground mb-1">
                Report Discrimination or Issues
              </h2>
              <p className="text-sm text-muted-foreground">
                Your report will be reviewed by our moderation team. All reports are treated confidentially.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Brief summary of the issue"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select a category</option>
              <option value="discrimination">Discrimination</option>
              <option value="harassment">Harassment</option>
              <option value="scam">Scam / Fraud</option>
              <option value="inappropriate">Inappropriate Content</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Please describe what happened in detail..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
              rows={6}
            />
          </div>

          {/* Anonymous Toggle */}
          <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border">
            <div>
              <Label htmlFor="anonymous" className="text-base font-medium">
                Submit Anonymously
              </Label>
              <p className="text-sm text-muted-foreground mt-0.5">
                Your identity will not be revealed
              </p>
            </div>
            <Switch
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
            />
          </div>

          <Button type="submit" className="w-full h-12" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Report"
            )}
          </Button>
        </form>
      </div>
    </AppShell>
  )
}
