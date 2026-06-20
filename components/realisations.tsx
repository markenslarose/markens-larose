'use client'

import { useReveal } from './use-reveal'

const MILESTONES = [
  {
    year: '2018',
    title: 'Programme de bourses scolaires',
    desc: 'Plus de 500 élèves soutenus dans leur parcours académique.',
  },
  {
    year: '2020',
    title: 'Centre de formation professionnelle',
    desc: 'Ouverture d&apos;un centre formant les jeunes aux métiers d&apos;avenir.',
  },
  {
    year: '2021',
    title: 'Accès à l&apos;eau potable',
    desc: 'Installation de points d&apos;eau dans plusieurs quartiers ruraux.',
  },
  {
    year: '2022',
    title: 'Clinique communautaire',
    desc: 'Soins de santé gratuits offerts à des milliers de familles.',
  },
  {
    year: '2023',
    title: 'Réhabilitation des routes',
    desc: 'Désenclavement de zones isolées pour faciliter le commerce.',
  },
  {
    year: '2024',
    title: 'Mouvement citoyen',
    desc: 'Mobilisation de milliers de citoyens autour du changement.',
  },
]

function Node({
  m,
  index,
}: {
  m: (typeof MILESTONES)[number]
  index: number
}) {
  const item = useReveal()
  return (
    <div
      ref={item.ref}
      className={`reveal relative w-72 shrink-0 pt-12 ${
        item.visible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* node dot */}
      <span className="absolute left-0 top-[1.35rem] z-10 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-royal-glow bg-background shadow-[0_0_14px_2px_rgba(37,99,235,0.7)]" />
      <span className="inline-block rounded-full border border-gold/60 px-3 py-1 font-display text-sm text-gold">
        {m.year}
      </span>
      <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
        {m.title}
      </h3>
      <p
        className="mt-2 text-sm leading-relaxed text-muted-text"
        dangerouslySetInnerHTML={{ __html: m.desc }}
      />
    </div>
  )
}

export function Realisations() {
  const head = useReveal()
  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-card/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={head.ref}
          className={`reveal ${head.visible ? 'is-visible' : ''}`}
        >
          <p className="font-display text-sm text-gold">UN BILAN CONCRET</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            Réalisations
          </h2>
        </div>
      </div>

      <div className="mt-14 overflow-x-auto pb-6">
        <div className="relative mx-auto flex min-w-max max-w-7xl gap-8 px-5 lg:px-8">
          {/* gold timeline line */}
          <div className="absolute left-5 right-5 top-[1.35rem] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent lg:left-8 lg:right-8" />
          {MILESTONES.map((m, i) => (
            <Node key={m.year} m={m} index={i} />
          ))}
        </div>
      </div>
      <p className="mt-2 px-5 text-center text-xs text-muted-text lg:px-8">
        Faites défiler horizontalement pour explorer le parcours →
      </p>
    </section>
  )
}
