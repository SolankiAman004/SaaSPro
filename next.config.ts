/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add your image domains here
    formats: ['image/webp'],
  },
}

module.exports = nextConfig