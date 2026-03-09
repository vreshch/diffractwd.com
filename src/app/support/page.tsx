import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DiffractWD - Support',
};

const changelog = [
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
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold text-heading dark:text-dark-text">Support</h1>
      <p className="mb-10 text-muted dark:text-dark-text-secondary">Get help, report issues, or review the license.</p>

      <div className="mb-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
          <h2 className="mb-3 text-lg font-semibold text-heading dark:text-dark-text">Author</h2>
          <p className="text-sm text-body dark:text-dark-text">
            <a
              href="https://vreshch.com/contacts"
              target="_blank"
              className="font-medium text-accent hover:underline dark:text-accent-light"
            >
              Volodymyr D. Vreshch
            </a>
          </p>
        </div>
        <div className="rounded-lg border border-border bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
          <h2 className="mb-3 text-lg font-semibold text-heading dark:text-dark-text">Feedback</h2>
          <p className="mb-3 text-sm text-body dark:text-dark-text">We welcome your input:</p>
          <ul className="space-y-1 text-sm text-muted dark:text-dark-text-secondary">
            <li>Suggestions and feature requests</li>
            <li>Bug reports</li>
            <li>Questions and help requests</li>
          </ul>
        </div>
      </div>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold text-heading dark:text-dark-text">Changelog</h2>
        <div className="space-y-4">
          {changelog.map((release) => (
            <div key={release.version} className="rounded-lg border border-border bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
              <div className="mb-2 flex items-baseline gap-3">
                <span className="inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent dark:text-accent-light">
                  v{release.version}
                </span>
                <span className="text-sm text-muted dark:text-dark-text-secondary">{release.date}</span>
              </div>
              <ul className="space-y-1 text-sm text-body dark:text-dark-text">
                {release.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 text-muted dark:text-dark-text-secondary">&bull;</span>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-heading dark:text-dark-text">BSD 2-Clause License</h2>
        <div className="rounded-lg border border-border bg-surface p-6 text-sm leading-relaxed text-body dark:border-dark-border dark:bg-dark-surface dark:text-dark-text">
          <p className="mb-4">Copyright {new Date().getFullYear()} Vreshch V.D.</p>
          <p className="mb-4">
            Redistribution and use in source and binary forms, with or without modification, are
            permitted provided that the following conditions are met:
          </p>
          <p className="mb-4">
            1. Redistributions of source code must retain the above copyright notice, this list of
            conditions and the following disclaimer.
          </p>
          <p className="mb-4">
            2. Redistributions in binary form must reproduce the above copyright notice, this list
            of conditions and the following disclaimer in the documentation and/or other materials
            provided with the distribution.
          </p>
          <p>
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot;
            AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
            EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
            INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
            PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
            INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
            LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
            OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
          </p>
        </div>
      </section>
    </div>
  );
}
