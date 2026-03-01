import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'DiffractWD - Quick Manual',
};

export default function QuickManualPage() {
  return (
    <div>
      <h1 className="text-3xl">Quick Manual</h1>
      <hr className="my-4 border-t border-black/10" />
      <div className="text-justify">
        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full text-center md:w-1/3">
            <Image
              src="/manual/help1.jpg"
              className="border border-gray-300 rounded"
              width={288}
              height={201}
              alt="Diffract WD Help #1"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold">Step 1</h3>
            <p>
              Import all necessary files.
              <br />
              <u>Supported Powder Pattern File formats:</u> *.raw, *.rd,*.ard, *.cpi, *.dat, *.dbw,
              *.gsas, *.mdi, *.rig, *.udf, *.uxd, *.xda, *.xdd, *.xy
              <br />
              <u>Molecule Import:</u> ShelX File (*.ins,*.res), Crystallography Information File
              (*.cif)
            </p>
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full text-center md:w-1/3">
            <Image
              src="/manual/help2.jpg"
              className="border border-gray-300 rounded"
              width={288}
              height={201}
              alt="Diffract WD Help #2"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold">Step 2</h3>
            <p>Change visibility and perform all necessary conclusions</p>
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full text-center md:w-1/3">
            <Image
              src="/manual/help3.jpg"
              className="border border-gray-300 rounded"
              width={288}
              height={201}
              alt="Diffract WD Help #3"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold">Step 3</h3>
            <p>
              If necessary : change properties
              <br />- 2 Theta range, FWHM of profiles, Curves color
            </p>
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full text-center md:w-1/3">
            <Image
              src="/manual/help4.jpg"
              className="border border-gray-300 rounded"
              width={288}
              height={201}
              alt="Diffract WD Help #4"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold">Step 4</h3>
            <p>Copy image to clipboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
