import {expect, test} from "@playwright/test";

test('Language change test', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.hover('#icp-nav-flyout');
    await page.waitForTimeout(2000);
    await page.locator("span:has-text('TE')").first().click();
    await page.waitForTimeout(2000);
});
