require('dotenv').config();

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/news/1'
      }
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    TITLE: 'Hacker News'
  },
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  productionBrowserSourceMaps: false,
  output: 'export'
};

module.exports = nextConfig;
