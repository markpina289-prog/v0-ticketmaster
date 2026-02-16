"use client"

import { useState } from "react"
import { Music, Trophy, Drama, Laugh, Users, Sparkles, Guitar, Mic2 } from "lucide-react"

const categories = [
  { label: "All", icon: Sparkles },
  { label: "Concerts", icon: Music },
  { label: "Sports", icon: Trophy },
  { label: "Arts & Theater", icon: Drama },
  { label: "Comedy", icon: Laugh },
  { label: "Family", icon: Users },
  { label: "Rock", icon: Guitar },
  { label: "Hip-Hop", icon: Mic2 },
]

export function CategoryNav() {
  const [active, setActive] = useState("All")

  return (
    <section className="w-full bg-background" aria-label="Event categories">
      <div className="mx-auto max-w-[1400px] px-4 py-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = active === cat.label
            return (
              <button
                key={cat.label}
                onClick={() => setActive(cat.label)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all flex-shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                aria-pressed={isActive}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
