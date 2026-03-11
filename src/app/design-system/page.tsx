import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'DiffractWD - Design System',
};

const isDev = process.env.NODE_ENV === 'development';

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ─── Favicon Variants (32×32 viewBox, shown at 20× zoom) ─── */

function FaviconVariantsSection() {
  return (
    <Section id="favicon" title="App Icon" subtitle="Overlay pattern — solid top trace + half-opacity bottom trace (32×32 native, 20× zoom)">
      <div className="inline-block rounded-2xl border border-border bg-white p-4 shadow-sm dark:border-dark-border dark:bg-dark-surface">
        <svg viewBox="0 0 32 32" className="h-[640px] w-[640px]">
          <rect width="32" height="32" rx="6" fill="#1e3a5f" />
          <polyline points="4 13 8 10.5 11 6 13.5 10.5 16 13 20 8.5 22.5 13 26 10.5 28 13" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="4 22 8 19.5 11 15 13.5 19.5 16 22 20 17.5 22.5 22 26 19.5 28 22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>
      </div>
    </Section>
  );
}

/* ─── Layout Helpers ─── */

function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 dark:bg-dark-bg">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="mb-2 text-2xl font-bold text-heading dark:text-dark-text">{title}</h2>
          <p className="text-sm text-muted dark:text-dark-text-secondary">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function ShowcaseBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-white p-8 dark:border-dark-border dark:bg-dark-surface">
      <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted dark:text-dark-text-secondary">
        {label}
      </p>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function GradientBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-primary to-primary-light p-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/70">
        {label}
      </p>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
}

/* ─── Buttons ─── */

function ButtonsSection() {
  return (
    <Section id="buttons" title="Buttons" subtitle="Primary and secondary actions on surface and gradient backgrounds">
      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseBox label="On Surface">
          <Row>
            <button type="button" className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-light hover:shadow-lg dark:bg-accent dark:text-white dark:hover:bg-accent-light dark:hover:text-dark-bg">
              <DownloadIcon />
              Download DiffractWD
            </button>
          </Row>
          <Row>
            <button type="button" className="cursor-pointer inline-block rounded-lg border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-white">
              Read Documentation
            </button>
          </Row>
        </ShowcaseBox>
        <GradientBox label="On Hero Gradient">
          <Row>
            <button type="button" className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-md transition-all hover:bg-white/90 hover:shadow-lg">
              <DownloadIcon />
              Download DiffractWD
            </button>
          </Row>
          <Row>
            <button type="button" className="cursor-pointer inline-block rounded-lg border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary">
              Read Documentation
            </button>
          </Row>
        </GradientBox>
      </div>
    </Section>
  );
}

/* ─── Badges ─── */

function BadgesSection() {
  return (
    <Section id="badges" title="Badges & Pills" subtitle="Status indicators, labels, and tags">
      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseBox label="On Surface">
          <Row>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-medium text-primary dark:border-accent-light/20 dark:bg-accent-light/10 dark:text-accent-light">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Free &amp; Open Source
            </span>
            <span className="inline-block rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white dark:bg-accent">Recommended</span>
          </Row>
          <Row>
            <span className="inline-block rounded-md bg-primary/12 px-2.5 py-0.5 text-xs font-semibold text-primary dark:bg-accent/10 dark:text-accent-light">v1.30</span>
            <span className="inline-block rounded-md bg-primary/6 px-2.5 py-0.5 text-xs font-semibold text-primary/60 dark:bg-dark-surface-alt dark:text-dark-text-secondary">v1.20</span>
            <span className="inline-block rounded-md bg-primary/6 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary/60 dark:bg-dark-surface-alt dark:text-dark-text-secondary">.EXE</span>
            <span className="inline-block rounded-md bg-primary/6 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary/60 dark:bg-dark-surface-alt dark:text-dark-text-secondary">.ZIP</span>
          </Row>
        </ShowcaseBox>
        <GradientBox label="On Hero Gradient">
          <Row>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Free &amp; Open Source
            </span>
          </Row>
          <Row>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Latest stable release
            </span>
          </Row>
        </GradientBox>
      </div>
    </Section>
  );
}

/* ─── Cards ─── */

