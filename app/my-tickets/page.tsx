"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ChevronRight, Ticket, Tag } from "lucide-react"

const myTickets = [
  {
    id: "bts-tampa-1",
    eventName: "BTS WORLD TOUR 'ARIRANG' IN TAMPA",
    date: "Tue, Apr 28, 2026",
    time: "8:00 PM",
    venue: "Raymond James Stadium",
    location: "Tampa, Florida",
    section: "Sec 135",
    row: "Row 12",
    seats: "Seats 6",
    image: "/images/bts-concert.jpg",
    status: "Upcoming",
    orderNumber: "38-42907/TPA",
    barcode: "7441395786628",
  },
  {
    id: "bts-tampa-2",
    eventName: "BTS WORLD TOUR 'ARIRANG' IN TAMPA",
    date: "Tue, Apr 28, 2026",
    time: "8:00 PM",
    venue: "Raymond James Stadium",
    location: "Tampa, Florida",
    section: "Sec 135",
    row: "Row 12",
    seats: "Seats 5",
    image: "/images/bts-concert.jpg",
    status: "Upcoming",
    orderNumber: "38-42907/TPA",
    barcode: "7441395786629",
  },
]

export default function MyTicketsPage() {
  const { user, isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/sign-in")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full">
        <div className="bg-[#02122b] border-b border-border">
          <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-3 w-3" />
                <span>Tampa, FL</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/my-tickets" className="text-xs text-primary font-medium transition-colors">
                My Tickets
              </Link>
              <Link href="/order-confirmation" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Orders
              </Link>
              <span className="text-xs text-muted-foreground">
                {user?.firstName}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#0a0e17]/95 backdrop-blur-md border-b border-border">
          <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-6 px-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Ticketmaster Home">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="hsl(211, 97%, 44%)" />
                <path d="M10 12h12v2H10zM10 16h8v2h-8zM10 20h10v2H10z" fill="white" />
              </svg>
              <span className="text-xl font-bold text-foreground tracking-tight">ticketmaster</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary">Concerts</Link>
              <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary">Sports</Link>
              <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary">{"Arts & Theater"}</Link>
              <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary">Family</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        {/* Page Title */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-8">
            <div className="flex items-center gap-3 mb-1">
              <Ticket className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">My Tickets</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              {"Manage your upcoming events and tickets"}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-4">
            <div className="flex items-center gap-6">
              <button className="border-b-2 border-primary py-4 text-sm font-semibold text-primary">
                Upcoming ({myTickets.length})
              </button>
              <button className="border-b-2 border-transparent py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Past Events
              </button>
            </div>
          </div>
        </div>

        {/* Ticket Cards */}
        <div className="mx-auto max-w-[1400px] px-4 py-8">
          <div className="flex flex-col gap-6">
            {myTickets.map((ticket) => (
              <Link
                key={ticket.id}
                href={`/my-tickets/${ticket.id}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card hover:border-primary/40 transition-all md:flex-row"
              >
                {/* Event Image */}
                <div className="relative h-48 w-full flex-shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-80">
                  <Image
                    src={ticket.image}
                    alt={ticket.eventName}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-sm bg-[#00b300] px-2.5 py-1 text-xs font-bold text-[#ffffff] uppercase tracking-wider">
                      {ticket.status}
                    </span>
                  </div>
                </div>

                {/* Ticket Info */}
                <div className="flex flex-1 flex-col justify-center p-5 md:p-6">
                  <h2 className="mb-3 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors md:text-xl">
                    {ticket.eventName}
                  </h2>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {ticket.date} &middot; {ticket.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {ticket.venue} &mdash; {ticket.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {ticket.section}, {ticket.row}, {ticket.seats}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                      View Mobile Ticket
                    </span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-[#02122b] py-6">
        <div className="mx-auto max-w-[1400px] px-4 text-center">
          <p className="text-xs text-muted-foreground">
            {"2026 Ticketmaster Clone. Built for educational purposes only."}
          </p>
        </div>
      </footer>
    </div>
  )
}
