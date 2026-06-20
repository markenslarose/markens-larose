import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Programme } from '@/components/programme'
import { Realisations } from '@/components/realisations'
import { Articles } from '@/components/articles'
import { Galerie } from '@/components/galerie'
import { Temoignages } from '@/components/temoignages'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Markens Larose',
    url: 'https://www.markenslarose.com',
    image: 'https://www.markenslarose.com/markens-hero.png',
    jobTitle: 'Candidat Député',
    description:
      "Markens Larose est candidat député en Haïti, engagé pour l'éducation, l'emploi, la sécurité et le développement de sa circonscription.",
    sameAs: [
      'https://www.facebook.com/markenslarose',
      'https://www.instagram.com/markenslarose',
      'https://twitter.com/markenslarose',
    ],
    nationality: 'Haitian',
    knowsLanguage: ['fr', 'ht'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Programme />
        <Realisations />
        <Articles />
        <Galerie />
        <Temoignages />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
