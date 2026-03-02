export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
  { href: '/screenshots', label: 'Screenshots' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/quick-manual', label: 'Quick Manual' },
  { href: '/support', label: 'Support' },
];

export const siteMetadata = {
  title: 'DiffractWD',
  description: 'DiffractWD - Free Open Source Software for Powder Diffraction Manipulation',
  author: 'Volodymyr D. Vreshch',
} as const;
