"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Summer Music Festival 2026",
    subtitle: "The biggest outdoor festival of the year",
    cta: "Get Tickets",
    image: "/images/hero-concert.jpg",
    date: "Jun 15-17, 2026",
  },
  {
    id: 2,
    title: "Championship Playoffs",
    subtitle: "Don't miss the action this season",
    cta: "Find Seats",
    image: "/images/event-football.jpg",
    date: "Starting Mar 2026",
  },
  {
    id: 3,
    title: "Broadway's Best Shows",
    subtitle: "Award-winning performances live on stage",
    cta: "See Shows",
    image: "/images/event-arts.jpg",
    date: "Now Playing",
  },
]

export function HeroBanner() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative w-full overflow-hidden" aria-label="Featured events">
      <div className="relative aspect-[21/9] md:aspect-[21/7] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end pb-10 md:pb-16 lg:pb-20">
              <div className="mx-auto w-full max-w-[1400px] px-4">
                <span className="mb-2 inline-block rounded-sm bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground uppercase tracking-wider">
                  {slide.date}
                </span>
                <h2 className="mb-2 text-2xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance leading-tight">
                  {slide.title}
                </h2>
                <p className="mb-4 text-sm text-muted-foreground md:text-base lg:text-lg max-w-lg">
                  {slide.subtitle}
                </p>
                <button className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[hsl(211,97%,38%)] transition-colors">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm hover:bg-background/80 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm hover:bg-background/80 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-primary" : "w-2 bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </section>
  )
}
