import Image from "next/image"
import { ChevronRight } from "lucide-react"

const discoverCategories = [
  {
    title: "Concerts",
    description: "Live music from your favorite artists",
    image: "/images/hero-concert.jpg",
    count: "2,450+ events",
  },
  {
    title: "Sports",
    description: "NFL, NBA, MLB, NHL and more",
    image: "/images/event-football.jpg",
    count: "1,200+ events",
  },
  {
    title: "Arts & Theater",
    description: "Broadway, musicals and performances",
    image: "/images/event-arts.jpg",
    count: "890+ events",
  },
  {
    title: "Family",
    description: "Fun for the whole family",
    image: "/images/event-family.jpg",
    count: "450+ events",
  },
]

export function DiscoverSection() {
  return (
    <section className="w-full bg-background py-8" aria-labelledby="discover-heading">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 id="discover-heading" className="text-xl font-bold text-foreground md:text-2xl">
            Discover Events
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Browse All
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {discoverCategories.map((cat) => (
            <a
              key={cat.title}
              href="#"
              className="group relative flex h-48 overflow-hidden rounded-lg md:h-56"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
                <p className="mb-1 text-xs text-muted-foreground">{cat.description}</p>
                <span className="text-xs font-medium text-primary">{cat.count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
