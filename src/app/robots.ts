import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/dashboard/', '/api/', '/private/', '/login/', '/_next/', '/.env', '/wp-admin/'],
    },
    sitemap: 'https://avioraaviation.in/sitemap.xml',
  };
}
