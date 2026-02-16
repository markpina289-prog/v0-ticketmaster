"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Tag, ArrowLeft, ChevronRight, Smartphone } from "lucide-react"

const ticketData: Record<string, {
  eventName: string
  date: string
  time: string
  venue: string
  location: string
  section: string
  row: string
  seats: string
  image: string
  orderNumber: string
  barcode: string
  level: string
  side: string
  accessNote: string
}> = {
  "bts-tampa-1": {
    eventName: "BTS WORLD TOUR 'ARIRANG' IN TAMPA",
    date: "Tue \u00b7 Apr 28, 2026",
    time: "8:00 PM",
    venue: "Raymond James Stadium",
    location: "Tampa, Florida",
    section: "Sec 135",
    row: "Row 12",
    seats: "Seats 6",
    image: "/images/bts-concert.jpg",
    orderNumber: "38-42907/TPA",
    barcode: "7441395786628",
    level: "200Level",
    side: "Southwest Side",
    accessNote: "Access to Club is Not Permitted",
  },
  "bts-tampa-2": {
    eventName: "BTS WORLD TOUR 'ARIRANG' IN TAMPA",
    date: "Tue \u00b7 Apr 28, 2026",
    time: "8:00 PM",
    venue: "Raymond James Stadium",
    location: "Tampa, Florida",
    section: "Sec 135",
    row: "Row 12",
    seats: "Seats 5",
    image: "/images/bts-concert.jpg",
    orderNumber: "38-42907/TPA",
    barcode: "7441395786629",
    level: "200Level",
    side: "Southwest Side",
    accessNote: "Access to Club is Not Permitted",
  },
}

export default function TicketDetailPage() {
  const { user, isLoggedIn } = useAuth()
  const router = useRouter()
  const params = useParams()
  const [showBarcode, setShowBarcode] = useState(false)

  const id = params.id as string
  const ticket = ticketData[id]

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/sign-in")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn || !ticket) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#ffffff]">
      {/* Header - Ticketmaster style */}
      <header className="sticky top-0 z-50 bg-[#02122b] border-b border-border">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4">
          <Link
            href="/my-tickets"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to My Tickets</span>
          </Link>
          <Link href="/" className="flex items-center gap-2" aria-label="Ticketmaster Home">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="16" fill="hsl(211, 97%, 44%)" />
              <path d="M10 12h12v2H10zM10 16h8v2h-8zM10 20h10v2H10z" fill="white" />
            </svg>
            <span className="text-lg font-bold text-foreground tracking-tight">ticketmaster</span>
          </Link>
        </div>
      </header>

      {/* Ticket Detail Content - white background like actual TM */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl">
          {/* Event Hero Image */}
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={ticket.image}
              alt={ticket.eventName}
              fill
              className="object-cover"
              priority
            />
            {/* Blue gradient bar at bottom of image like TM */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
          </div>

          {/* Ticket Information - white card style like the screenshot */}
          <div className="bg-[#ffffff] px-5 py-6">
            <h1 className="mb-5 text-xl font-bold text-[#1a1a2e] md:text-2xl leading-tight">
              {ticket.eventName}
            </h1>

            {/* Event details */}
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-[#666666] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#333333]">
                  {ticket.date} &middot; {ticket.time}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#666666] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm text-[#333333]">
                    {ticket.venue} &mdash; {ticket.location}
                  </span>
                  <a href="#" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-0.5">
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Tag className="h-4 w-4 text-[#666666] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#333333]">
                  {ticket.section}, {ticket.row}, {ticket.seats}
                </span>
              </div>
            </div>

            {/* View Mobile Ticket Button */}
            <button
              onClick={() => setShowBarcode(!showBarcode)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-4 text-base font-bold text-primary-foreground hover:bg-[hsl(211,97%,38%)] transition-colors"
            >
              <Smartphone className="h-5 w-5" />
              View Mobile Ticket
            </button>

            {/* Barcode section */}
            {showBarcode && (
              <div className="mt-6 flex flex-col items-center rounded-lg border border-[#e0e0e0] bg-[#f9f9f9] p-6">
                <div className="mb-3 flex flex-col items-center">
                  {/* Simulated barcode */}
                  <div className="flex items-center gap-px mb-2">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-[#1a1a2e]"
                        style={{
                          width: Math.random() > 0.5 ? "2px" : "3px",
                          height: "60px",
                          marginRight: Math.random() > 0.5 ? "1px" : "2px",
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#666666] tracking-widest font-mono">
                    {ticket.barcode}
                  </span>
                </div>
                <p className="text-xs text-[#999999] text-center">
                  {"Screenshot not accepted. Use the mobile entry."}
                </p>
              </div>
            )}

            {/* Divider */}
            <div className="my-8 border-t border-[#e0e0e0]" />

            {/* Transfer Tickets Section */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="mb-4 flex items-center justify-center">
                <div className="relative flex items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e8e8]">
                    <Smartphone className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mx-2 flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <ChevronRight className="-ml-2 h-4 w-4 text-primary" />
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e8e8]">
                    <Smartphone className="h-7 w-7 text-primary" />
                  </div>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">
                Transfer Tickets to Friends
              </h3>
              <p className="text-sm text-[#666666] max-w-sm leading-relaxed">
                {"Easily transfer your tickets on Ticketmaster.com or the app."}
              </p>
            </div>

            {/* Manage My Tickets Button */}
            <Link
              href="/my-tickets"
              className="flex w-full items-center justify-center rounded-md border-2 border-primary py-4 text-base font-bold text-primary hover:bg-primary/5 transition-colors"
            >
              Manage My Tickets
            </Link>

            {/* Ticket Details Section */}
            <div className="mt-8 border-t border-[#e0e0e0] pt-6">
              <h3 className="mb-4 text-base font-bold text-[#1a1a2e]">Ticket Information</h3>
              <div className="flex flex-col gap-2 text-sm text-[#333333]">
                <div className="flex items-center gap-2">
                  <span className="text-[#666666]">Section:</span>
                  <span className="font-medium">135</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#666666]">Row:</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#666666]">Seat:</span>
                  <span className="font-medium">{ticket.seats.replace("Seats ", "")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#666666]">Corner:</span>
                  <span className="font-medium">Level 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#666666]">Level:</span>
                  <span className="font-medium">{ticket.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#666666]">Side:</span>
                  <span className="font-medium">{ticket.side}</span>
                </div>
                <p className="mt-1 text-xs text-[#999999]">{ticket.accessNote}</p>
              </div>
            </div>

            {/* Order number */}
            <div className="mt-6 border-t border-[#e0e0e0] pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#666666]">Order #</span>
                <span className="font-medium text-[#333333]">{ticket.orderNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
