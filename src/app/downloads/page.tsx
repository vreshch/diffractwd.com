import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DiffractWD - Downloads',
};

export default function DownloadsPage() {
  return (
    <div>
      <h1 className="text-3xl">Downloads</h1>
      <hr className="my-4 border-t border-black/10" />
      <div className="text-justify">
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">DiffractWD 1.30</dt>
          <dd className="ml-4">
            <div className="mt-4 block">
              <a
                href="/downloads/diffractwd.exe"
                className="inline-flex items-center leading-[48px]"
              >
                <Image
                  src="/setup.png"
                  className="relative ml-4 mr-5 align-middle"
                  width={48}
                  height={48}
                  alt="Download Program"
                />
                <span className="inline-block underline">Installation program</span>
              </a>
            </div>
            <div className="mt-4 block">
              <a
                href="/downloads/diffractwd_bin.zip"
                className="inline-flex items-center leading-[48px]"
              >
                <Image
                  src="/package.png"
                  className="relative ml-4 mr-5 align-middle"
                  width={48}
                  height={48}
                  alt="Download Compressed Binaries"
                />
                <span className="inline-block underline">Compressed binaries</span>
              </a>
            </div>
            <div className="mt-4 block">
              <a
                href="/downloads/diffractwd_src.zip"
                className="inline-flex items-center leading-[48px]"
              >
                <Image
                  src="/source.png"
                  className="relative ml-4 mr-5 align-middle"
                  width={48}
                  height={48}
                  alt="Download Source Files"
                />
                <span className="inline-block underline">Source files</span>
              </a>
            </div>
          </dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Requirements</dt>
          <dd className="ml-4">Windows XP, Vista or Windows 7</dd>
          <dd className="ml-4">Microsoft .NET Framework 2.0</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">License</dt>
          <dd className="ml-4">
            DiffractWD is totally free and licensed under the{' '}
            <Link href="/license" className="text-primary hover:underline">
              BSD License
            </Link>
            .
          </dd>
        </dl>
      </div>
    </div>
  );
}
