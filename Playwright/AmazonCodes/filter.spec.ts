import {expect, test} from "@playwright/test";
test('Apply 4 stars and up filter in search results', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('mobile');
    await page.locator('#nav-search-submit-button').click();
    await page.locator('span:has-text("4 Stars & Up")').click();
    await expect(page.locator('span.a-text-bold')).toContainText('4 Stars & Up');
  });