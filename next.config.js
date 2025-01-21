/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['template-03-api.vercel.app'], // Ensure this domain is added
  },
};

module.exports = nextConfig;
