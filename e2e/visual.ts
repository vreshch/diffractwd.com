import { type Page, type Locator, expect } from '@playwright/test';

export type VisualMode = 'blocking' | 'warning' | 'skip';

interface ScreenshotOptions {
  fullPage?: boolean;
  maxDiffPixelRatio?: number;
  threshold?: number;
  mask?: Locator[];
  animations?: 'disabled' | 'allow';
}

const DEFAULT_OPTIONS: ScreenshotOptions = {
  fullPage: true,
  maxDiffPixelRatio: 0.01,
  animations: 'disabled',
};

const warnings: { name: string; error: string }[] = [];

export function getVisualMode(): VisualMode {
  const mode = process.env.VISUAL_MODE as VisualMode | undefined;
  if (mode === 'blocking' || mode === 'skip') {
    return mode;
  }
  return 'warning';
}

export async function setTheme(page: Page, theme: 'dark' | 'light'): Promise<void> {
  await page.evaluate((t) => {
    localStorage.setItem('theme', t);
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, theme);
  // Allow styles to settle after theme change
  await page.waitForTimeout(300);
}

export async function waitForVisualStability(page: Page, timeout = 500): Promise<void> {
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(timeout);
}

export async function expectScreenshot(
  page: Page,
  name: string,
  options: ScreenshotOptions = {}
): Promise<void> {
  const mode = getVisualMode();
  const opts = { ...DEFAULT_OPTIONS, ...options };

  await waitForVisualStability(page);

  switch (mode) {
    case 'skip':
      await page.screenshot({ path: `e2e/screenshots/${name}`, fullPage: opts.fullPage });
      return;

    case 'warning':
      try {
        await expect(page).toHaveScreenshot(name, opts);
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        warnings.push({ name, error: msg });
        console.warn(`[visual-warning] Screenshot mismatch: ${name}`);
      }
      return;

    case 'blocking':
      await expect(page).toHaveScreenshot(name, opts);
      return;
  }
}

export function getWarnings(): { name: string; error: string }[] {
  return [...warnings];
}

export function printWarningSummary(): void {
  if (warnings.length === 0) {
    return;
  }
  console.log('\n========== VISUAL WARNINGS ==========');
  console.log(`${warnings.length} screenshot mismatch(es) detected (non-blocking):\n`);
  for (const w of warnings) {
    console.log(`  - ${w.name}`);
  }
  console.log('=====================================\n');
}
