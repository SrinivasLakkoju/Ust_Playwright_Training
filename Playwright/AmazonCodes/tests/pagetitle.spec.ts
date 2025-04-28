import {expect, test} from "@playwright/test";

test('Home page title should contain "Amazon"', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle(/Amazon/);
  });
  