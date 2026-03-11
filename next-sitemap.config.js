/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://aviora-academy.netlify.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/admin/*'],
}
