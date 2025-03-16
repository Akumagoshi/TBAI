/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Generate static files for Hostinger
  basePath: process.env.BASE_PATH || "",
  assetPrefix: process.env.URL || "",
  images: {
    unoptimized: true  // Required for static export with images
  },
  env: {
    // This tells the app we're running in static export mode
    NEXT_PUBLIC_STATIC_MODE: 'true'
  }
};

export default nextConfig;
