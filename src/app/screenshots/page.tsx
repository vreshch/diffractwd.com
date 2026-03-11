import type { Metadata } from 'next';
import { ScreenshotGallery } from '@/components/lightbox';

export const metadata: Metadata = {
  title: 'Screenshots',
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
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Screenshots</h1>
          <p className="text-base text-white/70">
            See DiffractWD in action. Click any image to view full size.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <ScreenshotGallery screenshots={screenshots} />
      </div>
    </div>
  );
}
