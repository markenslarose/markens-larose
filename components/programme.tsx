'use client'

import { GraduationCap, TrendingUp, HeartPulse, ShieldCheck } from 'lucide-react'
import { useReveal } from './use-reveal'

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: 'Éducation & Jeunesse',
    desc: "Moderniser nos écoles et garantir une formation professionnelle pour préparer la jeunesse à l'avenir.",
  },
  {
    icon: TrendingUp,
    title: 'Emploi & Économie',
    desc: 'Soutenir les entrepreneurs locaux et attirer les investissements pour créer des emplois durables.',
  },
  {
    icon: HeartPulse,
    title: 'Santé Publique',
    desc: 'Rendre les soins de santé accessibles et de qualité dans chaque coin de notre circonscription.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & Justice',
    desc: 'Renforcer la sécurité de nos quartiers et restaurer la confiance envers nos institutions.',
  },
]

function ProgramCard({
  program,
  index,
}: {
  program: (typeof PROGRAMS)[number]
  index: number
}) {
  const item = useReveal()
  const Icon = program.icon
  return (
    <div
      ref={item.ref}
      className={`reveal group rounded-xl border-t-[3px] border-royal bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_50px_-12px_rgba(37,99,235,0.55)] ${
        item.visible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-royal/15 transition-colors group-hover:bg-royal/25">
        <Icon className="h-7 w-7 text-royal-glow" />
      </div>
      <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
        {program.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted-text">{program.desc}</p>
    </div>
  )
}

export function Programme() {
  const head = useReveal()

  return (
    <section id="programme" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={head.ref}
          className={`reveal text-center ${head.visible ? 'is-visible' : ''}`}
        >
          <p className="font-display text-sm text-gold">NOTRE FEUILLE DE ROUTE</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            Programme d&apos;Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-text">
            Quatre priorités concrètes pour transformer notre communauté et
            redonner espoir à chaque famille.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <ProgramCard key={p.title} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
