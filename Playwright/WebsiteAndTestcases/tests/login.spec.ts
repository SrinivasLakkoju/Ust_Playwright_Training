import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {
  const loginUrl = 'http://127.0.0.1:5500/WebsiteAndTestcases/src/login.html'; // Adjust the port as needed

  test.beforeEach(async ({ page }) => {
    await page.goto(loginUrl);
  });

  test('Should load login form correctly', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Login');
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toHaveText('Log In');
  });

  test('Should login successfully with correct credentials', async ({ page }) => {
    await page.fill('input[name="username"]', 'admin');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');

    await page.waitForTimeout(500); // Wait for text update
    await expect(page.locator('#login-status')).toHaveText('Login successful! Redirecting...');
  });

  test('Should show error with incorrect credentials', async ({ page }) => {
    await page.fill('input[name="username"]', 'user');
    await page.fill('input[name="password"]', 'wrongpass');
    await page.click('button[type="submit"]');

    await expect(page.locator('#login-status')).toHaveText('Invalid credentials, please try again.');
  });

  test('Should not redirect with wrong credentials', async ({ page }) => {
    await page.fill('input[name="username"]', 'wrong');
    await page.fill('input[name="password"]', 'credentials');
    await page.click('button[type="submit"]');

    await page.waitForTimeout(1500);
    await expect(page).toHaveURL(loginUrl);
  });

  test('Should store user in localStorage on success', async ({ page }) => {
    await page.fill('input[name="username"]', 'admin');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');

    await page.waitForTimeout(500);
    const loggedInUser = await page.evaluate(() => localStorage.getItem('loggedInUser'));
    expect(loggedInUser).toBe('admin');
  });
});
