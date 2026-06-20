'use client'

import Image from 'next/image'
import { GraduationCap, Briefcase, Scale } from 'lucide-react'
import { useReveal } from './use-reveal'

const VALUES = [
  {
    icon: GraduationCap,
    title: 'Éducation',
    desc: 'Une école de qualité, accessible à chaque enfant haïtien.',
  },
  {
    icon: Briefcase,
    title: 'Emploi',
    desc: 'Créer des opportunités durables pour notre jeunesse.',
  },
  {
    icon: Scale,
    title: 'Justice',
    desc: 'Une gouvernance transparente et équitable pour tous.',
  },
]

export function About() {
  const img = useReveal()
  const text = useReveal()

  return (
    <section id="vision" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Portrait with double frame */}
        <div
          ref={img.ref}
          className={`reveal ${img.visible ? 'is-visible' : ''}`}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-2xl border border-gold/50" />
            <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl border border-royal/60" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/markens-about.png"
                alt="Markens Larose, Candidat Député — Engagé pour le peuple haïtien"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          ref={text.ref}
          className={`reveal ${text.visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <p className="font-display text-sm text-gold">QUI EST-IL ?</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            Un Leader Engagé Pour Vous
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-text">
            Né et grandi au cœur de sa communauté, Markens Larose consacre sa vie
            au service du peuple haïtien. Journaliste de formation et homme de
            terrain, il porte une vision claire : bâtir une Haïti prospère,
            juste et fière de ses enfants.
          </p>

          <div className="mt-10 space-y-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`reveal flex items-start gap-4 rounded-lg border-l-2 border-royal bg-card p-5 transition-transform hover:translate-x-1 ${
                  text.visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${0.3 + i * 0.12}s` }}
              >
                <v.icon className="mt-0.5 h-7 w-7 shrink-0 text-gold" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-text">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
