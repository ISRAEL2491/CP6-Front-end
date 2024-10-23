import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
