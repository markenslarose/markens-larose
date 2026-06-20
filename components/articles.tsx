'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useReveal } from './use-reveal'
import { ARTICLES, type Article } from '@/lib/articles'

function ArticleCard({
  article,
  index,
}: {
  article: Article
  index: number
}) {
  const item = useReveal()
  return (
    <Link href={`/articles/${article.id}`} className="block">
      <article
        ref={item.ref}
        className={`reveal group h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_-14px_rgba(37,99,235,0.55)] ${
          item.visible ? 'is-visible' : ''
        }`}
        style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.imageUrl || '/placeholder.svg'}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-royal px-3 py-1 font-display text-xs text-white">
            {article.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-heading text-xl font-semibold leading-snug text-foreground">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-text">
            {article.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs text-muted-text">{article.date}</span>
            <span className="inline-flex items-center gap-1 font-display text-sm text-royal-glow transition-transform group-hover:translate-x-1">
              Lire la suite <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export function Articles() {
  const head = useReveal()
  return (
    <section id="articles" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={head.ref}
          className={`reveal text-center ${head.visible ? 'is-visible' : ''}`}
        >
          <p className="font-display text-sm text-gold">RESTEZ INFORMÉS</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            Actualités &amp; Articles
          </h2>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#articles"
            className="inline-block rounded-md border border-royal px-7 py-3 font-display text-base text-foreground transition-all hover:bg-royal/15">
            Voir tous les articles
          </a>
        </div>
      </div>
    </section>
  )
}
