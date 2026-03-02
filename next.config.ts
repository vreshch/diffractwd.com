import type { NextConfig } from 'next';
import { redirects as redirectList } from './src/lib/redirects';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  async redirects() {
    return redirectList;
  },
};

export default nextConfig;
