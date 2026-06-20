import type { MetadataRoute } from 'next'
import { ARTICLES } from '@/lib/articles'

const SITE_URL = 'https://www.markenslarose.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const articleRoutes = ARTICLES.map((a) => ({
    url: `${SITE_URL}/articles/${a.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    {
      url: `${SITE_URL}/vision`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/programme`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/realisations`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/biographie`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/galerie`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },

    ...articleRoutes,
  ]
}