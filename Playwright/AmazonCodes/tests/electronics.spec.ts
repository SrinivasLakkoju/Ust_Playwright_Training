import {expect, test} from "@playwright/test";
test('Navigate to Electronics section from the menu', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('#nav-hamburger-menu').click();
    await page.locator('div.hmenu-visible a.hmenu-item:has-text("Electronics")').click();
    await expect(page.locator('h1')).toContainText('Electronics');
  });