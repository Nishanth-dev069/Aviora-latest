/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://avioraacademy.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/api'] },
    ],
  },
  additionalPaths: async (config) => [
    { loc: '/',                              changefreq: 'weekly', priority: 1.0 },
    { loc: '/programs',                      changefreq: 'weekly', priority: 0.9 },
    { loc: '/programs/pilot-training',       changefreq: 'monthly', priority: 0.9 },
    { loc: '/programs/cabin-crew',           changefreq: 'monthly', priority: 0.9 },
    { loc: '/programs/global-training',      changefreq: 'monthly', priority: 0.9 },
    { loc: '/programs/type-rating',          changefreq: 'monthly', priority: 0.9 },
    { loc: '/admissions',                    changefreq: 'weekly', priority: 0.8 },
    { loc: '/about',                         changefreq: 'monthly', priority: 0.7 },
    { loc: '/contact',                       changefreq: 'monthly', priority: 0.8 },
    { loc: '/explore',                       changefreq: 'weekly', priority: 0.6 },
    { loc: '/gallery',                       changefreq: 'weekly', priority: 0.5 },
    { loc: '/blog',                          changefreq: 'weekly', priority: 0.6 },
    { loc: '/news',                          changefreq: 'daily', priority: 0.6 },
    { loc: '/facilities',                    changefreq: 'monthly', priority: 0.6 },
    { loc: '/mentors',                       changefreq: 'monthly', priority: 0.6 },
  ],
};
