import {expect, test} from "@playwright/test";

// test('Page Title', async ({page}) => {
//   // test.setTimeout(100);
//   await page.goto('https://www.typescriptlang.org/');

//   // title should match (title, web_title)
//   await expect(page).toHaveTitle("TypeScript: JavaScript With Syntax For Types.");
// })

// test('Click Try ts btn', async ({page}) => {
//   // test.slow(); // triples the timeout --> 1000ms x 3
//   await page.goto('https://www.typescriptlang.org/');

//   // page.locator('#tsf > dkjbsd > divjjs')
  
//   const getStarted = page.getByText('Try TypeScript Now');
//   await getStarted.click();
// })

// test('Homepage should load properly', async ({ page }) => {
//   await page.goto('https://owasp.org/www-project-juice-shop/');
//   await expect(page).toHaveTitle(/OWASP/);
// });

test('Navigation menu should be visible', async ({ page }) => {
  await page.goto('https://owasp.org/www-project-juice-shop/');
  const nav = await page.locator('nav');
  await expect(nav).toBeVisible();
});
