/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
    images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;