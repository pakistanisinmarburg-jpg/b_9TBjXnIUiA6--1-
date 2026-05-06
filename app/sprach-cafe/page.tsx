"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Languages, Users, MapPin, Calendar } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"

const languagePartners = [
  {
    id: "1",
    name: "Sophie M.",
    nativeLanguage: "German",
    learningLanguage: "English",
    avatar: "/images/avatar-1.jpg",
    location: "Marburg Center",
  },
  {
    id: "2",
    name: "Ahmed K.",
    nativeLanguage: "Arabic",
    learningLanguage: "German",
    avatar: "/images/avatar-2.jpg",
    location: "Südviertel",
  },
  {
    id: "3",
    name: "Maria L.",
    nativeLanguage: "Spanish",
    learningLanguage: "German",
    avatar: "/images/avatar-3.jpg",
    location: "Weidenhausen",
  },
]

const upcomingEvents = [
  {
    id: "1",
    title: "Weekly Sprach Café",
    date: "Every Wednesday",
    time: "18:00 - 20:00",
    location: "Café Roter Stern",
    languages: ["German", "English", "Spanish"],
  },
  {
    id: "2",
    title: "Tandem Meetup",
    date: "Every Saturday",
    time: "15:00 - 17:00",
    location: "University Library",
    languages: ["All languages"],
  },
]

export default function SprachCafePage() {
  return (
    <AppShell>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 hover:bg-accent rounded-full">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Sprach Café</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-6">
        {/* Info Banner */}
        <div className="bg-primary/10 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Languages className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground mb-1">Language Exchange</h2>
              <p className="text-sm text-muted-foreground">
                Find tandem partners and practice languages with native speakers in Marburg.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-card border border-border rounded-xl p-4"
              >
                <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {event.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-0.5 bg-secondary rounded-full text-xs text-secondary-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Find Partners */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-foreground">Find Language Partners</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              See all
            </Button>
          </div>
          <div className="space-y-3">
            {languagePartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Users className="absolute inset-0 m-auto h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {partner.nativeLanguage} → {partner.learningLanguage}
                  </p>
                  <p className="text-xs text-muted-foreground">{partner.location}</p>
                </div>
                <Button size="sm" variant="outline">
                  Connect
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <h3 className="font-semibold text-foreground mb-2">Want to be a language partner?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Register your profile and connect with others learning your language.
          </p>
          <Button className="w-full">Register as Partner</Button>
        </div>
      </div>
    </AppShell>
  )
}
