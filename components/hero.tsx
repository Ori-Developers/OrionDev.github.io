"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className={`relative z-10 max-w-4xl text-center transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Logo / Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-card">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Orion Dev
          </span>
        </h1>

        {/* Tagline */}
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground sm:text-2xl">
          A small team building <span className="text-foreground">tools we believe in.</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Learn More
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 transition-all duration-1000 delay-500 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="h-8 w-[1px] animate-pulse bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
