import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from './navigation';
import { navItems } from '@/lib/constants';

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    className,
    onClick,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    onClick?: () => void;
  }) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ),
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navigation', () => {
  it('renders all navigation items', () => {
    render(<Navigation />);

    for (const item of navItems) {
      const links = screen.getAllByText(item.label);
      expect(links.length).toBeGreaterThan(0);
    }
  });

  it('renders navigation links with correct hrefs', () => {
    render(<Navigation />);

    for (const item of navItems) {
      const links = screen.getAllByText(item.label);
      expect(links[0].closest('a')).toHaveAttribute('href', item.href);
    }
  });

  it('renders the mobile menu toggle button', () => {
    render(<Navigation />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Navigation />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const header = button.closest('header');
    expect(header).toBeInTheDocument();
  });

  it('renders the site title link', () => {
    render(<Navigation />);

    const titlePart = screen.getByText('WD');
    expect(titlePart.closest('a')).toHaveAttribute('href', '/');
  });
});
