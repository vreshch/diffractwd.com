import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://diffractwd.com';

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/downloads`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/documentation`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/screenshots`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/support`, lastModified: new Date(), priority: 0.5 },
  ];
}
