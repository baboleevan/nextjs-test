/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/news/1'
      }
    ]
  },
  env: {
    TITLE: 'Hacker News',
  },
  reactStrictMode: true,
  // swcMinify: false,
  productionBrowserSourceMaps: false
}

module.exports = nextConfig
