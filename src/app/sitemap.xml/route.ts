export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://avioraaviation.in/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://avioraaviation.in/sitemap-blog.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://avioraaviation.in/sitemap-news.xml</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(sitemapIndex, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
