import type { ReactNode } from 'react';

export interface DownloadItem {
  title: string;
  description: string;
  href: string;
  type: string;
  recommended: boolean;
  icon: ReactNode;
}

export const downloads: DownloadItem[] = [
  {
    title: 'Installation Program',
    description: 'Recommended. Includes installer with all dependencies.',
    href: '/downloads/diffractwd.exe',
    type: 'EXE',
    recommended: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    title: 'Compressed Binaries',
    description: 'Portable version. Extract and run without installation.',
    href: '/downloads/diffractwd_bin.zip',
    type: 'ZIP',
    recommended: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M21 8v13H3V8" />
        <path d="M1 3h22v5H1z" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  {
    title: 'Source Code',
    description: 'Full C# source code. Build with Visual Studio or SharpDevelop.',
    href: '/downloads/diffractwd_src.zip',
    type: 'ZIP',
    recommended: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];
