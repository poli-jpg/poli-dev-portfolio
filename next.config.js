/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote domains here if you later load project screenshots from a CMS or storage bucket.
    remotePatterns: [],
  },
};

module.exports = nextConfig;
