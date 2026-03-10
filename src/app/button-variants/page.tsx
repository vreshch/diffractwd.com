import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DiffractWD - Button Design Variants',
};

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function VariantSection({
  id,
  number,
  title,
  subtitle,
  children,
}: {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 dark:bg-dark-bg">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-muted dark:text-dark-text-secondary">
            Variant {number}
          </span>
          <h2 className="mb-2 text-2xl font-bold text-heading dark:text-dark-text">{title}</h2>
          <p className="text-sm text-muted dark:text-dark-text-secondary">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function ButtonRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center justify-center gap-4">{children}</div>;
}

function ButtonGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-white p-8 dark:border-dark-border dark:bg-dark-surface">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-muted dark:text-dark-text-secondary">
        {label}
      </p>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

/* ─── Variant 1: Classic Rounded ─── */
function Variant1() {
  return (
    <VariantSection
      id="variant-1"
      number={1}
      title="Classic Rounded"
      subtitle="Soft rounded corners (8px), medium shadow, clean and professional"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <ButtonGroup label="Primary Actions">
          <ButtonRow>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-light hover:shadow-lg dark:bg-accent-light dark:text-dark-bg dark:hover:bg-accent"
            >
              <DownloadIcon />
              Download v1.30
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent-light hover:shadow-lg dark:bg-accent dark:hover:bg-accent-light dark:hover:text-dark-bg"
            >
              Get Started
              <ArrowIcon />
            </button>
          </ButtonRow>
        </ButtonGroup>
        <ButtonGroup label="Secondary Actions">
          <ButtonRow>
            <button
              type="button"
              className="inline-block rounded-lg border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white dark:border-accent-light dark:text-accent-light dark:hover:bg-accent-light dark:hover:text-dark-bg"
            >
              View Screenshots
            </button>
            <button
              type="button"
              className="inline-block rounded-lg border-2 border-border px-8 py-3.5 text-sm font-semibold text-muted transition-all hover:border-primary hover:text-primary dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-light dark:hover:text-accent-light"
            >
              Documentation
            </button>
          </ButtonRow>
        </ButtonGroup>
      </div>
    </VariantSection>
  );
}

/* ─── Variant 2: Pill Shaped ─── */
function Variant2() {
  return (
    <VariantSection
      id="variant-2"
      number={2}
      title="Pill Shaped"
      subtitle="Fully rounded capsule buttons, modern SaaS feel, softer presence"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <ButtonGroup label="Primary Actions">
          <ButtonRow>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-light hover:shadow-lg dark:bg-accent-light dark:text-dark-bg dark:hover:bg-accent"
            >
              <DownloadIcon />
              Download v1.30
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent-light hover:shadow-lg dark:bg-accent dark:hover:bg-accent-light dark:hover:text-dark-bg"
            >
              Get Started
              <ArrowIcon />
            </button>
          </ButtonRow>
        </ButtonGroup>
        <ButtonGroup label="Secondary Actions">
          <ButtonRow>
            <button
              type="button"
              className="inline-block rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white dark:border-accent-light dark:text-accent-light dark:hover:bg-accent-light dark:hover:text-dark-bg"
            >
              View Screenshots
            </button>
            <button
              type="button"
              className="inline-block rounded-full border-2 border-border px-8 py-3.5 text-sm font-semibold text-muted transition-all hover:border-primary hover:text-primary dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-light dark:hover:text-accent-light"
            >
              Documentation
            </button>
          </ButtonRow>
        </ButtonGroup>
      </div>
    </VariantSection>
  );
}

/* ─── Variant 3: Sharp Geometric ─── */
function Variant3() {
  return (
    <VariantSection
      id="variant-3"
      number={3}
      title="Sharp Geometric"
      subtitle="Minimal border radius, bold borders, technical and precise aesthetic"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <ButtonGroup label="Primary Actions">
          <ButtonRow>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-primary-light hover:shadow-md dark:border-accent-light/30 dark:bg-accent-light dark:text-dark-bg dark:hover:bg-accent"
            >
              <DownloadIcon />
              Download v1.30
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-accent-light hover:shadow-md dark:bg-accent dark:hover:bg-accent-light dark:hover:text-dark-bg"
            >
              Get Started
              <ArrowIcon />
            </button>
          </ButtonRow>
        </ButtonGroup>
        <ButtonGroup label="Secondary Actions">
          <ButtonRow>
            <button
              type="button"
              className="inline-block rounded-sm border-2 border-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white dark:border-accent-light dark:text-accent-light dark:hover:bg-accent-light dark:hover:text-dark-bg"
            >
              View Screenshots
            </button>
            <button
              type="button"
              className="inline-block rounded-sm border-2 border-border px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-muted transition-all hover:border-primary hover:text-primary dark:border-dark-border dark:text-dark-text-secondary dark:hover:border-accent-light dark:hover:text-accent-light"
            >
              Documentation
            </button>
          </ButtonRow>
        </ButtonGroup>
      </div>
    </VariantSection>
  );
}

/* ─── Variant 4: Soft Elevated ─── */
function Variant4() {
  return (
    <VariantSection
      id="variant-4"
      number={4}
      title="Soft Elevated"
      subtitle="Extra-large radius, gradient accents, elevated shadow for depth"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <ButtonGroup label="Primary Actions">
          <ButtonRow>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 dark:from-accent dark:to-accent-light dark:text-dark-bg dark:shadow-accent/20 dark:hover:shadow-accent/30"
            >
              <DownloadIcon />
              Download v1.30
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 dark:from-accent-light dark:to-accent dark:text-dark-bg dark:shadow-accent-light/20 dark:hover:shadow-accent-light/30"
            >
              Get Started
              <ArrowIcon />
            </button>
          </ButtonRow>
        </ButtonGroup>
        <ButtonGroup label="Secondary Actions">
          <ButtonRow>
            <button
              type="button"
              className="inline-block rounded-xl border border-primary/20 bg-primary/5 px-8 py-4 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary/10 hover:shadow-md dark:border-accent-light/20 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/15"
            >
              View Screenshots
            </button>
            <button
              type="button"
              className="inline-block rounded-xl border border-border bg-surface px-8 py-4 text-sm font-semibold text-muted shadow-sm transition-all hover:bg-surface-hover hover:shadow-md dark:border-dark-border dark:bg-dark-surface-alt dark:text-dark-text-secondary dark:hover:bg-dark-surface"
            >
              Documentation
            </button>
          </ButtonRow>
        </ButtonGroup>
      </div>
    </VariantSection>
  );
}

export default function ButtonVariantsPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-white py-12 dark:border-dark-border dark:bg-dark-surface">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-3 text-3xl font-bold text-heading dark:text-dark-text">
            Button Design Variants
          </h1>
          <p className="text-base text-muted dark:text-dark-text-secondary">
            Four design directions using the existing DiffractWD color palette. Each variant shows
            primary and secondary button states.
          </p>
        </div>
      </section>

      <Variant1 />
      <div className="mx-auto max-w-4xl border-t border-border dark:border-dark-border" />
      <Variant2 />
      <div className="mx-auto max-w-4xl border-t border-border dark:border-dark-border" />
      <Variant3 />
      <div className="mx-auto max-w-4xl border-t border-border dark:border-dark-border" />
      <Variant4 />
    </div>
  );
}
