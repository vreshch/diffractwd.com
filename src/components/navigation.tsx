'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { navItems } from '@/lib/constants';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300',
        scrolled
          ? 'border-b border-border/60 bg-white/85 shadow-sm backdrop-blur-xl'
          : 'border-b border-transparent bg-white',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group text-xl font-bold tracking-tight text-heading"
        >
          <span className="transition-colors duration-200 group-hover:text-primary">
            Diffract
          </span>
          <span className="text-primary transition-opacity duration-200 group-hover:opacity-70">
            WD
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'group relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'text-heading'
                    : 'text-muted hover:text-heading',
                )}
              >
                {label}
                <span
                  className={cn(
                    'absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full transition-all duration-300',
                    isActive
                      ? 'bg-primary'
                      : 'scale-x-0 bg-primary/60 group-hover:scale-x-100',
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <button
          className="relative rounded-lg p-2 text-muted transition-colors duration-200 hover:bg-surface-alt hover:text-heading md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-5">
            <span
              className={cn(
                'absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300',
                mobileOpen ? 'top-[9px] rotate-45' : 'top-[3px] rotate-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-[9px] block h-[2px] w-5 rounded-full bg-current transition-all duration-200',
                mobileOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100',
              )}
            />
            <span
              className={cn(
                'absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300',
                mobileOpen ? 'top-[9px] -rotate-45' : 'top-[15px] rotate-0',
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out md:hidden',
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="border-t border-border/60 px-6 pb-4 pt-2">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'relative block rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-primary/8 text-primary'
                    : 'text-muted hover:bg-surface-alt hover:text-heading',
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-primary" />
                )}
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
