import type { NextConfig } from 'next';
import { redirects as redirectList } from './src/lib/redirects';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // all public/ images are pre-optimized; sharp on 0.5 CPU blew the latency SLA
  images: { unoptimized: true, minimumCacheTTL: 604800 },

  async redirects() {
    return redirectList;
  },
};

export default nextConfig;
