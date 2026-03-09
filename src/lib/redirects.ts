export interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

export const redirects: Redirect[] = [
  { source: '/news.html', destination: '/support', permanent: true },
  { source: '/news', destination: '/support', permanent: true },
  { source: '/about.html', destination: '/documentation', permanent: true },
  { source: '/about', destination: '/documentation', permanent: true },
  { source: '/screenshots.html', destination: '/screenshots', permanent: true },
  { source: '/downloads.html', destination: '/downloads', permanent: true },
  { source: '/quick_manual.html', destination: '/documentation', permanent: true },
  { source: '/quick_manual', destination: '/documentation', permanent: true },
  { source: '/quick-manual.html', destination: '/documentation', permanent: true },
  { source: '/quick-manual', destination: '/documentation', permanent: true },
  { source: '/support.html', destination: '/support', permanent: true },
  { source: '/license.html', destination: '/support', permanent: true },
  { source: '/license', destination: '/support', permanent: true },
];
