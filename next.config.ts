import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  async redirects() {
    return [
      {
        source: '/news.html',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/screenshots.html',
        destination: '/screenshots',
        permanent: true,
      },
      {
        source: '/downloads.html',
        destination: '/downloads',
        permanent: true,
      },
      {
        source: '/quick_manual.html',
        destination: '/quick-manual',
        permanent: true,
      },
      {
        source: '/quick_manual',
        destination: '/quick-manual',
        permanent: true,
      },
      {
        source: '/support.html',
        destination: '/support',
        permanent: true,
      },
      {
        source: '/license.html',
        destination: '/license',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
