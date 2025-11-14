/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  optimizeFonts: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.devtool = false; 
    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/login',
  //       permanent: false, 
  //     },
  //   ]
  // },
};

module.exports = nextConfig;
