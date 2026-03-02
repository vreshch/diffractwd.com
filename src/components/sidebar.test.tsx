import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './sidebar';
import { navItems } from '@/lib/constants';

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Sidebar', () => {
  it('renders all navigation items', () => {
    render(<Sidebar />);

    for (const item of navItems) {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    }
  });

  it('renders navigation links with correct hrefs', () => {
    render(<Sidebar />);

    for (const item of navItems) {
      const link = screen.getByText(item.label);
      expect(link.closest('a')).toHaveAttribute('href', item.href);
    }
  });

  it('renders the mobile menu toggle button', () => {
    render(<Sidebar />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Sidebar />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const nav = button.closest('nav');
    expect(nav).toBeInTheDocument();
  });

  it('highlights the active route', () => {
    render(<Sidebar />);

    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink?.className).toContain('font-semibold');
  });

  it('does not highlight non-active routes', () => {
    render(<Sidebar />);

    const newsLink = screen.getByText('News').closest('a');
    expect(newsLink?.className).not.toContain('font-semibold');
  });
});
