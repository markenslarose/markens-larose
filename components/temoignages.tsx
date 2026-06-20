'use client'

import { useReveal } from './use-reveal'

const TESTIMONIALS = [
  {
    name: 'Naomie Pierre',
    role: 'Enseignante, Gonaïves',
    img: '/testimonial-1.png',
    quote:
      "Markens a toujours été à l'écoute de notre communauté. Ses actions pour nos écoles parlent plus fort que les promesses.",
  },
  {
    name: 'Jean-Robert Étienne',
    role: 'Agriculteur, Plaine',
    img: '/testimonial-2.png',
    quote:
      "Pour la première fois, je sens qu'un candidat comprend vraiment les besoins des familles rurales. Il mérite notre confiance.",
  },
  {
    name: 'Samson Janvier',
    role: 'Jeune entrepreneure',
    img: '/testimonial-3.png',
    quote:
      "Sa vision pour la jeunesse et l'emploi est concrète. Markens donne de l'espoir à toute une génération.",
  },
]

function Card({ t, index }: { t: (typeof TESTIMONIALS)[number]; index: number }) {
  const item = useReveal()
  return (
    <figure
      ref={item.ref}
      className={`reveal relative rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-royal/60 ${
        item.visible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <span className="font-heading text-6xl leading-none text-royal/40" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="-mt-4 leading-relaxed text-muted-text">{t.quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <img
          src={t.img || "/placeholder.svg"}
          alt={t.name}
          className="h-12 w-12 rounded-full border border-royal/50 object-cover"
        />
        <div>
          <p className="font-display text-sm text-foreground">{t.name}</p>
          <p className="text-xs text-muted-text">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export function Temoignages() {
  const head = useReveal()
  return (
    <section id="temoignages" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={head.ref}
          className={`reveal mx-auto max-w-2xl text-center ${head.visible ? 'is-visible' : ''}`}
        >
          <p className="font-display text-sm tracking-[0.2em] text-gold">CE QUE DIT LE PEUPLE</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Témoignages
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Card key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
