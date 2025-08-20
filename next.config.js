/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar', 'fr', 'es', 'tr', 'zh', 'ja', 'ko', 'ber', 'ary'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};


module.exports = nextConfig;
