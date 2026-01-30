/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove webpack alias if exists
  webpack: (config) => {
    // Remove any alias configuration
    delete config.resolve.alias['@'];
    return config;
  }
}

module.exports = nextConfig