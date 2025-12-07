import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler for better performance
  reactCompiler: true,

  // Image optimization - MUST be unoptimized for static export
  images: {
    unoptimized: true,
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
};

export default nextConfig;
