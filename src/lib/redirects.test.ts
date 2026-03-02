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

  it('maps legacy underscore URLs to kebab-case', () => {
    const underscoreRedirects = redirects.filter((r) => r.source.includes('_'));
    expect(underscoreRedirects.length).toBeGreaterThanOrEqual(1);

    for (const redirect of underscoreRedirects) {
      expect(redirect.destination).not.toContain('_');
    }
  });

  it('redirects quick_manual to quick-manual', () => {
    const quickManualRedirects = redirects.filter((r) => r.destination === '/quick-manual');
    expect(quickManualRedirects.length).toBe(2);

    const sources = quickManualRedirects.map((r) => r.source);
    expect(sources).toContain('/quick_manual');
    expect(sources).toContain('/quick_manual.html');
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
