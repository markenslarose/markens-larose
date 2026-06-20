import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.markenslarose.com'

export default function sitemap(): MetadataRoute.Sitemap {
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
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/programme`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/realisations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/biographie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/galerie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}