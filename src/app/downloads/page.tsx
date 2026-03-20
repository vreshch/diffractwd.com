import type { Metadata } from 'next';
import Link from 'next/link';

import { Card, cardVariants } from '@/components/card';
import { IconContainer } from '@/components/icon-container';
import { PageHeader } from '@/components/page-header';
import { SectionHeader } from '@/components/section-header';
import { cn } from '@/lib/cn';
import { downloads } from '@/data/downloads';

export const metadata: Metadata = {
  title: 'Downloads',
  description:
    'Download DiffractWD installer, portable ZIP, or source code. Free powder diffraction software for Windows.',
  alternates: { canonical: '/downloads' },
};

export default function DownloadsPage() {
  return (
    <div>
      <PageHeader
        title="Downloads"
        description="DiffractWD v1.30 — choose the package that works best for you."
      />

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="mb-16 grid gap-5 sm:grid-cols-3">
          {downloads.map((dl) => (
            <a
              key={dl.title}
              href={dl.href}
              className={cn(cardVariants({ hover: 'border' }), 'group relative')}
            >
              {dl.recommended && (
                <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white dark:bg-accent">
                  Recommended
                </span>
              )}
              <IconContainer size="lg" className="mb-4 rounded-xl">
                {dl.icon}
              </IconContainer>
              <div className="mb-3 inline-block rounded-md bg-primary/6 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary/60 dark:bg-dark-surface-alt dark:text-dark-text-secondary">
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
          <Card>
            <SectionHeader
              size="sm"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              }
              title="System Requirements"
            />
            <ul className="space-y-2.5 text-sm text-body dark:text-dark-text">
              <li className="flex items-center gap-2">
                <span className="text-primary dark:text-accent-light">&#8226;</span>
                Windows XP, Vista, or Windows 7
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary dark:text-accent-light">&#8226;</span>
                Microsoft .NET Framework 2.0
              </li>
            </ul>
          </Card>
          <Card>
            <SectionHeader
              size="sm"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
              title="License"
            />
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
          </Card>
        </div>
      </div>
    </div>
  );
}
