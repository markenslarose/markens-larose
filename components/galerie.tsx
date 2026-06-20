'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { useReveal } from './use-reveal'

// ⚙️ Images de la galerie éditables
const IMAGES = [
  { id: 1, src: '/gallery-1.png', caption: 'À la rencontre des citoyens' },
  { id: 2, src: '/gallery-2.png', caption: 'Grand rassemblement populaire' },
  { id: 3, src: '/gallery-3.png', caption: 'Visite dans une école locale' },
  { id: 4, src: '/gallery-4.png', caption: 'Au marché avec les commerçants' },
  { id: 5, src: '/gallery-5.png', caption: 'Échanges avec les agriculteurs' },
  { id: 6, src: '/gallery-6.png', caption: 'Meeting de campagne nocturne' },
  { id: 7, src: '/gallery-7.png', caption: 'Interview télévisée' },
  { id: 8, src: '/gallery-8.png', caption: 'Action communautaire avec les jeunes' },
  { id: 9, src: '/gallery-9.png', caption: 'Moment de proximité avec les familles' },
]

function GalleryItem({
  image,
  index,
  onOpen,
}: {
  image: (typeof IMAGES)[number]
  index: number
  onOpen: () => void
}) {
  const item = useReveal()
  // varied heights for masonry feel
  const spans = ['row-span-2', 'row-span-1', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-1', 'row-span-1', 'row-span-2', 'row-span-1']
  return (
    <button
      ref={item.ref as React.RefObject<HTMLButtonElement>}
      onClick={onOpen}
      className={`reveal group relative overflow-hidden rounded-xl border border-border bg-card ${spans[index % spans.length]} ${
        item.visible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <Image
        src={image.src || '/placeholder.svg'}
        alt={`${image.caption} | Markens Larose Candidat Député`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading={index < 3 ? 'eager' : 'lazy'}
        priority={index < 3}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-royal/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ZoomIn className="h-7 w-7 text-white" />
        <span className="font-display text-base text-white">Voir</span>
      </div>
    </button>
  )
}

export function Galerie() {
  const head = useReveal()
  const [current, setCurrent] = useState<number | null>(null)

  const close = useCallback(() => setCurrent(null), [])
  const prev = useCallback(
    () => setCurrent((c) => (c === null ? c : (c - 1 + IMAGES.length) % IMAGES.length)),
    [],
  )
  const next = useCallback(
    () => setCurrent((c) => (c === null ? c : (c + 1) % IMAGES.length)),
    [],
  )

  useEffect(() => {
    if (current === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [current, close, prev, next])

  return (
    <section id="galerie" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={head.ref}
          className={`reveal text-center ${head.visible ? 'is-visible' : ''}`}
        >
          <p className="font-display text-sm text-gold">EN IMAGES</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            Galerie
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <GalleryItem
              key={img.id}
              image={img}
              index={i}
              onOpen={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current !== null && (
        <div
          className="fixed inset-0 z-[100] flex animate-in fade-in items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Fermer"
            className="absolute right-5 top-5 rounded-full border border-border bg-card/80 p-2 text-foreground transition-colors hover:bg-royal"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Image précédente"
            className="absolute left-3 rounded-full bg-royal/90 p-2.5 text-white transition-colors hover:bg-royal-glow sm:left-8"
          >
            <ChevronLeft size={26} />
          </button>

          <figure
            className="max-w-4xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[current].src || '/placeholder.svg'}
              alt={`${IMAGES[current].caption} | Markens Larose Candidat Député`}
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="max-h-[78vh] w-full rounded-lg border border-border object-contain"
            />
            <figcaption className="mt-4 text-center font-heading text-lg italic text-foreground">
              {IMAGES[current].caption}
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Image suivante"
            className="absolute right-3 rounded-full bg-royal/90 p-2.5 text-white transition-colors hover:bg-royal-glow sm:right-8"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  )
}
