import type { ReactNode } from 'react';

export const steps = [
  {
    number: 1,
    title: 'Import your files',
    description:
      'Import powder patterns and crystal structures. Supported formats: *.raw, *.rd, *.ard, *.cpi, *.dat, *.dbw, *.gsas, *.mdi, *.rig, *.udf, *.uxd, *.xda, *.xdd, *.xy, ShelX (*.ins, *.res), CIF (*.cif).',
    image: '/manual/help1.jpg',
  },
  {
    number: 2,
    title: 'Adjust visibility',
    description:
      'Change visibility of patterns and perform all necessary comparisons between experimental and simulated data.',
    image: '/manual/help2.jpg',
  },
  {
    number: 3,
    title: 'Customize properties',
    description:
      'Fine-tune 2-theta range, FWHM of profiles, and curve colors. Adjust grids, axis labels, and work area properties.',
    image: '/manual/help3.jpg',
  },
  {
    number: 4,
    title: 'Export your results',
    description:
      'Copy the image to clipboard or export to WMF format for publication-quality figures.',
    image: '/manual/help4.jpg',
  },
];

export const fileFormats = [
  {
    category: 'Powder Patterns',
    formats: 'RAW, RD, ARD, CPI, DAT, DBW, GSAS, MDI, RIG, UDF, UXD, XDA, XDD, XY',
  },
  { category: 'Crystal Structures', formats: 'ShelX (INS, RES), CIF' },
];

export interface Capability {
  text: string;
  icon: ReactNode;
}

export const capabilities: Capability[] = [
  {
    text: 'Multiple powder pattern and molecule import',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    text: 'Powder pattern simulation from single crystal data',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    text: 'Background subtraction, smoothing, and scaling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    text: 'Customizable work area (grids, tics, axis labels)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    text: 'Graph color and style customization',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="13.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" /><circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    text: 'Image export to WMF format',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    text: 'Auto-update and error reporting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

export const modules = [
  { name: 'ICSharpCode.Core', description: 'Application core framework' },
  { name: 'ICSharpCode.AddInManager', description: 'Add-in management' },
  { name: 'ICSharpCode.SharpZipLib', description: 'Archive support' },
  { name: 'log4net', description: 'Logging' },
  { name: 'PowDLL', description: 'Powder pattern import' },
  { name: 'WeifenLuo.WinFormsUI.Docking', description: 'Window docking' },
  { name: 'ZedGraph', description: 'Graph rendering' },
];
