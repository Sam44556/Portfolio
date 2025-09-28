/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  images: {
    unoptimized: isDev,
  },
};

export default nextConfig;
