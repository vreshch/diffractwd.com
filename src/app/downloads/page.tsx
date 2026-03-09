import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DiffractWD - Downloads',
};

const downloads = [
  {
    title: 'Installation Program',
    description: 'Recommended. Includes installer with all dependencies.',
    href: '/downloads/diffractwd.exe',
    type: 'EXE',
  },
  {
    title: 'Compressed Binaries',
    description: 'Portable version. Extract and run without installation.',
    href: '/downloads/diffractwd_bin.zip',
    type: 'ZIP',
  },
  {
    title: 'Source Code',
    description: 'Full C# source code. Build with Visual Studio or SharpDevelop.',
    href: '/downloads/diffractwd_src.zip',
    type: 'ZIP',
  },
];

export default function DownloadsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold text-heading">Downloads</h1>
      <p className="mb-8 text-muted">DiffractWD v1.30 &mdash; latest stable release.</p>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        {downloads.map((dl) => (
          <a
            key={dl.title}
            href={dl.href}
            className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-accent/30 hover:shadow-md"
          >
            <div className="mb-3 inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
              {dl.type}
            </div>
            <h3 className="mb-1 text-base font-semibold text-heading group-hover:text-accent">
              {dl.title}
            </h3>
            <p className="text-sm text-muted">{dl.description}</p>
          </a>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-heading">System Requirements</h2>
          <ul className="space-y-2 text-sm text-body">
            <li>Windows XP, Vista, or Windows 7</li>
            <li>Microsoft .NET Framework 2.0</li>
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-heading">License</h2>
          <p className="text-sm text-body">
            DiffractWD is free and open source, licensed under the BSD 2-Clause License. See the
            full license text on the{' '}
            <a href="/support" className="text-accent hover:underline">
              Support
            </a>{' '}
            page.
          </p>
        </div>
      </div>
    </div>
  );
}
