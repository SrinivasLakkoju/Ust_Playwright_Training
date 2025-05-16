import {test,expect} from "@playwright/test";

test('Check that category filters exist on Today\'s Deals page', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('a[href*="todays-deals"]').click();
    await expect(page.locator('div#filter-content')).toBeVisible();
  });