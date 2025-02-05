// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all domains
      },
    ],
  },
};

module.exports = nextConfig;