'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

const BIOGRAPHY = [
  {
    title: "Origines & Jeunesse",
    text: "Né et élevé en Haïti, Markens Larose a grandi dans une famille modeste où les valeurs de travail, d'intégrité et de service communautaire ont été inculquées dès le plus jeune âge. Son parcours de vie l'a forgé comme un homme du peuple, proche des réalités quotidiennes de ses concitoyens.",
  },
  {
    title: "Formation & Éducation",
    text: "Convaincu que l'éducation est la clé du développement, Markens a poursuivi des études supérieures avec rigueur et détermination. Sa formation lui a permis d'acquérir les compétences nécessaires pour comprendre les enjeux complexes du développement haïtien et proposer des solutions concrètes.",
  },
  {
    title: "Engagement Communautaire",
    text: "Depuis plus de dix ans, Markens Larose s'investit activement dans le développement de sa communauté. Il a initié et soutenu de nombreux projets locaux touchant à l'éducation, à la santé et à l'infrastructure, gagnant ainsi la confiance et le respect de ses concitoyens.",
  },
  {
    title: "Vision Politique",
    text: "Candidat Député avec une vision claire et un programme solide, Markens Larose aspire à représenter dignement son peuple au parlement. Il croit en une politique de proximité, transparente et orientée vers des résultats concrets pour améliorer les conditions de vie de chaque citoyen.",
  },
]

const STATS = [
  { value: '10+', label: "Ans d'engagement" },
  { value: '5K+', label: 'Familles soutenues' },
  { value: '20+', label: 'Projets réalisés' },
  { value: '3', label: 'Communes couvertes' },
]

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative my-8 w-full max-w-4xl mx-4 rounded-2xl bg-[#06090F] border border-[#1A4FBF]/30 overflow-hidden animate-modal">

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0D1321] border border-[#1A4FBF]/30 text-[#7B8AB8] hover:text-white hover:border-[#1A4FBF] transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        {/* HERO SECTION */}
        <div className="relative h-48 bg-gradient-to-r from-[#06090F] via-[#0D1321] to-[#1A4FBF]/20 flex items-end px-8 pb-6">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#1A4FBF]/10 blur-3xl" />
          <div>
            <span className="text-xs font-bold tracking-widest text-[#C9A84C] uppercase">
              Biographie
            </span>
            <h2 className="mt-1 text-3xl md:text-4xl font-serif font-bold text-white">
              Markens Larose
            </h2>
            <p className="text-[#7B8AB8] mt-1">Candidat Député  Marchand Dessalines</p>
          </div>
        </div>

        <div className="px-8 py-8">

          {/* INTRO + PHOTO */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">

            <div className="relative w-48 h-56 mx-auto md:mx-0 rounded-xl overflow-hidden border-2 border-[#1A4FBF]/40"
              style={{ boxShadow: '0 0 30px rgba(26,79,191,0.2)' }}>
              <Image
                src="/images/markens-larose.jpg"
                alt="Markens Larose"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="flex-1">
              <p className="text-[#CBD5E1] leading-8 text-base mb-6">
                Homme de conviction et de terrain, <strong className="text-white">Markens Larose</strong> incarne
                une nouvelle génération de leaders haïtiens engagés pour un changement réel et durable.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-[#0D1321] border border-[#1A4FBF]/20 p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-[#1A4FBF]">{stat.value}</p>
                    <p className="text-xs text-[#7B8AB8] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* BIOGRAPHY SECTIONS */}
          <div className="space-y-6">
            {BIOGRAPHY.map((section, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#0D1321] border border-[#1A4FBF]/10 p-6 hover:border-[#1A4FBF]/30 transition-colors"
              >
                <h3 className="font-serif font-bold text-white text-lg mb-3">
                  {section.title}
                </h3>
                <p className="text-[#CBD5E1] leading-7 text-sm md:text-base">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* VALEURS */}
          <div className="mt-8">
            <p className="text-xs font-bold tracking-widest text-[#C9A84C] uppercase mb-4">
              Valeurs Fondamentales
            </p>

            <div className="flex flex-wrap gap-3">
              {['Intégrité', 'Transparence', 'Service', 'Justice', 'Unité', 'Progrès', 'Patriotisme'].map((val) => (
                <span
                  key={val}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-[#1A4FBF]/10 border border-[#1A4FBF]/30 text-[#F0F4FF] hover:bg-[#1A4FBF]/20 transition-colors"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#programme"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-[#1A4FBF] text-white font-semibold text-center hover:bg-[#2563EB] transition-colors"
            >
              Voir Mon Programme
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-[#1A4FBF] text-[#F0F4FF] font-semibold text-center hover:bg-[#1A4FBF]/10 transition-colors"
            >
              Me Contacter
            </a>
          </div>

        </div>
      </div>
    </div>,
    document.body
  )
}