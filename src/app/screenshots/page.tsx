import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'DiffractWD - Screenshots',
};

export default function ScreenshotsPage() {
  return (
    <div>
      <h1 className="text-3xl">Screenshots</h1>
      <hr className="my-4 border-t border-black/10" />
      <div className="text-justify">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full text-center md:w-1/2">
            <a href="/screenshots/screenshot1.jpg" title="Default Open Window" target="_blank">
              <Image
                src="/screenshots/screenshot1_mini.jpg"
                className="border border-gray-300 rounded"
                width={286}
                height={204}
                alt="Diffract WD Screenshot #1"
              />
            </a>
            <p>Default Open Window</p>
          </div>
          <div className="w-full text-center md:w-1/2">
            <a href="/screenshots/screenshot2.jpg" title="Powder Pattern Import" target="_blank">
              <Image
                src="/screenshots/screenshot2_mini.jpg"
                className="border border-gray-300 rounded"
                width={286}
                height={204}
                alt="Diffract WD Screenshot #2"
              />
            </a>
            <p>Powder Pattern Import</p>
          </div>
        </div>
        <br />
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full text-center md:w-1/2">
            <a
              href="/screenshots/screenshot3.jpg"
              title="Powder Pattern Simulation"
              target="_blank"
            >
              <Image
                src="/screenshots/screenshot3_mini.jpg"
                className="border border-gray-300 rounded"
                width={286}
                height={204}
                alt="Diffract WD Screenshot #3"
              />
            </a>
            <p>Powder Pattern Simulation</p>
          </div>
          <div className="w-full text-center md:w-1/2">
            <a href="/screenshots/screenshot4.jpg" title="Advanced Windows Docking" target="_blank">
              <Image
                src="/screenshots/screenshot4_mini.jpg"
                className="border border-gray-300 rounded"
                width={286}
                height={204}
                alt="Diffract WD Screenshot #4"
              />
            </a>
            <p>Advanced Windows Docking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
