import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DiffractWD - News',
};

export default function NewsPage() {
  return (
    <div>
      <h1 className="text-3xl">News</h1>
      <hr className="my-4 border-t border-black/10" />
      <div className="text-justify">
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Website updated (17-October-2021)</dt>
          <dd className="ml-4">Website core moved to TypeScript,NextJS</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Website updated (17-October-2016)</dt>
          <dd className="ml-4">Website core moved to React&amp;MongoDB</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Version 1.30 (28-January-2011)</dt>
          <dd className="ml-4">
            Article is available : (
            <a href="http://scripts.iucr.org/cgi-bin/paper?wf5075" target="_blank">
              V.D. Vreshch <b>J. App. Cryst.</b>,44, 219-220 <i>2011</i>
            </a>
            )
          </dd>
          <dd className="ml-4">Windows Vista and Windows 7 support</dd>
          <dd className="ml-4">New webpage design</dd>
          <dd className="ml-4">Bug fix</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Version 1.20 (27-October-2010)</dt>
          <dd className="ml-4">Background subtracts, Smooth, and Scale function added</dd>
          <dd className="ml-4">Graph navigation improve</dd>
          <dd className="ml-4">Revision of Powder Pattern generation module</dd>
          <dd className="ml-4">Help menu added</dd>
          <dd className="ml-4">Image export</dd>
          <dd className="ml-4">Bug fix</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Version 1.02 (16-June-2010)</dt>
          <dd className="ml-4">Installation Package Available</dd>
          <dd className="ml-4">Several Bug Fixed</dd>
          <dd className="ml-4">Native File Format Support</dd>
          <dd className="ml-4">Several Menu Items Added (Help)</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Version 1.01 (6-June-2010)</dt>
          <dd className="ml-4">Precompiled package available</dd>
          <dd className="ml-4">Source code (C#) available for download</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Version 1.00 (15-May-2010)</dt>
          <dd className="ml-4">Program was distributed among limited number of users.</dd>
          <dd className="ml-4">Several bug fixed</dd>
        </dl>
      </div>
    </div>
  );
}
