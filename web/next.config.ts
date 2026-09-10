import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/DCK-Care",
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
