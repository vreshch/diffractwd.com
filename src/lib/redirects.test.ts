import { describe, it, expect } from 'vitest';
import { redirects } from './redirects';

describe('redirects', () => {
  it('contains redirect entries', () => {
    expect(redirects.length).toBeGreaterThan(0);
  });

  it('all redirects are permanent (301)', () => {
    for (const redirect of redirects) {
      expect(redirect.permanent).toBe(true);
    }
  });

  it('maps .html legacy URLs to clean paths', () => {
    const htmlRedirects = redirects.filter((r) => r.source.endsWith('.html'));
    expect(htmlRedirects.length).toBeGreaterThanOrEqual(7);

    for (const redirect of htmlRedirects) {
      expect(redirect.destination).not.toContain('.html');
      expect(redirect.destination).toMatch(/^\//);
    }
  });

  it('maps legacy underscore URLs to new paths', () => {
    const underscoreRedirects = redirects.filter((r) => r.source.includes('_'));
    expect(underscoreRedirects.length).toBeGreaterThanOrEqual(1);

    for (const redirect of underscoreRedirects) {
      expect(redirect.destination).not.toContain('_');
    }
  });

  it('redirects old pages to new consolidated pages', () => {
    const newsRedirects = redirects.filter((r) => r.source.includes('news'));
    expect(newsRedirects.every((r) => r.destination === '/support')).toBe(true);

    const aboutRedirects = redirects.filter((r) => r.source.includes('about'));
    expect(aboutRedirects.every((r) => r.destination === '/documentation')).toBe(true);

    const manualRedirects = redirects.filter((r) => r.source.includes('manual'));
    expect(manualRedirects.every((r) => r.destination === '/documentation')).toBe(true);

    const licenseRedirects = redirects.filter((r) => r.source.includes('license'));
    expect(licenseRedirects.every((r) => r.destination === '/support')).toBe(true);
  });

  it('has unique source paths', () => {
    const sources = redirects.map((r) => r.source);
    const uniqueSources = new Set(sources);
    expect(uniqueSources.size).toBe(sources.length);
  });

  it('all destinations start with /', () => {
    for (const redirect of redirects) {
      expect(redirect.destination).toMatch(/^\//);
    }
  });

  it('all sources start with /', () => {
    for (const redirect of redirects) {
      expect(redirect.source).toMatch(/^\//);
    }
  });
});
