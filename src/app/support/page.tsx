import type { Metadata } from 'next';

import { Card } from '@/components/card';
import { PageHeader } from '@/components/page-header';
import { SectionHeader } from '@/components/section-header';
import { changelog } from '@/data/support';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Changelog, license information, and contact details for DiffractWD powder diffraction software.',
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  return (
    <div>
      <PageHeader
        title="Support"
        description="Get help, report issues, or review the license."
      />

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        {/* Author & Feedback */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <Card>
            <SectionHeader
              size="sm"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              }
              title="Author"
            />
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
          </Card>
          <Card>
            <SectionHeader
              size="sm"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
              title="Feedback"
            />
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
          </Card>
        </div>

        {/* Changelog */}
        <section className="mb-20">
          <SectionHeader
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            }
            title="Changelog"
          />
          <div className="relative space-y-4">
            <div className="absolute left-[4px] top-8 hidden h-[calc(100%-48px)] w-px bg-border dark:bg-dark-border md:block" />
            {changelog.map((release, idx) => (
              <div key={release.version} className="relative flex gap-5">
                <div className="relative hidden w-[9px] flex-shrink-0 md:block">
                  <div className={`mt-[22px] h-[9px] w-[9px] rounded-full ring-2 ring-white dark:ring-dark-bg ${idx === 0 ? 'bg-primary dark:bg-accent-light' : 'bg-border dark:bg-dark-border'}`} />
                </div>
                <Card padding="compact" className="flex-1">
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
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* License */}
        <section>
          <SectionHeader
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
            title="MIT License"
          />
          <Card className="bg-surface text-sm leading-relaxed text-body dark:text-dark-text">
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
          </Card>
        </section>
      </div>
    </div>
  );
}
