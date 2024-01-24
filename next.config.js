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
  reactStrictMode: true,
  // swcMinify: false,
  productionBrowserSourceMaps: false,
  experimental: {
  }
}

module.exports = nextConfig
