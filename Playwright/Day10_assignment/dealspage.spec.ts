import {test,  expect}  from "@playwright/test";

test('Open Today\'s Deals page', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('a[href*="todays-deals"]').click();
    await expect(page.locator('h1')).toContainText("Today's Deals");
  });