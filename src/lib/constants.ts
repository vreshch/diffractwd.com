export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/screenshots', label: 'Screenshots' },
  { href: '/documentation', label: 'Documentation' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/support', label: 'Support' },
];

export const SITE_URL = 'https://diffractwd.com';

export const siteMetadata = {
  title: 'DiffractWD',
  description: 'DiffractWD - Free Open Source Software for Powder Diffraction Manipulation',
  author: 'Volodymyr D. Vreshch',
} as const;
