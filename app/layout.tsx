import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const bebas = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.markenslarose.com'),

  title: {
    default:
      'Markens Larose — Candidat Député | La Voix du Peuple Haïtien',
    template: '%s | Markens Larose — Candidat Député',
  },

  description:
    "Markens Larose, Candidat Député en Haïti. Découvrez son programme pour l'éducation, l'emploi, la sécurité et le développement de notre circonscription.",

  keywords: [
    'Markens Larose',
    'Candidat Député Haïti',
    'élections Haïti',
    'programme politique Haïti',
    'député Haïti 2025',
    'vote Haïti',
    'politique haïtienne',
    'markenslarose.com',
  ],

  authors: [{ name: 'Markens Larose' }],

  creator: 'Markens Larose',

  alternates: {
    canonical: 'https://www.markenslarose.com',
  },

  openGraph: {
    type: 'website',
    locale: 'fr_HT',
    url: 'https://www.markenslarose.com',
    siteName: 'Markens Larose — Candidat Député',
    title: 'Markens Larose — Candidat Député | La Voix du Peuple Haïtien',
    description:
      "Markens Larose, Candidat Député en Haïti. Découvrez son programme pour l'éducation, l'emploi, la sécurité et le développement de notre circonscription.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Markens Larose — Candidat Député Haïti',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Markens Larose — Candidat Député | La Voix du Peuple Haïtien',
    description:
      "Markens Larose, Candidat Député en Haïti. Découvrez son programme pour l'éducation, l'emploi, la sécurité et le développement.",
    creator: '@markenslarose',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  category: 'Politics',

  generator: 'Next.js',
}

export const viewport = {
  themeColor: '#06090F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} ${bebas.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}