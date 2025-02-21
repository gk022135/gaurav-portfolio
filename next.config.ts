import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com','images.app.goo.gl','images.unsplash.com'], // Add the external image domain here
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚫 Ignores ESLint errors during build
  },
};



export default nextConfig;
