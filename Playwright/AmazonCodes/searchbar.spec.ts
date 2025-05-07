import {expect, test} from "@playwright/test";
test('Search for a product and verify results', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('laptop');
    await page.locator('#nav-search-submit-button').click();
    await expect(page.locator('span.a-color-state')).toContainText('laptop');
  });
  