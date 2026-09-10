import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/DCK-Care",
  images: {
    unoptimized: true, // Required for static export — Next.js image optimization needs a server
  },
};

export default nextConfig;
