import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const contentDir = path.join(process.cwd(), 'content', 'news');
  let posts: Array<{ slug: string; date: string }> = [];

  try {
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.md'));

      posts = files.map((file) => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(contentDir, file);
        let dateStr = new Date().toISOString().split('T')[0];

        try {
          const fileContent = fs.readFileSync(fullPath, 'utf8');
          const dateMatch = fileContent.match(/date:\s*["']?([^"'\n\r]+)["']?/);
          if (dateMatch && dateMatch[1]) {
            const parsed = new Date(dateMatch[1]);
            if (!isNaN(parsed.getTime())) {
              dateStr = parsed.toISOString().split('T')[0];
            }
          } else {
            const stats = fs.statSync(fullPath);
            dateStr = stats.mtime.toISOString().split('T')[0];
          }
        } catch {
          // fallback to current date
        }

        return { slug, date: dateStr };
      });
    }
  } catch (error) {
    console.error('Error generating dynamic news sitemap:', error);
  }

  // Sort by date descending
  posts.sort((a, b) => (b.date > a.date ? 1 : -1));

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const post of posts) {
    sitemap += `
  <url>
    <loc>https://avioraaviation.in/news/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  sitemap += `\n</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
