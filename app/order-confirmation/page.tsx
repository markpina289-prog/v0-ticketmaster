"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Smartphone, ChevronRight, Info } from "lucide-react"

export default function OrderConfirmationPage() {
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
    <div className="flex min-h-screen flex-col bg-[#ffffff]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#02122b] border-b border-border">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-6 px-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Ticketmaster Home">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="16" fill="hsl(211, 97%, 44%)" />
              <path d="M10 12h12v2H10zM10 16h8v2h-8zM10 20h10v2H10z" fill="white" />
            </svg>
            <span className="text-lg font-bold text-foreground tracking-tight">ticketmaster</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Concerts</Link>
            <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sports</Link>
            <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{"Arts & Theater"}</Link>
            <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Family</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* YOU GOT 'EM Banner */}
        <div className="bg-[#02122b] py-8 md:py-12">
          <div className="mx-auto max-w-[1100px] px-4">
            <h1 className="text-3xl font-extrabold text-[#ffffff] md:text-5xl mb-2 tracking-tight">
              {"YOU GOT 'EM."}
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Let the Anticipation Begin.
            </p>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="mx-auto max-w-[1100px] px-4 py-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left Column - Event Details */}
            <div className="flex-1">
              {/* Event Image */}
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/images/bts-concert.jpg"
                  alt="BTS WORLD TOUR ARIRANG IN TAMPA"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Event Name */}
              <h2 className="mb-1 text-xl font-bold text-[#1a1a2e] md:text-2xl">
                {"BTS WORLD TOUR 'ARIRANG' IN TAMPA"}
              </h2>
              <h3 className="mb-4 text-base font-semibold text-[#333333]">Ticket Information</h3>

              {/* Ticket Details */}
              <div className="flex flex-col gap-1.5 text-sm text-[#333333]">
                <div className="flex items-center gap-2">
                  <Info className="h-3.5 w-3.5 text-[#666666] flex-shrink-0" />
                  <span>Section 135, Row 12, Seats 5</span>
                </div>
                <div className="pl-6 flex flex-col gap-0.5 text-[#555555]">
                  <span>Corner</span>
                  <span>Level 2</span>
                  <span>200Level</span>
                  <span>Southwest Side</span>
                  <span className="text-[#999999] text-xs">Access to Club is Not Permitted</span>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Summary */}
            <div className="w-full lg:w-[400px]">
              <div className="rounded-lg border border-[#e0e0e0] bg-[#f9f9f9] p-6">
                {/* PayPal */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003087]">
                    <span className="text-xs font-bold text-[#ffffff]">PP</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a2e]">PayPal</p>
                    <p className="text-xs text-[#666666]">Check your PayPal account for details</p>
                  </div>
                </div>

                <div className="border-t border-[#e0e0e0] pt-4">
                  {/* Tickets */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-bold text-[#1a1a2e]">Tickets</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-[#333333]">
                        <span>ARMY MEMBERSHIP PRESALE</span>
                        <span className="text-xs text-[#999999]">{"$149.50 x 1"}</span>
                        <Info className="h-3 w-3 text-[#999999]" />
                      </div>
                      <span className="text-sm font-semibold text-[#1a1a2e]">$168.60</span>
                    </div>
                  </div>

                  {/* Fees */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-bold text-[#1a1a2e]">Fees</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-[#333333]">
                        <span>Service Fee</span>
                        <Info className="h-3 w-3 text-[#999999]" />
                      </div>
                      <span className="text-sm text-[#1a1a2e]">$38.45</span>
                    </div>
                  </div>

                  {/* Taxes */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-bold text-[#1a1a2e]">Taxes</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-[#333333]">
                        <span>Tax</span>
                        <Info className="h-3 w-3 text-[#999999]" />
                      </div>
                      <span className="text-sm text-[#1a1a2e]">$10.65</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="border-t border-[#e0e0e0] pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-[#1a1a2e]">Total</span>
                      <span className="text-lg font-bold text-[#1a1a2e]">$198.60</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Going Information */}
              <div className="mt-6 rounded-lg border border-[#e0e0e0] bg-[#f9f9f9] p-6">
                <h4 className="mb-3 text-base font-bold text-[#1a1a2e]">{"Going Information*"}</h4>
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8e8]">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <ChevronRight className="h-3 w-3 text-primary mx-0.5" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8e8]">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="flex-1 text-xs text-[#666666] leading-relaxed">
                    Transfer your tickets ahead of time to everyone in your group to make sure
                    {"everyone's"} going is safely and easily while maintaining event monitoring. Tap Manage
                    My Tickets to get started.
                  </p>
                </div>
                <p className="mb-4 text-xs text-[#999999]">
                  {"Order Details emailed to: "}
                  <span className="text-[#333333]">{user?.email || "user@example.com"}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/my-tickets"
              className="flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-bold text-primary-foreground hover:bg-[hsl(211,97%,38%)] transition-colors"
            >
              View My Tickets
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center rounded-md border-2 border-primary px-8 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
