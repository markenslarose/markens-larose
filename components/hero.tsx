'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

function Particles() {
  const [particles, setParticles] = useState<
    { id: number; left: number; size: number; delay: number; duration: number }[]
  >([])

  // Generate only on the client to avoid SSR/client hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
        duration: Math.random() * 8 + 8,
      })),
    )
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle absolute bottom-0 rounded-full bg-royal-glow"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24"
    >
      {/* geometric line grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(26,79,191,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,191,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
        }}
      />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left text */}
        <div className="text-center lg:text-left">
          <p
            className="hero-anim font-display text-sm text-gold sm:text-base"
            style={{ animationDelay: '0.1s' }}
          >
            CANDIDAT DÉPUTÉ • HAÏTI 2026
          </p>
          <h1
            className="hero-anim mt-4 font-heading text-5xl font-bold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.25s' }}
          >
            MARKENS
            <br />
            <span className="text-royal-glow">LAROSE</span>
          </h1>
          <p
            className="hero-anim mx-auto mt-6 max-w-md font-heading text-xl italic text-muted-text lg:mx-0 lg:text-2xl"
            style={{ animationDelay: '0.4s' }}
          >
            Un rêve, Une vision
          </p>
          <div
            className="hero-anim mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            style={{ animationDelay: '0.55s' }}
          >
            <a
              href="#programme"
              className="w-full rounded-md bg-royal px-7 py-3.5 text-center font-display text-base text-white shadow-[0_0_24px_-4px_rgba(37,99,235,0.6)] transition-all hover:bg-royal-glow hover:shadow-[0_0_32px_-2px_rgba(37,99,235,0.9)] sm:w-auto">
              Découvrir Mon Programme
            </a>
            <a
              href="#contact"
              className="w-full rounded-md border border-royal px-7 py-3.5 text-center font-display text-base text-foreground transition-all hover:bg-royal/15 sm:w-auto">
              Me Contacter
            </a>
          </div>
        </div>

        {/* Right portrait */}
        <div
          className="hero-anim relative mx-auto w-full max-w-sm lg:max-w-md"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-royal/30 blur-3xl" />
          <div className="glow-pulse relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-royal/70">
            <Image
              src="/markens-hero.png"
              alt="Portrait de Markens Larose, candidat député"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
