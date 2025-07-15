/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  optimizeFonts: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.devtool = false; 
    return config;
  },
};

module.exports = nextConfig;
