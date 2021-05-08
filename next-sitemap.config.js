module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.mycovidtime.in',
  generateRobotsTxt: true,
  exclude: ['/_admin*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_admin'],
      },
    ],
  },
  // TODO: We'll want to remove this once we're localizing content
  transform: async (config, path) => {
    console.log('generating files' + path);
    return {
      loc: path.replace('/en-IN', ''),
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