function CardsSection() {
  return (
    <Section id="cards" title="Cards" subtitle="Feature cards, download cards, and info cards">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-dark-border dark:bg-dark-surface dark:shadow-none dark:hover:bg-dark-surface-alt">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
            <StarIcon />
          </div>
          <h3 className="mb-2 text-base font-semibold text-heading dark:text-dark-text">Feature Card</h3>
          <p className="text-sm leading-relaxed text-muted dark:text-dark-text-secondary">Primary navy icon tint, cohesive with headings.</p>
        </div>
        <div className="group relative rounded-xl border border-border bg-white p-6 transition-all hover:border-primary/40 hover:shadow-lg dark:border-dark-border dark:bg-dark-surface dark:hover:border-accent-light/30">
          <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white dark:bg-accent">Recommended</span>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light">
            <DownloadIcon />
          </div>
          <h3 className="mb-1 text-base font-semibold text-heading dark:text-dark-text">Download Card</h3>
          <p className="text-sm text-muted dark:text-dark-text-secondary">Primary border on hover.</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
          <h3 className="mb-2 text-base font-semibold text-heading dark:text-dark-text">Info Card</h3>
          <ul className="mt-3 space-y-2 text-sm text-body dark:text-dark-text">
            <li className="flex items-center gap-2"><span className="text-primary dark:text-accent-light">&#8226;</span>Bullet item one</li>
            <li className="flex items-center gap-2"><span className="text-primary dark:text-accent-light">&#8226;</span>Bullet item two</li>
            <li className="flex items-center gap-2"><span className="text-primary dark:text-accent-light">&#8226;</span>Bullet item three</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ─── Icon Containers ─── */

function IconsSection() {
  return (
    <Section id="icons" title="Icon Containers" subtitle="Tinted background containers at three sizes">
      <ShowcaseBox label="Sizes">
        <Row>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"><CheckIcon /></div>
              <p className="mt-2 text-xs text-muted dark:text-dark-text-secondary">32px</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"><CheckIcon /></div>
              <p className="mt-2 text-xs text-muted dark:text-dark-text-secondary">40px</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"><CheckIcon /></div>
              <p className="mt-2 text-xs text-muted dark:text-dark-text-secondary">48px</p>
            </div>
          </div>
        </Row>
      </ShowcaseBox>
    </Section>
  );
}

/* ─── Typography ─── */

function TypographySection() {
  return (
    <Section id="typography" title="Typography" subtitle="Headings, body text, labels, and links">
      <ShowcaseBox label="Headings & Text">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-heading dark:text-dark-text md:text-5xl">Page Heading h1</h1>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-heading dark:text-dark-text">Section Heading h2</h2>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-heading dark:text-dark-text">Subsection h3</h3>
          </div>
          <div>
            <h3 className="text-base font-semibold text-heading dark:text-dark-text">Card Title</h3>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted dark:text-dark-text-secondary">
              Body text — used for descriptions, paragraphs, and general content throughout the site.
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted dark:text-dark-text-secondary">
              Uppercase Label
            </span>
          </div>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary dark:text-accent-light">
              Step Label
            </span>
          </div>
        </div>
      </ShowcaseBox>
    </Section>
  );
}

/* ─── Links ─── */

function LinksSection() {
  return (
    <Section id="links" title="Links" subtitle="Inline links and links with icons">
      <div className="grid gap-6 md:grid-cols-2">
        <ShowcaseBox label="On Surface">
          <Row>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline dark:text-accent-light">
              <ExternalLinkIcon />
              External link with icon
            </a>
          </Row>
          <Row>
            <span className="text-sm text-muted dark:text-dark-text-secondary">
              Inline text with a <a href="#" className="font-medium text-accent hover:underline dark:text-accent-light">linked phrase</a> inside it.
            </span>
          </Row>
        </ShowcaseBox>
        <GradientBox label="On Hero Gradient">
          <Row>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white hover:underline">
              <ExternalLinkIcon />
              Link on gradient
            </a>
          </Row>
        </GradientBox>
      </div>
    </Section>
  );
}

/* ─── Stats ─── */

function StatsSection() {
  return (
    <Section id="stats" title="Stats Bar" subtitle="Metric blocks with dividers">
      <div className="overflow-hidden rounded-xl border border-border dark:border-dark-border">
        <div className="grid grid-cols-2 divide-x divide-border bg-white dark:divide-dark-border dark:bg-dark-surface md:grid-cols-4">
          {[
            { value: '14+', label: 'Years Available' },
            { value: 'CIF', label: 'Format Support' },
            { value: 'WMF', label: 'Export Format' },
            { value: 'MIT', label: 'License' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center">
              <div className="text-2xl font-bold text-heading dark:text-accent-light">{stat.value}</div>
              <div className="mt-1 text-xs font-medium tracking-wide text-muted dark:text-dark-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Table ─── */

function TableSection() {
  const rows = [
    { prop: 'Version', val: '1.30', status: 'Latest', active: true },
    { prop: 'Platform', val: 'Windows', status: 'Stable', active: false },
    { prop: 'License', val: 'MIT', status: 'Free', active: false },
  ];

  return (
    <Section id="table" title="Table" subtitle="Data tables with header, rows, and borders">
      <div className="overflow-hidden rounded-xl border border-border dark:border-dark-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-primary/5 dark:bg-dark-surface-alt">
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary/70 dark:text-dark-text-secondary">Property</th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary/70 dark:text-dark-text-secondary">Value</th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary/70 dark:text-dark-text-secondary">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.prop} className="border-t border-border dark:border-dark-border">
                <td className="px-6 py-3.5 font-medium text-heading dark:text-dark-text">{r.prop}</td>
                <td className="px-6 py-3.5 text-muted dark:text-dark-text-secondary">{r.val}</td>
                <td className="px-6 py-3.5">
                  <span className={`inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold ${r.active ? 'bg-primary/12 text-primary dark:bg-accent/10 dark:text-accent-light' : 'bg-primary/5 text-primary/60 dark:bg-dark-surface-alt dark:text-dark-text-secondary'}`}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ─── Page Header ─── */

function PageHeaderSection() {
  return (
    <Section id="page-headers" title="Page Headers" subtitle="Gradient headers used on subpages">
      <div className="space-y-6">
        <div className="overflow-hidden rounded-xl">
          <div className="bg-gradient-to-br from-primary to-primary-light px-8 py-12 md:py-16">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Page Title</h1>
            <p className="text-base text-white/70">
              Subtitle description for the page header section.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Page ─── */

export default function DesignSystemPage() {
  if (!isDev) notFound();

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-white py-12 dark:border-dark-border dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-3 text-3xl font-bold text-heading dark:text-dark-text">
            Design System
          </h1>
          <p className="text-base text-muted dark:text-dark-text-secondary">
            Common UI patterns used across DiffractWD. Toggle dark/light mode to compare.
          </p>
        </div>
      </section>

      <FaviconVariantsSection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <ButtonsSection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <BadgesSection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <CardsSection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <IconsSection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <TypographySection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <LinksSection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <StatsSection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <TableSection />
      <div className="mx-auto max-w-5xl border-t border-border dark:border-dark-border" />
      <PageHeaderSection />
    </div>
  );
}
