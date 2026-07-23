export const revalidate = 3600;

export async function GET() {
  const pages = [
    { url: 'https://avioraaviation.in/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/programs', priority: '0.9', changefreq: 'weekly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/programs/pilot-training', priority: '0.9', changefreq: 'monthly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/programs/cabin-crew', priority: '0.9', changefreq: 'monthly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/programs/global-training', priority: '0.9', changefreq: 'monthly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/programs/type-rating', priority: '0.9', changefreq: 'monthly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/admissions', priority: '0.8', changefreq: 'weekly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/about', priority: '0.7', changefreq: 'monthly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/contact', priority: '0.8', changefreq: 'monthly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/explore', priority: '0.6', changefreq: 'weekly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/gallery', priority: '0.5', changefreq: 'weekly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/blog', priority: '0.6', changefreq: 'weekly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/news', priority: '0.6', changefreq: 'daily', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/facilities', priority: '0.6', changefreq: 'monthly', lastmod: '2026-07-01' },
    { url: 'https://avioraaviation.in/mentors', priority: '0.6', changefreq: 'monthly', lastmod: '2026-07-01' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'application/xml',
    },
  });
}
