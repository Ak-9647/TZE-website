import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler for better performance
  reactCompiler: true,

  // Image optimization for production
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Compression
  compress: true,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Strict mode for better React practices
  reactStrictMode: true,

  // Output configuration for static hosting
  output: "export",

  // Trailing slashes for static hosting compatibility
  trailingSlash: true,

  // Skip image optimization for static export
  // (needed for static hosting without image optimization server)
  // Uncomment below if deploying to static hosting:
  // images: { unoptimized: true },
};

export default nextConfig;
