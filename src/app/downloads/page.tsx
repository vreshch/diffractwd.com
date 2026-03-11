import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Downloads',
};

const downloads = [
  {
    title: 'Installation Program',
    description: 'Recommended. Includes installer with all dependencies.',
    href: '/downloads/diffractwd.exe',
    type: 'EXE',
    recommended: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    title: 'Compressed Binaries',
    description: 'Portable version. Extract and run without installation.',
    href: '/downloads/diffractwd_bin.zip',
    type: 'ZIP',
    recommended: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M21 8v13H3V8" />
        <path d="M1 3h22v5H1z" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  {
    title: 'Source Code',
    description: 'Full C# source code. Build with Visual Studio or SharpDevelop.',
    href: '/downloads/diffractwd_src.zip',
    type: 'ZIP',
    recommended: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function DownloadsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Latest stable release
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Downloads</h1>
          <p className="text-base text-white/70">
            DiffractWD v1.30 — choose the package that works best for you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">

      <div className="mb-16 grid gap-5 sm:grid-cols-3">
        {downloads.map((dl) => (
          <a
            key={dl.title}
            href={dl.href}
            className="group relative rounded-xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg dark:border-dark-border dark:bg-dark-surface dark:hover:border-accent-light/30"
          >
            {dl.recommended && (
              <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white dark:bg-accent">
                Recommended
              </span>
            )}
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light/15 text-accent-light dark:bg-accent/10 dark:text-accent-light">
              {dl.icon}
            </div>
            <div className="mb-3 inline-block rounded-md bg-surface-alt px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted dark:bg-dark-surface-alt dark:text-dark-text-secondary">
              {dl.type}
            </div>
            <h3 className="mb-1.5 text-base font-semibold text-heading transition-colors group-hover:text-primary dark:text-dark-text dark:group-hover:text-accent-light">
              {dl.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted dark:text-dark-text-secondary">
              {dl.description}
            </p>
          </a>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light/15 text-accent-light dark:bg-accent/10 dark:text-accent-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-heading dark:text-dark-text">
              System Requirements
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm text-body dark:text-dark-text">
            <li className="flex items-center gap-2">
              <span className="text-accent-light dark:text-accent-light">&#8226;</span>
              Windows XP, Vista, or Windows 7
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent-light dark:text-accent-light">&#8226;</span>
              Microsoft .NET Framework 2.0
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light/15 text-accent-light dark:bg-accent/10 dark:text-accent-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-heading dark:text-dark-text">License</h2>
          </div>
          <p className="text-sm leading-relaxed text-body dark:text-dark-text">
            DiffractWD is free and open source, licensed under the MIT License. See the full
            license text on the{' '}
            <Link
              href="/support"
              className="font-medium text-accent hover:underline dark:text-accent-light"
            >
              Support
            </Link>{' '}
            page.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
