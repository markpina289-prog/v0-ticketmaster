import { EventCard } from "./event-card"
import { MapPin, ChevronRight } from "lucide-react"

const nearbyEvents = [
  {
    image: "/images/event-rock.jpg",
    title: "Indie Rock Night - The Lumineers",
    date: "Wed, Mar 12 - 8:00 PM",
    venue: "Brooklyn Steel",
    city: "Brooklyn, NY",
    priceRange: "$45",
  },
  {
    image: "/images/event-comedy.jpg",
    title: "Saturday Night Comedy Special",
    date: "Sat, Mar 15 - 9:30 PM",
    venue: "Comedy Cellar",
    city: "New York, NY",
    priceRange: "$35",
  },
  {
    image: "/images/event-arts.jpg",
    title: "Hamilton - The Musical",
    date: "Sun, Mar 16 - 2:00 PM",
    venue: "Richard Rodgers Theatre",
    city: "New York, NY",
    priceRange: "$175",
  },
  {
    image: "/images/event-festival.jpg",
    title: "Electronic Music Festival",
    date: "Fri, Mar 21 - 10:00 PM",
    venue: "Avant Gardner",
    city: "Brooklyn, NY",
    priceRange: "$65",
  },
]

export function NearbyEvents() {
  return (
    <section className="w-full bg-background py-8" aria-labelledby="nearby-heading">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 id="nearby-heading" className="text-xl font-bold text-foreground md:text-2xl">
              Events Near New York
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
          {nearbyEvents.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}
