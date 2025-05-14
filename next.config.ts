import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'images.app.goo.gl', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;
