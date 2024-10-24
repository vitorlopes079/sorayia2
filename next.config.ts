import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos", "source.unsplash.com"], // Add the domains you want to allow
  },
};

export default nextConfig;
