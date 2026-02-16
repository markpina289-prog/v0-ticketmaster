"use client"

import { useState } from "react"
import { Search, MapPin, Menu, X, User, Heart, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Concerts", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Arts, Theater & Comedy", href: "#" },
  { label: "Family", href: "#" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-[#02122b] border-b border-border">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="h-3 w-3" />
              <span>New York, NY</span>
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Help
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Heart className="h-3 w-3" />
              Favorites
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <User className="h-3 w-3" />
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#0a0e17]/95 backdrop-blur-md border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-6 px-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2" aria-label="Ticketmaster Home">
            <div className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="hsl(211, 97%, 44%)" />
                <path d="M10 12h12v2H10zM10 16h8v2h-8zM10 20h10v2H10z" fill="white" />
              </svg>
              <span className="ml-2 text-xl font-bold text-foreground tracking-tight">
                ticketmaster
              </span>
            </div>
          </a>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div
              className={`flex w-full items-center rounded-md border transition-all ${
                searchFocused
                  ? "border-primary bg-secondary ring-1 ring-primary"
                  : "border-border bg-secondary"
              }`}
            >
              <Search className="ml-3 h-4 w-4 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for artists, venues, and events"
                className="w-full bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                aria-label="Search events"
              />
            </div>
          </div>

          {/* Nav links - desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden ml-auto p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17] border-b border-border">
          <div className="p-4">
            {/* Mobile search */}
            <div className="flex items-center rounded-md border border-border bg-secondary mb-4">
              <Search className="ml-3 h-4 w-4 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search events"
                className="w-full bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                aria-label="Search events"
              />
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
