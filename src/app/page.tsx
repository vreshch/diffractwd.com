import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/card';
import { IconContainer } from '@/components/icon-container';
import { features, jsonLd, stats } from '@/data/home';

export const metadata: Metadata = {
  title: 'DiffractWD - Free Powder Diffraction Software',
  alternates: { canonical: '/' },
};

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/downloads/diffractwd.exe"
        className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-md transition-all hover:bg-white/90 hover:shadow-lg"
      >
        <DownloadIcon />
        Download DiffractWD
      </Link>
      <Link
        href="/documentation"
        className="cursor-pointer inline-block rounded-lg border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary"
      >
        Read Documentation
      </Link>
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Link
        href="/downloads/diffractwd.exe"
        className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-light hover:shadow-lg dark:bg-accent dark:text-white dark:hover:bg-accent-light dark:hover:text-dark-bg"
      >
        <DownloadIcon />
        Download DiffractWD
      </Link>
      <Link
        href="/documentation"
        className="cursor-pointer inline-block rounded-lg border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-white"
      >
        Read Documentation
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Free &amp; Open Source
              </div>
              <h1 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                DiffractWD
              </h1>
              <p className="mb-4 text-lg font-medium text-white/90 md:text-xl">
                Powder diffraction analysis made simple.
              </p>
              <p className="mb-10 max-w-lg text-base leading-relaxed text-white/70">
                Compare measured patterns, simulate from crystal data, and prepare publication-ready
                figures — no crystallographic background required.
              </p>
              <HeroButtons />
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-white/5 backdrop-blur-sm" />
                <Image
                  src="/hero.jpg"
                  alt="DiffractWD application window showing powder pattern simulation"
                  width={480}
                  height={343}
                  className="relative rounded-lg shadow-2xl ring-1 ring-white/10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-white dark:border-dark-border dark:bg-dark-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border dark:divide-dark-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center">
              <div className="text-2xl font-bold text-heading dark:text-accent-light">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium tracking-wide text-muted dark:text-dark-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 dark:bg-dark-bg md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-heading dark:text-dark-text">
              Everything you need
            </h2>
            <p className="text-base text-muted dark:text-dark-text-secondary">
              A complete toolkit for powder diffraction pattern analysis, simulation, and
              visualization.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} hover="lift" className="group">
                <IconContainer size="md" className="mb-4">
                  {feature.icon}
                </IconContainer>
                <h3 className="mb-2 text-base font-semibold text-heading dark:text-dark-text">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted dark:text-dark-text-secondary">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="border-y border-border bg-surface py-16 dark:border-dark-border dark:bg-dark-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted dark:text-dark-text-secondary">
            Published Reference
          </p>
          <p className="text-base leading-relaxed text-heading dark:text-dark-text">
            V.D. Vreshch, <em>J. Appl. Cryst.</em>, <strong>44</strong>, 219–220 (2011)
          </p>
          <a
            href="https://doi.org/10.1107/S0021889810044614"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline dark:text-accent-light"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            DOI: 10.1107/S0021889810044614
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 dark:bg-dark-bg">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-heading dark:text-dark-text">
            Ready to get started?
          </h2>
          <p className="mb-8 text-muted dark:text-dark-text-secondary">
            Windows XP, Vista, or Windows 7. Requires .NET Framework 2.0.
          </p>
          <CtaButtons />
        </div>
      </section>
    </div>
  );
}
