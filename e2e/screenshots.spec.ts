import { test, expect } from '@playwright/test';
import { expectScreenshot, printWarningSummary } from './visual';

const pages = [
  { path: '/', name: 'home' },
  { path: '/news', name: 'news' },
  { path: '/about', name: 'about' },
  { path: '/screenshots', name: 'screenshots' },
  { path: '/downloads', name: 'downloads' },
  { path: '/quick-manual', name: 'quick-manual' },
  { path: '/support', name: 'support' },
  { path: '/license', name: 'license' },
];

const MOBILE_VIEWPORT = { width: 375, height: 812 };

test.describe('desktop screenshots', () => {
  for (const { path, name } of pages) {
    test(`${name} page renders correctly`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      await expect(page).toHaveTitle(/DiffractWD/);
      await expectScreenshot(page, `${name}-desktop.png`);
    });
  }
});

test.describe('mobile screenshots', () => {
  test.use({ viewport: MOBILE_VIEWPORT });

  for (const { path, name } of pages) {
    test(`${name} page renders correctly on mobile`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      await expect(page).toHaveTitle(/DiffractWD/);
      await expectScreenshot(page, `${name}-mobile.png`);
    });
  }
});

test.describe('redirects', () => {
  const redirects = [
    { from: '/news.html', to: '/news' },
    { from: '/about.html', to: '/about' },
    { from: '/screenshots.html', to: '/screenshots' },
    { from: '/downloads.html', to: '/downloads' },
    { from: '/quick_manual', to: '/quick-manual' },
    { from: '/quick_manual.html', to: '/quick-manual' },
    { from: '/support.html', to: '/support' },
    { from: '/license.html', to: '/license' },
  ];

  for (const { from, to } of redirects) {
    test(`${from} redirects to ${to}`, async ({ page }) => {
      await page.goto(from);
      await expect(page).toHaveURL(new RegExp(`${to}$`));
    });
  }
});

test.afterAll(() => {
  printWarningSummary();
});
