/**
 * Basic Next.js configuration enabling internationalized routing.
 * The app supports Norwegian (no) and English (en), defaulting to Norwegian.
 */
module.exports = {
  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'no',
  },
};