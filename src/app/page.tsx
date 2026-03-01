import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'DiffractWD - Overview',
};

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Overview</h1>
      <hr className="my-4 border-t border-black/10" />
      <div className="text-justify">
        <p>
          <b>DiffractWD</b> is a tool to easily manipulate with Powder Patterns, both experimental
          and simulated. The user interface is designed to be simple and user-friendly, and do not
          require any crystallographic background. With just a few clicks - you can compare measured
          patterns, and prepare picture for publication.
        </p>

        <div className="float-right mt-2.5 ml-5">
          <a href="/screenshots">
            <Image
              className="border border-gray-300 rounded"
              alt="DiffractWD print Screen"
              width={288}
              height={201}
              src="/prnsrc.png"
            />
          </a>
        </div>

        <p>
          <i>Source Code</i> of DiffractWD <i>is open</i> for public, and build based on Extendable
          system. The system provide developers with interfaces to build their own addin&apos;s, and
          extend minimal functions.
        </p>

        <p>
          Please note, DiffractWD is far from complete. Program contain Autoupdate and Error Report
          modules - and will <i>let you to have the latest stable version</i> installed. There are
          many missing features that are planned for future versions.
        </p>

        <br />
        <div>
          <a
            href="/downloads/diffractwd.exe"
            className="inline-block rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white"
          >
            DiffractWD Download
          </a>
        </div>
      </div>
    </div>
  );
}
