import {expect, test} from "@playwright/test";
test('Change delivery location by entering a pincode', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('#nav-global-location-popover-link').click();
    await page.locator('input#GLUXZipUpdateInput').fill('560001');
    await page.locator('span#GLUXZipUpdate').click();
    await page.waitForTimeout(2000); // Wait for location to update
    await expect(page.locator('#nav-global-location-data-modal-action')).toBeHidden();
  });
  