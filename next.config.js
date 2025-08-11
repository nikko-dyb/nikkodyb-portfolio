/**
 * Basic Next.js configuration enabling internationalized routing.
 * The app supports Norwegian (no) and English (en), defaulting to Norwegian.
 */
module.exports = {
  // Generate a fully static export at build time.  This allows the site to
  // be deployed to GitHub Pages without a Node.js server. When set to
  // 'export', `next build` will create an `out/` directory containing
  // pre-rendered HTML and assets.
  output: 'export',
  // Append a trailing slash to each route when exporting. This makes
  // relative asset paths work correctly on GitHub Pages.
  trailingSlash: true,
};