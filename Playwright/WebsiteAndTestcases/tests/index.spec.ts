import { test, expect } from '@playwright/test';

test.describe('Index Page Tests', () => {
  const indexUrl = 'http://127.0.0.1:5500/WebsiteAndTestcases/src/index.html'; // Adjust if needed

  test.beforeEach(async ({ page }) => {
    await page.goto(indexUrl);
  });

  test('Should load page and show hero section', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Welcome to View and Review');
    await expect(page.locator('a.btn')).toHaveText('Rate Movies Now');
  });

  test('Should contain navigation menu with all links', async ({ page }) => {
    const navItems = ['Home', 'About', 'Movies', 'Blog', 'Contact', 'Login'];
    for (const item of navItems) {
      await expect(page.locator('.nav-list')).toContainText(item);
    }
  });

  test('Clicking "Rate Movies Now" should navigate to homestay.html', async ({ page }) => {
    await page.click('a.btn');
    await expect(page).toHaveURL(/homestay\.html$/);
  });
});
