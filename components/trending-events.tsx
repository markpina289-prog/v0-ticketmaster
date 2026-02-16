import { EventCard } from "./event-card"
import { TrendingUp, ChevronRight } from "lucide-react"

const trendingEvents = [
  {
    image: "/images/event-pop.jpg",
    title: "Aurora World Tour 2026",
    date: "Sat, Mar 15 - 8:00 PM",
    venue: "Madison Square Garden",
    city: "New York, NY",
    priceRange: "$89",
  },
  {
    image: "/images/event-sports.jpg",
    title: "NBA Playoffs - Eastern Conference",
    date: "Fri, Apr 10 - 7:30 PM",
    venue: "Barclays Center",
    city: "Brooklyn, NY",
    priceRange: "$125",
  },
  {
    image: "/images/event-rock.jpg",
    title: "Midnight Echoes - Farewell Tour",
    date: "Sat, May 3 - 9:00 PM",
    venue: "The Forum",
    city: "Los Angeles, CA",
    priceRange: "$75",
  },
  {
    image: "/images/event-comedy.jpg",
    title: "Live Comedy Night: All Stars",
    date: "Thu, Mar 20 - 8:30 PM",
    venue: "Radio City Music Hall",
    city: "New York, NY",
    priceRange: "$55",
  },
]

export function TrendingEvents() {
  return (
    <section className="w-full bg-background py-8" aria-labelledby="trending-heading">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 id="trending-heading" className="text-xl font-bold text-foreground md:text-2xl">
              Trending Events
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See All
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trendingEvents.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}
