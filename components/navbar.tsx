'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AboutModal } from './ui/about/modal'

const LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Vision', href: '#vision' },
  { label: 'Programme', href: '#programme' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Biographie', href: '#biographie' },
  { label: 'Articles', href: '#articles' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#accueil')

  // ✅ FIX: modal state ajouté
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => {
  if (s) observer.observe(s)
})
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0D1321]/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#accueil" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/60 font-heading text-lg font-bold text-gold">
            ML
          </span>
          <span className="font-heading text-lg font-semibold tracking-wide text-foreground">
            Markens Larose
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <div key={link.href}>
              {link.label === 'Biographie' ? (
                <button
                  onClick={() => setIsAboutOpen(true)}
                  className={`relative font-display text-sm transition-colors hover:text-foreground ${
                    active === link.href ? 'text-foreground' : 'text-muted-text'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  className={`relative font-display text-sm transition-colors hover:text-foreground ${
                    active === link.href ? 'text-foreground' : 'text-muted-text'
                  }`}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-md bg-royal px-5 py-2.5 font-display text-sm text-white shadow-[0_0_20px_-4px_rgba(37,99,235,0.6)] transition-all hover:bg-royal-glow hover:shadow-[0_0_28px_-2px_rgba(37,99,235,0.85)] lg:inline-block"
        >
          Voter Markens
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-foreground lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border bg-[#0D1321]/98 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((link) => (
            <div key={link.href}>
              {link.label === 'Biographie' ? (
                <button
                  onClick={() => {
                    setIsAboutOpen(true)
                    setOpen(false)
                  }}
                  className={`relative font-display text-sm transition-colors hover:text-foreground ${
                    active === link.href ? 'text-foreground' : 'text-muted-text'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`relative font-display text-sm transition-colors hover:text-foreground ${
                    active === link.href ? 'text-foreground' : 'text-muted-text'
                  }`}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (NO DESIGN CHANGE) */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </header>
  )
}