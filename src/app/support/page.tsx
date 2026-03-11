import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Changelog, license information, and contact details for DiffractWD powder diffraction software.',
  alternates: { canonical: '/support' },
};

const changelog = [
  {
    version: '2.0',
    date: 'March 2025',
    changes: [
      'Website redesigned with modern layout and dark mode',
      'Consolidated pages for improved navigation',
      'Responsive design for mobile and desktop',
    ],
  },
  {
    version: '1.30',
    date: '28 January 2011',
    changes: [
      'Published: V.D. Vreshch, J. App. Cryst., 44, 219-220 (2011)',
      'Windows Vista and Windows 7 support',
      'New webpage design',
      'Bug fixes',
    ],
  },
  {
    version: '1.20',
    date: '27 October 2010',
    changes: [
      'Background subtraction, smoothing, and scale functions',
      'Graph navigation improvements',
      'Powder pattern generation module revision',
      'Help menu and image export added',
      'Bug fixes',
    ],
  },
  {
    version: '1.02',
    date: '16 June 2010',
    changes: [
      'Installation package available',
      'Native file format support',
      'Several bug fixes',
    ],
  },
  {
    version: '1.01',
    date: '6 June 2010',
    changes: [
      'Precompiled package available',
      'Source code (C#) available for download',
    ],
  },
  {
    version: '1.00',
    date: '15 May 2010',
    changes: ['Initial release to limited number of users'],
  },
];

export default function SupportPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Support</h1>
          <p className="text-base text-white/70">
            Get help, report issues, or review the license.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">

      {/* Author & Feedback */}
      <div className="mb-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-heading dark:text-dark-text">Author</h2>
          </div>
          <p className="text-sm text-body dark:text-dark-text">
            <a
              href="https://vreshch.com/contacts"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline dark:text-accent-light"
            >
              Volodymyr D. Vreshch
            </a>
          </p>
          <p className="mt-2 text-sm text-muted dark:text-dark-text-secondary">
            Ph.D. in Inorganic Chemistry, Kyiv, Ukraine
          </p>
          <p className="mt-1 text-sm text-muted dark:text-dark-text-secondary">
            Senior Software Engineer at Microsoft
          </p>
        </div>
        <div className="rounded-xl border border-border bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-heading dark:text-dark-text">Feedback</h2>
          </div>
          <p className="mb-3 text-sm text-body dark:text-dark-text">We welcome your input:</p>
          <ul className="space-y-2 text-sm text-muted dark:text-dark-text-secondary">
            <li className="flex items-center gap-2">
              <span className="text-primary dark:text-accent-light">&#8226;</span>
              Suggestions and feature requests
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary dark:text-accent-light">&#8226;</span>
              Bug reports
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary dark:text-accent-light">&#8226;</span>
              Questions and help requests
            </li>
          </ul>
        </div>
      </div>

      {/* Changelog */}
      <section className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-heading dark:text-dark-text">
            Changelog
          </h2>
        </div>
        <div className="relative space-y-4">
          {/* Timeline line */}
          <div className="absolute left-[4px] top-8 hidden h-[calc(100%-48px)] w-px bg-border dark:bg-dark-border md:block" />
          {changelog.map((release, idx) => (
            <div key={release.version} className="relative flex gap-5">
              {/* Timeline dot */}
              <div className="relative hidden w-[9px] flex-shrink-0 md:block">
                <div className={`mt-[22px] h-[9px] w-[9px] rounded-full ring-2 ring-white dark:ring-dark-bg ${idx === 0 ? 'bg-primary dark:bg-accent-light' : 'bg-border dark:bg-dark-border'}`} />
              </div>
              <div className="flex-1 rounded-xl border border-border bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
                <div className="mb-3 flex flex-wrap items-baseline gap-3">
                  <span className={`inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold ${idx === 0 ? 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light' : 'bg-primary/5 text-primary/60 dark:bg-dark-surface-alt dark:text-dark-text-secondary'}`}>
                    v{release.version}
                  </span>
                  <span className="text-sm text-muted dark:text-dark-text-secondary">
                    {release.date}
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-body dark:text-dark-text">
                  {release.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted dark:bg-dark-text-secondary" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* License */}
      <section>
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-heading dark:text-dark-text">
            MIT License
          </h2>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6 text-sm leading-relaxed text-body dark:border-dark-border dark:bg-dark-surface dark:text-dark-text">
          <p className="mb-4 font-medium">
            Copyright {new Date().getFullYear()} Volodymyr D. Vreshch
          </p>
          <p className="mb-4">
            Permission is hereby granted, free of charge, to any person obtaining a copy of this
            software and associated documentation files (the &quot;Software&quot;), to deal in the
            Software without restriction, including without limitation the rights to use, copy,
            modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
            to permit persons to whom the Software is furnished to do so, subject to the following
            conditions:
          </p>
          <p className="mb-4">
            The above copyright notice and this permission notice shall be included in all copies or
            substantial portions of the Software.
          </p>
          <p className="text-xs text-muted dark:text-dark-text-secondary">
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
            HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
            CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
            THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}
