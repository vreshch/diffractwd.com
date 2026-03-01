import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DiffractWD - About',
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl">About</h1>
      <hr className="my-4 border-t border-black/10" />
      <div className="text-justify">
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Supporting file formats</dt>
          <dd className="ml-4">
            <span className="underline">Powder Pattern Import:</span> Bruker/Siemens RAW Files
            (*.raw), Philips RD Files (*.rd), Scintag ARD Files (*.ard), Sietronics CPI Files
            (*.cpi), Riet7 DAT Files (*.dat), DBW Files (*.dbw), GSAS Files (*.gsas), Jade MDI Files
            (*.mdi), Rigaku RIG Files (*.rig), Philips UDF Files(*.udf), UXD Files (*.uxd), XDA
            Files (*.xda), XDD Files (*.xdd), XY Files (*.xy)
          </dd>
          <dd className="ml-4">
            <span className="underline">Molecule Import:</span> ShelX File (*.ins,*.res),
            Crystallography Information File (*.cif)
          </dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Main functions</dt>
          <dd className="ml-4">+ Multiple Powder Pattern and Molecule Import</dd>
          <dd className="ml-4">+ Symulation of Powder Patterns based on single crystal data</dd>
          <dd className="ml-4">+ Background subtraction, Smoth, and Scale of Powder Patterns</dd>
          <dd className="ml-4">+ Working area properties change (Grids, Tics, Axis Labels,..)</dd>
          <dd className="ml-4">+ Graph properties change (Color,...)</dd>
          <dd className="ml-4">+ Picture export to *.wmf</dd>
          <dd className="ml-4">+ Auto Update and Error Report modules</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">System requirements</dt>
          <dd className="ml-4">Windows XP, Vista, Windows 7</dd>
          <dd className="ml-4">Microsoft .NET Framework 2.0 need to be installed</dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Technical details</dt>
          <dd className="ml-4">Program Written in C#, pure object orientated language.</dd>
          <dd className="ml-4">
            Core is base on Sharp Develop, which were proved can be easily scale up.
          </dd>
          <dd className="ml-4">Program can be easily extended through Addin system.</dd>
          <dd className="ml-4">
            Licensed under terms of&nbsp;
            <Link href="/license" className="text-primary hover:underline">
              BSD License.
            </Link>
          </dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Modules included</dt>
          <dd className="ml-4">ICSharpCode.Core (Sharp Develop Application Core)</dd>
          <dd className="ml-4">ICSharpCode.AddInManager (Sharp Develop AddInManager)</dd>
          <dd className="ml-4">ICSharpCode.SharpZipLib,Ionic.Zip (Zip support Library)</dd>
          <dd className="ml-4">log4net (Log support)</dd>
          <dd className="ml-4">PowDLL (Powder Pattern Import)</dd>
          <dd className="ml-4">WeifenLuo.WinFormsUI.Docking (Advanced Windows Docking)</dd>
          <dd className="ml-4">ZedGraph (Graph Functionality)</dd>
        </dl>
      </div>
    </div>
  );
}
