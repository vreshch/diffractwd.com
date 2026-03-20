import type { Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/card';
import { PageHeader } from '@/components/page-header';
import { SectionHeader } from '@/components/section-header';
import { capabilities, fileFormats, modules, steps } from '@/data/documentation';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Quick-start guide, supported file formats, and capabilities reference for DiffractWD powder diffraction software.',
  alternates: { canonical: '/documentation' },
};

export default function DocumentationPage() {
  return (
    <div>
      <PageHeader
        title="Documentation"
        description="Learn how to use DiffractWD for powder diffraction analysis."
      />

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        {/* Quick Start */}
        <section className="mb-20">
          <SectionHeader
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
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            }
            title="Quick Start"
          />
          <div className="space-y-6">
            {steps.map((step) => (
              <Card key={step.number} className="flex flex-col gap-6 md:flex-row">
                <div className="flex-shrink-0">
                  <Image
                    src={step.image}
                    alt={`Step ${step.number}: ${step.title}`}
                    width={320}
                    height={224}
                    className="rounded-lg border border-border dark:border-dark-border"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div className="mb-3">
                    <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary dark:text-accent-light">
                      Step {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-heading dark:text-dark-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted dark:text-dark-text-secondary">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* File Formats */}
        <section className="mb-20">
          <SectionHeader
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            }
            title="Supported File Formats"
          />
          <div className="overflow-hidden rounded-xl border border-border dark:border-dark-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary/5 dark:bg-dark-surface-alt">
                <tr>
                  <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary/70 dark:text-dark-text-secondary">
                    Category
                  </th>
                  <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary/70 dark:text-dark-text-secondary">
                    Formats
                  </th>
                </tr>
              </thead>
              <tbody>
                {fileFormats.map((row) => (
                  <tr key={row.category} className="border-t border-border dark:border-dark-border">
                    <td className="px-6 py-3.5 font-medium text-heading dark:text-dark-text">
                      {row.category}
                    </td>
                    <td className="px-6 py-3.5 text-muted dark:text-dark-text-secondary">
                      {row.formats}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-20">
          <SectionHeader
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
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            }
            title="Capabilities"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <Card key={cap.text} padding="tight" className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 text-primary dark:text-accent-light">
                  {cap.icon}
                </div>
                <span className="text-sm text-body dark:text-dark-text">{cap.text}</span>
              </Card>
            ))}
          </div>
        </section>

        {/* System & Technical */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <section>
            <SectionHeader
              size="md"
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
            <Card padding="compact">
              <ul className="space-y-3 text-sm text-body dark:text-dark-text">
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
          </section>

          <section>
            <SectionHeader
              size="md"
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
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              }
              title="Technical Details"
            />
            <Card padding="compact">
              <ul className="space-y-3 text-sm text-body dark:text-dark-text">
                <li className="flex items-center gap-2">
                  <span className="text-primary dark:text-accent-light">&#8226;</span>
                  Written in C# (object-oriented)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary dark:text-accent-light">&#8226;</span>
                  Built on SharpDevelop application core
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary dark:text-accent-light">&#8226;</span>
                  Extensible through add-in system
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary dark:text-accent-light">&#8226;</span>
                  MIT License
                </li>
              </ul>
            </Card>
          </section>
        </div>

        {/* Modules */}
        <section>
          <SectionHeader
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
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            }
            title="Included Modules"
          />
          <div className="overflow-hidden rounded-xl border border-border dark:border-dark-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary/5 dark:bg-dark-surface-alt">
                <tr>
                  <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary/70 dark:text-dark-text-secondary">
                    Module
                  </th>
                  <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary/70 dark:text-dark-text-secondary">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {modules.map((mod) => (
                  <tr key={mod.name} className="border-t border-border dark:border-dark-border">
                    <td className="px-6 py-3.5 font-mono text-xs text-heading dark:text-dark-text">
                      {mod.name}
                    </td>
                    <td className="px-6 py-3.5 text-muted dark:text-dark-text-secondary">
                      {mod.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
