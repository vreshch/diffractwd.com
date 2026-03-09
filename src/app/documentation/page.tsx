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
    description: 'Change visibility of patterns and perform all necessary comparisons between experimental and simulated data.',
    image: '/manual/help2.jpg',
  },
  {
    number: 3,
    title: 'Customize properties',
    description: 'Fine-tune 2-theta range, FWHM of profiles, and curve colors. Adjust grids, axis labels, and work area properties.',
    image: '/manual/help3.jpg',
  },
  {
    number: 4,
    title: 'Export your results',
    description: 'Copy the image to clipboard or export to WMF format for publication-quality figures.',
    image: '/manual/help4.jpg',
  },
];

const fileFormats = [
  { category: 'Powder Patterns', formats: 'RAW, RD, ARD, CPI, DAT, DBW, GSAS, MDI, RIG, UDF, UXD, XDA, XDD, XY' },
  { category: 'Crystal Structures', formats: 'ShelX (INS, RES), CIF' },
];

const capabilities = [
  'Multiple powder pattern and molecule import',
  'Powder pattern simulation from single crystal data',
  'Background subtraction, smoothing, and scaling',
  'Customizable work area (grids, tics, axis labels)',
  'Graph color and style customization',
  'Image export to WMF format',
  'Auto-update and error reporting',
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
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold text-heading dark:text-dark-text">Documentation</h1>
      <p className="mb-10 text-muted dark:text-dark-text-secondary">
        Learn how to use DiffractWD for powder diffraction analysis.
      </p>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold text-heading dark:text-dark-text">Quick Start</h2>
        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 md:flex-row dark:border-dark-border dark:bg-dark-surface"
            >
              <div className="flex-shrink-0">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}: ${step.title}`}
                  width={320}
                  height={224}
                  className="rounded-md border border-border dark:border-dark-border"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-heading dark:text-dark-text">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted dark:text-dark-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold text-heading dark:text-dark-text">Supported File Formats</h2>
        <div className="overflow-hidden rounded-lg border border-border dark:border-dark-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-alt dark:bg-dark-surface-alt">
              <tr>
                <th className="px-6 py-3 font-semibold text-heading dark:text-dark-text">Category</th>
                <th className="px-6 py-3 font-semibold text-heading dark:text-dark-text">Formats</th>
              </tr>
            </thead>
            <tbody>
              {fileFormats.map((row) => (
                <tr key={row.category} className="border-t border-border dark:border-dark-border">
                  <td className="px-6 py-3 font-medium text-heading dark:text-dark-text">{row.category}</td>
                  <td className="px-6 py-3 text-muted dark:text-dark-text-secondary">{row.formats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold text-heading dark:text-dark-text">Capabilities</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2 text-sm text-body dark:text-dark-text">
              <span className="mt-0.5 text-accent dark:text-accent-light">+</span>
              {cap}
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="mb-4 text-xl font-bold text-heading dark:text-dark-text">System Requirements</h2>
          <div className="rounded-lg border border-border bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
            <ul className="space-y-2 text-sm text-body dark:text-dark-text">
              <li>Windows XP, Vista, or Windows 7</li>
              <li>Microsoft .NET Framework 2.0</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-heading dark:text-dark-text">Technical Details</h2>
          <div className="rounded-lg border border-border bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
            <ul className="space-y-2 text-sm text-body dark:text-dark-text">
              <li>Written in C# (object-oriented)</li>
              <li>Built on SharpDevelop application core</li>
              <li>Extensible through add-in system</li>
              <li>BSD 2-Clause License</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mt-14">
        <h2 className="mb-4 text-xl font-bold text-heading dark:text-dark-text">Included Modules</h2>
        <div className="overflow-hidden rounded-lg border border-border dark:border-dark-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-alt dark:bg-dark-surface-alt">
              <tr>
                <th className="px-6 py-3 font-semibold text-heading dark:text-dark-text">Module</th>
                <th className="px-6 py-3 font-semibold text-heading dark:text-dark-text">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((mod) => (
                <tr key={mod.name} className="border-t border-border dark:border-dark-border">
                  <td className="px-6 py-3 font-mono text-xs text-heading dark:text-dark-text">{mod.name}</td>
                  <td className="px-6 py-3 text-muted dark:text-dark-text-secondary">{mod.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
