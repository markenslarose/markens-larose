'use client'
import { Globe, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { AboutModal } from './ui/about/modal'

const NAV = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Biographie', href: '#Biographie' },
  { label: 'Programme', href: '#programme' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/markenslarose',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/markenslarose',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://www.x.com/markenslarose',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function Footer() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-2xl font-bold text-foreground">
              MARKENS <span className="text-royal-glow">LAROSE</span>
            </p>
            <p className="mt-3 max-w-xs leading-relaxed text-muted-text">
              Un rêve, Une vision. Ansanm, n ap bati yon Ayiti pi djanm.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-text transition-colors hover:border-royal hover:text-royal-glow"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm tracking-widest text-gold">NAVIGATION</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV.map((n) => (
  <li key={n.label}>
    {n.label === 'Biographie' ? (
      <button
        type="button"
        onClick={() => setIsAboutOpen(true)}
        className="text-muted-text transition-colors hover:text-foreground"
      >
        {n.label}
      </button>
    ) : (
      <a
        href={n.href}
        className="text-muted-text transition-colors hover:text-foreground"
      >
        {n.label}
      </a>
    )}
  </li>
))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm tracking-widest text-gold">CONTACT</p>
            <ul className="mt-4 space-y-2 text-muted-text">
              <li>Haiti</li>
              <li>+509 3824 5331</li>
              <li>Markenslarose64@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-text sm:flex-row">
          <p>© {new Date().getFullYear()} Markens Larose. Tous droits réservés.</p>
          <p>Site web développé par Samson Janvier.</p>
        </div>
      </div>
      <AboutModal
  isOpen={isAboutOpen}
  onClose={() => setIsAboutOpen(false)}
/>
    </footer>
  )
}
