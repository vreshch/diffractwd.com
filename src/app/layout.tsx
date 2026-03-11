import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { SITE_URL } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DiffractWD - Free Powder Diffraction Software',
    template: '%s | DiffractWD',
  },
  description:
    'Free open-source software for powder diffraction pattern analysis, simulation from crystal data, and publication-ready visualization.',
  keywords:
    'DiffractWD, powder diffraction, XRD software, powder pattern simulation, crystallography, CIF viewer, free science software',
  authors: [{ name: 'Volodymyr D. Vreshch' }],
  openGraph: {
    type: 'website',
    siteName: 'DiffractWD',
    title: 'DiffractWD - Free Powder Diffraction Software',
    description:
      'Free open-source software for powder diffraction pattern analysis, simulation from crystal data, and publication-ready visualization.',
    url: SITE_URL,
    images: [{ url: '/logo.png', alt: 'DiffractWD' }],
  },
  twitter: {
    card: 'summary',
    title: 'DiffractWD - Free Powder Diffraction Software',
    description:
      'Free open-source software for powder diffraction pattern analysis, simulation, and visualization.',
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
