import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DiffractWD - Free Powder Diffraction Software',
};

const features = [
  {
    title: 'Multiple Format Support',
    description:
      'Import powder patterns from 14 file formats including RAW, RD, CPI, UXD, XY, and more. Load crystal structures from CIF and ShelX files.',
  },
  {
    title: 'Pattern Simulation',
    description:
      'Simulate powder patterns from single crystal data. Compare experimental and calculated patterns side by side.',
  },
  {
    title: 'Data Processing',
    description:
      'Background subtraction, smoothing, and scaling. Customize 2-theta range, FWHM, and curve colors.',
  },
  {
    title: 'Publication Ready',
    description:
      'Export graphs as WMF images. Customize grids, axis labels, and graph colors for publication-quality figures.',
  },
  {
    title: 'Open Source',
    description:
      'Written in C# with an extensible add-in system. Licensed under the BSD License. Free to use and modify.',
  },
  {
    title: 'Auto Updates',
    description:
      'Built-in auto-update and error reporting modules keep you on the latest stable version.',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                DiffractWD
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-white/80">
                A free, open-source tool for manipulating powder diffraction patterns. Simple
                interface, no crystallographic background required. Compare measured patterns and
                prepare publication-ready figures in just a few clicks.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/downloads/diffractwd.exe"
                  className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  Download v1.30
                </a>
                <Link
                  href="/screenshots"
                  className="inline-block rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Screenshots
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/prnsrc.png"
                alt="DiffractWD application window"
                width={400}
                height={280}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-heading">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-heading">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-3 text-xl font-bold text-heading">Ready to get started?</h2>
          <p className="mb-6 text-muted">
            Windows XP, Vista, or Windows 7. Requires .NET Framework 2.0.
          </p>
          <a
            href="/downloads/diffractwd.exe"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Download DiffractWD
          </a>
        </div>
      </section>
    </div>
  );
}
