import Image from "next/image"
import { Calendar, MapPin, ChevronRight, Star } from "lucide-react"

const featuredEvents = [
  {
    image: "/images/event-festival.jpg",
    title: "Sunset Music Festival 2026",
    date: "Jun 20-22, 2026",
    venue: "Bayfront Park",
    city: "Miami, FL",
    price: "$149",
    rating: "4.8",
  },
  {
    image: "/images/event-hockey.jpg",
    title: "Stanley Cup Finals - Game 5",
    date: "Jun 12, 2026 - 8:00 PM",
    venue: "United Center",
    city: "Chicago, IL",
    price: "$210",
    rating: "4.9",
  },
  {
    image: "/images/event-pop.jpg",
    title: "Neon Lights - Stadium Tour",
    date: "Jul 4, 2026 - 7:00 PM",
    venue: "SoFi Stadium",
    city: "Los Angeles, CA",
    price: "$95",
    rating: "4.7",
  },
]

export function FeaturedEvents() {
  return (
    <section className="w-full bg-secondary/50 py-10" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <h2 id="featured-heading" className="text-xl font-bold text-foreground md:text-2xl">
              Featured Events
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View All
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {featuredEvents.map((event) => (
            <article
              key={event.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card hover:border-primary/40 transition-all md:flex-row"
            >
              <div className="relative h-48 w-full md:h-auto md:w-72 lg:w-96 flex-shrink-0 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-5 md:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center gap-1 rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    <Star className="h-3 w-3" />
                    {event.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">Featured</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors md:text-xl">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {event.venue}, {event.city}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-card-foreground">
                    From {event.price}
                  </span>
                  <button className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-[hsl(211,97%,38%)] transition-colors">
                    Get Tickets
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
