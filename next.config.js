/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Kept your existing local setting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig