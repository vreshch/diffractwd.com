'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { navItems } from '@/lib/constants';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-primary">
          DiffractWD
        </Link>

        <button
          className="cursor-pointer border-none bg-transparent p-1 text-2xl text-body md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? '\u2715' : '\u2630'}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                pathname === href
                  ? 'bg-accent/10 text-accent'
                  : 'text-body hover:bg-surface-alt hover:text-heading',
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          open ? 'max-h-[400px]' : 'max-h-0',
        )}
      >
        <div className="border-t border-border px-6 py-2">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                pathname === href
                  ? 'bg-accent/10 text-accent'
                  : 'text-body hover:bg-surface-alt hover:text-heading',
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
