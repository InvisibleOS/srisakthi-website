import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock imagery is served from Unsplash for this mock/demo build.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
