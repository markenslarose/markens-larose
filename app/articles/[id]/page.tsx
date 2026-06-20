import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ARTICLES, type ArticleBlock } from '@/lib/articles'

const SITE_URL = 'https://www.markenslarose.com'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ id: String(a.id) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const article = ARTICLES.find((a) => a.id === Number(id))
  if (!article) return { title: 'Article introuvable' }

  const url = `${SITE_URL}/articles/${id}`
  const imageUrl = article.imageUrl || '/og-image.png'

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [
      article.category,
      'Markens Larose',
      'Haïti',
      'politique haïtienne',
      article.title,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: ['Markens Larose'],
      images: [{ url: imageUrl, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
    },
  }
}

function Block({ block, articleTitle }: { block: ArticleBlock; articleTitle: string }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-lg leading-relaxed text-foreground/90">
          {block.text}
        </p>
      )
    case 'subtitle':
      return (
        <h2 className="border-l-4 border-gold pl-4 font-heading text-3xl font-bold text-foreground">
          {block.text}
        </h2>
      )
    case 'quote':
      return (
        <blockquote className="border-l-4 border-royal bg-card/60 py-4 pl-6 pr-4 text-xl italic leading-relaxed text-foreground">
          {block.text}
        </blockquote>
      )
    case 'image':
      return (
        <figure className="space-y-3">
          <Image
            src={block.src || '/placeholder.svg'}
            alt={block.caption || `Illustration — ${articleTitle} | Markens Larose`}
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, 800px"
            className="max-h-96 w-full rounded-xl object-cover"
          />
          {block.caption && (
            <figcaption className="text-center text-sm text-muted-text">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    default:
      return null
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = ARTICLES.find((a) => a.id === Number(id))

  if (!article) notFound()

  const related = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3)

  const newsSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: `${SITE_URL}${article.imageUrl}`,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: 'Markens Larose',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Markens Larose — Candidat Député',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/articles/${article.id}`,
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }}
      />
      {/* Fixed navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            href="/#articles"
            className="inline-flex items-center gap-2 font-display text-sm text-foreground transition-colors hover:text-royal-glow"
          >
            <ArrowLeft size={16} /> Retour
          </Link>
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight text-foreground"
          >
            Markens <span className="text-royal-glow">Larose</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={article.imageUrl || '/placeholder.svg'}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-3xl px-5 pb-12 lg:px-8">
            <span className="inline-block rounded-full bg-royal px-4 py-1 font-display text-xs text-white">
              {article.category}
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-balance text-foreground lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-sm text-muted-text">{article.date}</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="article-fade mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <div className="flex flex-col gap-8">
          {article.content.map((block, i) => (
            <Block key={i} block={block} articleTitle={article.title} />
          ))}
        </div>

        {/* Author card */}
        <div className="mt-16 flex items-center gap-4 rounded-xl border border-border bg-card p-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-royal font-heading text-lg font-bold text-white">
            ML
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              Markens Larose
            </p>
            <p className="text-sm text-muted-text">Candidat Député</p>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            À lire également
          </h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <Link key={a.id} href={`/articles/${a.id}`} className="block">
                <article className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_-14px_rgba(37,99,235,0.55)]">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={a.imageUrl || '/placeholder.svg'}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-royal px-3 py-1 font-display text-xs text-white">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold leading-snug text-foreground">
                      {a.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-text">
                      {a.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-muted-text">{a.date}</span>
                      <span className="inline-flex items-center gap-1 font-display text-sm text-royal-glow transition-transform group-hover:translate-x-1">
                        Lire la suite <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
