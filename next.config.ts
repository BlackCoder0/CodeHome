import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'docs',
  // basePath: '/CodeHome',
  // assetPrefix: '/CodeHome/',
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
