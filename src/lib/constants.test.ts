import { describe, it, expect } from 'vitest';
import { navItems, siteMetadata } from './constants';

describe('navItems', () => {
  it('contains expected navigation items', () => {
    expect(navItems.length).toBeGreaterThan(0);
  });

  it('has Home as the first item', () => {
    expect(navItems[0]).toEqual({ href: '/', label: 'Home' });
  });

  it('includes all main pages', () => {
    const labels = navItems.map((item) => item.label);
    expect(labels).toContain('Home');
    expect(labels).toContain('News');
    expect(labels).toContain('About');
    expect(labels).toContain('Screenshots');
    expect(labels).toContain('Downloads');
    expect(labels).toContain('Quick Manual');
    expect(labels).toContain('Support');
  });

  it('has valid href paths starting with /', () => {
    for (const item of navItems) {
      expect(item.href).toMatch(/^\//);
    }
  });

  it('has non-empty labels', () => {
    for (const item of navItems) {
      expect(item.label.length).toBeGreaterThan(0);
    }
  });

  it('has unique hrefs', () => {
    const hrefs = navItems.map((item) => item.href);
    const uniqueHrefs = new Set(hrefs);
    expect(uniqueHrefs.size).toBe(hrefs.length);
  });

  it('has unique labels', () => {
    const labels = navItems.map((item) => item.label);
    const uniqueLabels = new Set(labels);
    expect(uniqueLabels.size).toBe(labels.length);
  });
});

describe('siteMetadata', () => {
  it('has a title', () => {
    expect(siteMetadata.title).toBe('DiffractWD');
  });

  it('has a description', () => {
    expect(siteMetadata.description).toContain('Powder Diffraction');
  });

  it('has an author', () => {
    expect(siteMetadata.author).toBe('Volodymyr D. Vreshch');
  });
});
