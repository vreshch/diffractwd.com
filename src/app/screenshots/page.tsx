import type { Metadata } from 'next';

import { ScreenshotGallery } from '@/components/lightbox';
import { PageHeader } from '@/components/page-header';
import { screenshots } from '@/data/screenshots';

export const metadata: Metadata = {
  title: 'Screenshots',
  description: 'Screenshot gallery of DiffractWD powder diffraction software in action.',
  alternates: { canonical: '/screenshots' },
};

export default function ScreenshotsPage() {
  return (
    <div>
      <PageHeader
        title="Screenshots"
        description="See DiffractWD in action. Click any image to view full size."
      />

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <ScreenshotGallery screenshots={screenshots} />
      </div>
    </div>
  );
}
