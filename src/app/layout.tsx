import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import './globals.css';

const siteUrl = 'https://diffractwd.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DiffractWD - Free Powder Diffraction Software',
    template: '%s | DiffractWD',
  },
  description:
    'Free open-source software for powder diffraction pattern manipulation, simulation, and visualization. Supports 14+ file formats including RAW, CIF, and XY.',
  keywords:
    'DiffractWD, powder diffraction software, powder pattern simulation, X-ray diffraction, crystallography, powder data visualization, free science software',
  authors: [{ name: 'Volodymyr D. Vreshch' }],
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'DiffractWD',
    title: 'DiffractWD - Free Powder Diffraction Software',
    description:
      'Free open-source software for powder diffraction pattern manipulation, simulation, and visualization.',
    url: siteUrl,
    images: [
      { url: '/hero.jpg', width: 1200, height: 630, alt: 'DiffractWD application screenshot' },
    ],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (theme === 'dark' || !theme) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[#f0f4f8] dark:bg-dark-bg">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-primary/20 bg-primary py-8 dark:border-dark-border dark:bg-dark-surface">
          <div className="mx-auto max-w-6xl px-6 text-sm text-white/70 dark:text-dark-text-secondary">
            &copy; {new Date().getFullYear()} Volodymyr D. Vreshch. DiffractWD is free and open
            source under the MIT License.
          </div>
        </footer>
      </body>
    </html>
  );
}
