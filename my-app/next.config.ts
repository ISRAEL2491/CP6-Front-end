import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: 'https://cloud.appwrite.io/v1',
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: '6717e4660038656dc9a3',
    NEXT_PUBLIC_APPWRITE_DATABASE_ID: '671934f600149818b5b9',
    NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID: '671935e9000988359273',
  },
  images: {
    domains: ['localhost', 'cloud.appwrite.io'],
  },
};

export default nextConfig;
