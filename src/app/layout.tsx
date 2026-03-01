import type { Metadata } from 'next';
import { Sidebar } from '@/components/sidebar';
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
      <body>
        <div className="app">
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative mt-5 min-h-[120px] bg-gradient-to-b from-primary to-primary-light">
              <div className="h-[120px] w-full bg-[url('/logo.png')] bg-right bg-no-repeat" />
              <h2 className="absolute left-8 top-8 text-xl text-white">Diffract WD</h2>
              <h3 className="absolute left-8 top-[70px] text-base font-bold text-subtitle">
                :: by Vreshch ::
              </h3>
            </div>
            <div className="mt-5 flex flex-col md:flex-row">
              <div className="w-full md:w-1/4">
                <Sidebar />
              </div>
              <div className="relative min-h-[400px] w-full md:w-3/4">{children}</div>
            </div>
            <footer className="mb-6">
              <hr className="my-4 border-t border-black/10" />
              &copy; Vreshch V.D. {new Date().getFullYear()}
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
