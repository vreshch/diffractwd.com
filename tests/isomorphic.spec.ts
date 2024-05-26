import { test, expect } from "@playwright/test";

const URLS: string[] = [
    "/",
    "/news",
    "/about",
    "/screenshots",
    "/downloads",
    "/quick_manual",
    "/support",
];

test.describe("Main Page", () => {
    for (const url of URLS) {
        test(`page ${url} should be isomorphic`, async ({ page }) => {
            await page.goto(url);
            const fullURl = await page.url();
            const servers = await fetch(fullURl);
            const textHtml = await servers.text();

            const locator = page.locator("h1");
            const linkTextInner = (await locator.allInnerTexts()).join("");

            await expect(textHtml).toContain(linkTextInner);
        });
    }
});
