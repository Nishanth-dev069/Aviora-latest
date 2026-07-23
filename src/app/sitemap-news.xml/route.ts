import client from '../../../tina/__generated__/client';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  try {
    // Fetch News Posts
    const newsRes = await client.queries.newsConnection();
    const newsPosts = (newsRes.data.newsConnection.edges?.map((e: any) => e?.node).filter(Boolean) as any[]) || [];

    for (const post of newsPosts) {
      if (!post || !post._sys || !post._sys.filename) continue;
      
      const date = post.date ? new Date(post.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
      
      sitemap += `
  <url>
    <loc>https://avioraaviation.in/news/${post._sys.filename}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }
  } catch (error: any) {
    console.error('Error generating dynamic news sitemap:', error);
  }

  sitemap += `\n</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'application/xml',
    },
  });
}
