import { test, expect } from '@playwright/test';
import { expectScreenshot, setTheme, printWarningSummary } from './visual';

const pages = [
  { path: '/', name: 'home' },
  { path: '/screenshots', name: 'screenshots' },
  { path: '/documentation', name: 'documentation' },
  { path: '/downloads', name: 'downloads' },
  { path: '/support', name: 'support' },
];

const MOBILE_VIEWPORT = { width: 375, height: 812 };
const themes = ['dark', 'light'] as const;

test.describe('desktop screenshots', () => {
  for (const theme of themes) {
    for (const { path, name } of pages) {
      test(`${name} page renders correctly (${theme}, desktop)`, async ({ page }) => {
        await page.goto(path, { waitUntil: 'networkidle' });
        await setTheme(page, theme);
        await expect(page).toHaveTitle(/DiffractWD/);
        await expectScreenshot(page, `${name}-${theme}-desktop.png`);
      });
    }
  }
});

test.describe('mobile screenshots', () => {
  test.use({ viewport: MOBILE_VIEWPORT });

  for (const theme of themes) {
    for (const { path, name } of pages) {
      test(`${name} page renders correctly (${theme}, mobile)`, async ({ page }) => {
        await page.goto(path, { waitUntil: 'networkidle' });
        await setTheme(page, theme);
        await expect(page).toHaveTitle(/DiffractWD/);
        await expectScreenshot(page, `${name}-${theme}-mobile.png`);
      });
    }
  }
});

test.describe('redirects', () => {
  const redirects = [
    { from: '/news', to: '/support' },
    { from: '/news.html', to: '/support' },
    { from: '/about', to: '/documentation' },
    { from: '/about.html', to: '/documentation' },
    { from: '/screenshots.html', to: '/screenshots' },
    { from: '/downloads.html', to: '/downloads' },
    { from: '/quick_manual', to: '/documentation' },
    { from: '/quick_manual.html', to: '/documentation' },
    { from: '/quick-manual', to: '/documentation' },
    { from: '/quick-manual.html', to: '/documentation' },
    { from: '/support.html', to: '/support' },
    { from: '/license', to: '/support' },
    { from: '/license.html', to: '/support' },
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
