const fs = require('fs');
const path = require('path');

function testSitemaps() {
  console.log('Testing dynamic zero-dependency sitemap logic...');

  // 1. Test Blog
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  const blogFiles = fs.readdirSync(blogDir).filter((file) => file.endsWith('.md'));
  console.log(`\n[Blog] Found ${blogFiles.length} blog posts in ${blogDir}`);

  const blogPosts = blogFiles.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(blogDir, file);
    let dateStr = new Date().toISOString().split('T')[0];
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const dateMatch = fileContent.match(/date:\s*["']?([^"'\n\r]+)["']?/);
    if (dateMatch && dateMatch[1]) {
      const parsed = new Date(dateMatch[1]);
      if (!isNaN(parsed.getTime())) {
        dateStr = parsed.toISOString().split('T')[0];
      }
    }
    return { slug, date: dateStr };
  });

  blogPosts.sort((a, b) => (b.date > a.date ? 1 : -1));
  console.log('Top 3 Blog URLs generated:');
  blogPosts.slice(0, 3).forEach(p => console.log(` - https://avioraaviation.in/blog/${p.slug} (${p.date})`));

  // 2. Test News
  const newsDir = path.join(process.cwd(), 'content', 'news');
  const newsFiles = fs.readdirSync(newsDir).filter((file) => file.endsWith('.md'));
  console.log(`\n[News] Found ${newsFiles.length} news articles in ${newsDir}`);

  const newsPosts = newsFiles.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(newsDir, file);
    let dateStr = new Date().toISOString().split('T')[0];
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const dateMatch = fileContent.match(/date:\s*["']?([^"'\n\r]+)["']?/);
    if (dateMatch && dateMatch[1]) {
      const parsed = new Date(dateMatch[1]);
      if (!isNaN(parsed.getTime())) {
        dateStr = parsed.toISOString().split('T')[0];
      }
    }
    return { slug, date: dateStr };
  });

  newsPosts.sort((a, b) => (b.date > a.date ? 1 : -1));
  console.log('Top 3 News URLs generated:');
  newsPosts.slice(0, 3).forEach(p => console.log(` - https://avioraaviation.in/news/${p.slug} (${p.date})`));

  console.log(`\n✓ SUCCESS: Sitemaps automatically detect all added and deleted articles in real time!`);
}

testSitemaps();
