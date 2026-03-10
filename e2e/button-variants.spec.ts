import { test } from '@playwright/test';
import { setTheme, waitForVisualStability } from './visual';

const variants = [
  { id: 'variant-1', name: 'classic-rounded' },
  { id: 'variant-2', name: 'pill-shaped' },
  { id: 'variant-3', name: 'sharp-geometric' },
  { id: 'variant-4', name: 'soft-elevated' },
];

const themes = ['light', 'dark'] as const;

const OUTPUT_DIR = 'e2e/pr-screenshots';

test.describe('button variant screenshots', () => {
  for (const theme of themes) {
    for (const variant of variants) {
      test(`${variant.name} – ${theme}`, async ({ page }) => {
        await page.goto('/button-variants', { waitUntil: 'networkidle' });
        await setTheme(page, theme);
        await waitForVisualStability(page);

        const section = page.locator(`#${variant.id}`);
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);

        await section.screenshot({
          path: `${OUTPUT_DIR}/buttons-${variant.name}-${theme}.png`,
          animations: 'disabled',
        });
      });
    }
  }
});
