import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'DiffractWD - Documentation',
};

const steps = [
  {
    number: 1,
    title: 'Import your files',
    description:
      'Import powder patterns and crystal structures. Supported formats: *.raw, *.rd, *.ard, *.cpi, *.dat, *.dbw, *.gsas, *.mdi, *.rig, *.udf, *.uxd, *.xda, *.xdd, *.xy, ShelX (*.ins, *.res), CIF (*.cif).',
    image: '/manual/help1.jpg',
  },
  {
    number: 2,
    title: 'Adjust visibility',
    description:
      'Change visibility of patterns and perform all necessary comparisons between experimental and simulated data.',
    image: '/manual/help2.jpg',
  },
  {
    number: 3,
    title: 'Customize properties',
    description:
      'Fine-tune 2-theta range, FWHM of profiles, and curve colors. Adjust grids, axis labels, and work area properties.',
    image: '/manual/help3.jpg',
  },
  {
    number: 4,
    title: 'Export your results',
    description:
      'Copy the image to clipboard or export to WMF format for publication-quality figures.',
    image: '/manual/help4.jpg',
  },
];

const fileFormats = [
  {
    category: 'Powder Patterns',
    formats: 'RAW, RD, ARD, CPI, DAT, DBW, GSAS, MDI, RIG, UDF, UXD, XDA, XDD, XY',
  },
  { category: 'Crystal Structures', formats: 'ShelX (INS, RES), CIF' },
];

const capabilities = [
  {
    text: 'Multiple powder pattern and molecule import',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    text: 'Powder pattern simulation from single crystal data',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    text: 'Background subtraction, smoothing, and scaling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    text: 'Customizable work area (grids, tics, axis labels)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    text: 'Graph color and style customization',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="13.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" /><circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    text: 'Image export to WMF format',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    text: 'Auto-update and error reporting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

const modules = [
  { name: 'ICSharpCode.Core', description: 'Application core framework' },
  { name: 'ICSharpCode.AddInManager', description: 'Add-in management' },
  { name: 'ICSharpCode.SharpZipLib', description: 'Archive support' },
  { name: 'log4net', description: 'Logging' },
  { name: 'PowDLL', description: 'Powder pattern import' },
  { name: 'WeifenLuo.WinFormsUI.Docking', description: 'Window docking' },
  { name: 'ZedGraph', description: 'Graph rendering' },
];

export default function DocumentationPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Documentation</h1>
          <p className="text-base text-white/70">
            Learn how to use DiffractWD for powder diffraction analysis.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">

      {/* Quick Start */}
      <section className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-heading dark:text-dark-text">
            Quick Start
          </h2>
        </div>
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-6 rounded-xl border border-border bg-white p-6 md:flex-row dark:border-dark-border dark:bg-dark-surface"
            >
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
            </div>
          ))}
        </div>
      </section>

      {/* File Formats */}
      <section className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-heading dark:text-dark-text">
            Supported File Formats
          </h2>
        </div>
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
                <tr
                  key={row.category}
                  className="border-t border-border dark:border-dark-border"
                >
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
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-heading dark:text-dark-text">
            Capabilities
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.text}
              className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 dark:border-dark-border dark:bg-dark-surface"
            >
              <div className="mt-0.5 flex-shrink-0 text-primary dark:text-accent-light">
                {cap.icon}
              </div>
              <span className="text-sm text-body dark:text-dark-text">{cap.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* System & Technical */}
      <div className="mb-20 grid gap-6 md:grid-cols-2">
        <section>
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-heading dark:text-dark-text">
              System Requirements
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
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
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-heading dark:text-dark-text">
              Technical Details
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
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
          </div>
        </section>
      </div>

      {/* Modules */}
      <section>
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-heading dark:text-dark-text">
            Included Modules
          </h2>
        </div>
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
                <tr
                  key={mod.name}
                  className="border-t border-border dark:border-dark-border"
                >
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
