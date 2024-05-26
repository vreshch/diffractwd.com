import { test, expect } from "@playwright/test";

test.describe("Main Page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("Main page - should have title Overview", async ({ page }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Overview/);
    });

    test("Main page - should have menu", async ({ page }) => {
        const locator = page.getByRole("link", { name: "Home" });
        await expect(locator).toBeVisible();
    });

    test("Main page - should have header", async ({ page }) => {
        const locator = page.locator("h1");
        await expect(locator).toHaveText("Overview");
    });
});

test.describe("News", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/news");
    });

    test("News page - should have title News", async ({ page }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/News/);
    });

    test("News page - should have menu", async ({ page }) => {
        const locator = page.getByRole("link", { name: "News" });
        await expect(locator).toBeVisible();
    });

    test("News page - should have header", async ({ page }) => {
        const locator = page.locator("h1");
        await expect(locator).toHaveText("News");
    });
});

test.describe("About", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/about");
    });

    test("About page - should have title About", async ({ page }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/About/);
    });

    test("About page - should have menu", async ({ page }) => {
        const locator = page.getByRole("link", { name: "About" });
        await expect(locator).toBeVisible();
    });

    test("About page - should have header", async ({ page }) => {
        const locator = page.locator("h1");
        await expect(locator).toHaveText("About");
    });
});

test.describe("Screenshots", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/screenshots");
    });

    test("Screenshots page - should have title Screenshots", async ({
        page,
    }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Screenshots/);
    });

    test("Screenshots page - should have menu", async ({ page }) => {
        const locator = page.getByRole("link", { name: "Screenshots" });
        await expect(locator).toBeVisible();
    });

    test("Screenshots page - should have header", async ({ page }) => {
        const locator = page.locator("h1");
        await expect(locator).toHaveText("Screenshots");
    });
});

test.describe("Downloads", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/downloads");
    });

    test("Downloads page - should have title Downloads", async ({ page }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Downloads/);
    });

    test("Downloads page - should have menu", async ({ page }) => {
        const locator = page.getByRole("link", { name: "Downloads" });
        await expect(locator).toBeVisible();
    });

    test("Downloads page - should have header", async ({ page }) => {
        const locator = page.locator("h1");
        await expect(locator).toHaveText("Downloads");
    });
});
//

test.describe("Quick Manual", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/quick_manual");
    });

    test("Quick Manual page - should have title Quick Manual", async ({
        page,
    }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Manual/);
    });

    test("Quick Manual page - should have menu", async ({ page }) => {
        const locator = page.getByRole("link", { name: "Quick Manual" });
        await expect(locator).toBeVisible();
    });

    test("Quick Manual page - should have header", async ({ page }) => {
        const locator = page.locator("h1");
        await expect(locator).toHaveText("Quick Manual");
    });
});

///support
test.describe("Support", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/support");
    });

    test("Support page - should have title Support", async ({ page }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Support/);
    });

    test("Support page - should have menu", async ({ page }) => {
        const locator = page.getByRole("link", { name: "Support" });
        await expect(locator).toBeVisible();
    });

    test("Support page - should have header", async ({ page }) => {
        const locator = page.locator("h1");
        await expect(locator).toHaveText("Support");
    });
});
