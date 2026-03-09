import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'DiffractWD - Screenshots',
};

const screenshots = [
  {
    src: '/screenshots/screenshot1_mini.jpg',
    full: '/screenshots/screenshot1.jpg',
    title: 'Default Open Window',
  },
  {
    src: '/screenshots/screenshot2_mini.jpg',
    full: '/screenshots/screenshot2.jpg',
    title: 'Powder Pattern Import',
  },
  {
    src: '/screenshots/screenshot3_mini.jpg',
    full: '/screenshots/screenshot3.jpg',
    title: 'Powder Pattern Simulation',
  },
  {
    src: '/screenshots/screenshot4_mini.jpg',
    full: '/screenshots/screenshot4.jpg',
    title: 'Advanced Windows Docking',
  },
];

export default function ScreenshotsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold text-heading dark:text-dark-text">Screenshots</h1>
      <p className="mb-8 text-muted dark:text-dark-text-secondary">See DiffractWD in action.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {screenshots.map((shot) => (
          <a
            key={shot.title}
            href={shot.full}
            target="_blank"
            className="group overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-lg dark:border-dark-border dark:bg-dark-surface"
          >
            <div className="overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.title}
                width={572}
                height={408}
                className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-heading dark:text-dark-text">{shot.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
