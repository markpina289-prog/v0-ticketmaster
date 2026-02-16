import Image from "next/image"
import { MapPin, Calendar, Heart } from "lucide-react"

interface EventCardProps {
  image: string
  title: string
  date: string
  venue: string
  city: string
  priceRange: string
}

export function EventCard({ image, title, date, venue, city, priceRange }: EventCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg bg-card border border-border hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        <button
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm hover:bg-background/80 transition-colors"
          aria-label={`Save ${title} to favorites`}
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-3.5 w-3.5 text-primary flex-shrink-0" />
          <span className="text-xs font-medium text-primary">{date}</span>
        </div>
        <h3 className="mb-1 text-sm font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-1 mb-3">
          <MapPin className="h-3 w-3 text-muted-foreground flex-shrink-0" />
          <span className="text-xs text-muted-foreground truncate">
            {venue} - {city}
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-muted-foreground">From</span>
          <span className="text-sm font-bold text-card-foreground">{priceRange}</span>
        </div>
      </div>
    </article>
  )
}
