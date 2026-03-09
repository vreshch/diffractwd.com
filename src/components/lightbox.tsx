'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface LightboxImage {
  src: string;
  full: string;
  title: string;
}

export function ScreenshotGallery({ screenshots }: { screenshots: LightboxImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [activeIndex, close]);

  return (
    <>
      <div className="grid gap-14 sm:grid-cols-2">
        {screenshots.map((shot, i) => (
          <button
            key={shot.title}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative cursor-zoom-in text-left"
          >
            <div className="absolute -inset-3 rounded-2xl bg-primary/5 dark:bg-accent/10" />
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={shot.src}
                alt={shot.title}
                width={572}
                height={408}
                className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="relative mt-3 px-1">
              <p className="text-sm font-medium text-heading dark:text-dark-text">{shot.title}</p>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl leading-none text-white/90 transition-colors hover:bg-black/70 hover:text-white"
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <Image
            src={screenshots[activeIndex].full}
            alt={screenshots[activeIndex].title}
            width={1200}
            height={860}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}
