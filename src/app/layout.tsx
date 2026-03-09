import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'DiffractWD',
  description: 'DiffractWD - Free Open Source Software for Powder Diffraction Manipulation',
  keywords:
    'DiffractWD, Powder Diffraction Software, Powder Pattern Simulation, Powder Data Visualization, Free Software Download',
  authors: [{ name: 'Volodymyr D. Vreshch' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
        <footer className="border-t border-border bg-surface py-8">
          <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted">
            &copy; {new Date().getFullYear()} Volodymyr D. Vreshch. DiffractWD is free and open
            source under the BSD License.
          </div>
        </footer>
      </body>
    </html>
  );
}
