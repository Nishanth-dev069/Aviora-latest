const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Gather all valid routes
const validStaticRoutes = new Set([
  '/',
  '/about',
  '/admissions',
  '/blog',
  '/contact',
  '/explore',
  '/facilities',
  '/gallery',
  '/mentors',
  '/news',
  '/privacy-policy',
  '/programs',
  '/programs/cabin-crew',
  '/programs/global-training',
  '/programs/pilot-training',
  '/programs/type-rating',
  '/terms-and-conditions',
]);

const blogFiles = fs.readdirSync(path.join(rootDir, 'content', 'blog')).filter(f => f.endsWith('.md'));
const newsFiles = fs.readdirSync(path.join(rootDir, 'content', 'news')).filter(f => f.endsWith('.md'));

const validBlogRoutes = new Set(blogFiles.map(f => `/blog/${f.replace('.md', '')}`));
const validNewsRoutes = new Set(newsFiles.map(f => `/news/${f.replace('.md', '')}`));

const allValidRoutes = new Set([...validStaticRoutes, ...validBlogRoutes, ...validNewsRoutes]);

console.log(`Total valid destination routes: ${allValidRoutes.size}`);
console.log(`- Static pages: ${validStaticRoutes.size}`);
console.log(`- Blog posts: ${validBlogRoutes.size}`);
console.log(`- News articles: ${validNewsRoutes.size}`);

// Helper to check links in text
function extractAndCheckLinks(filePath, text) {
  const errors = [];
  // Match markdown links [text](url) and href="url"
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const hrefRegex = /href=["']([^"']+)["']/g;

  let match;
  while ((match = mdLinkRegex.exec(text)) !== null) {
    const url = match[2].trim();
    checkUrl(url, filePath, errors);
  }

  while ((match = hrefRegex.exec(text)) !== null) {
    const url = match[1].trim();
    checkUrl(url, filePath, errors);
  }

  return errors;
}

function checkUrl(url, filePath, errors) {
  // Ignore external links, mailto, tel, anchors
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('#')) {
    // If it's avioraaviation.in, check the path
    if (url.includes('avioraaviation.in')) {
      try {
        const u = new URL(url);
        let pathname = u.pathname;
        if (pathname.length > 1 && pathname.endsWith('/')) {
          pathname = pathname.slice(0, -1);
        }
        if (!allValidRoutes.has(pathname)) {
          errors.push(`Invalid internal absolute link: ${url} (pathname: ${pathname})`);
        }
      } catch (e) {
        // ignore
      }
    }
    return;
  }

  // Internal relative/absolute paths
  let cleanPath = url.split('#')[0].split('?')[0];
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  if (!cleanPath) return; // anchor only

  if (!allValidRoutes.has(cleanPath)) {
    errors.push(`Broken internal link: "${url}" (clean: ${cleanPath}) in ${filePath}`);
  }
}

// 2. Scan all blog posts
console.log('\n--- Auditing Blog Posts ---');
let totalBlogErrors = 0;
for (const file of blogFiles) {
  const p = path.join(rootDir, 'content', 'blog', file);
  const content = fs.readFileSync(p, 'utf8');
  const errs = extractAndCheckLinks(`content/blog/${file}`, content);
  if (errs.length > 0) {
    console.error(`Errors in ${file}:`, errs);
    totalBlogErrors += errs.length;
  }
}
if (totalBlogErrors === 0) {
  console.log(`✓ All ${blogFiles.length} blog posts have 100% valid internal links!`);
}

// 3. Scan all news posts
console.log('\n--- Auditing News Posts ---');
let totalNewsErrors = 0;
for (const file of newsFiles) {
  const p = path.join(rootDir, 'content', 'news', file);
  const content = fs.readFileSync(p, 'utf8');
  const errs = extractAndCheckLinks(`content/news/${file}`, content);
  if (errs.length > 0) {
    console.error(`Errors in ${file}:`, errs);
    totalNewsErrors += errs.length;
  }
}
if (totalNewsErrors === 0) {
  console.log(`✓ All ${newsFiles.length} news articles have 100% valid internal links!`);
}

// 4. Scan key React components
console.log('\n--- Auditing React Components ---');
const componentsToCheck = [
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
  'src/components/Breadcrumbs.tsx',
  'src/app/programs/pilot-training/ClientPage.tsx',
  'src/app/programs/cabin-crew/ClientPage.tsx',
  'src/app/programs/type-rating/ClientPage.tsx',
  'src/app/programs/global-training/ClientPage.tsx',
  'src/app/facilities/ClientPage.tsx',
  'src/app/mentors/ClientPage.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-and-conditions/page.tsx',
  'src/app/explore/ClientPage.tsx'
];

let totalComponentErrors = 0;
for (const comp of componentsToCheck) {
  const p = path.join(rootDir, comp);
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const errs = extractAndCheckLinks(comp, content);
    if (errs.length > 0) {
      console.error(`Errors in ${comp}:`, errs);
      totalComponentErrors += errs.length;
    }
  }
}

if (totalComponentErrors === 0) {
  console.log(`✓ All key React components have 100% valid internal links!`);
}

console.log('\n=======================================');
console.log(`Audit Summary: ${totalBlogErrors + totalNewsErrors + totalComponentErrors} broken links found.`);
console.log('=======================================');
