import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  const url = 'http://127.0.0.1:5500/WebsiteAndTestcases/src/contact.html'; // adjust if needed

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Should render the contact form', async ({ page }) => {
    await expect(page.locator('#contact-form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('Should submit the form and display success message', async ({ page }) => {
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('textarea[name="message"]', 'Hello, this is a test.');
    await page.click('button[type="submit"]');

    const status = page.locator('#form-status');
    await expect(status).toHaveText('Thank you! Your message has been sent.');
  });

  test('Should clear form fields after submission', async ({ page }) => {
    await page.fill('input[name="name"]', 'Jane Doe');
    await page.fill('input[name="email"]', 'jane@example.com');
    await page.fill('textarea[name="message"]', 'Test message');
    await page.click('button[type="submit"]');

    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('');
  });

  test('Should not submit with missing required fields', async ({ page }) => {
    await page.fill('input[name="email"]', 'missing@name.com'); // omit name
    await page.click('button[type="submit"]');
    const status = page.locator('#form-status');
    await expect(status).toHaveText(''); // no success message
  });

  test('Should validate email format', async ({ page }) => {
    await page.fill('input[name="name"]', 'Invalid Email User');
    await page.fill('input[name="email"]', 'not-an-email');
    await page.fill('textarea[name="message"]', 'Testing invalid email');
    await page.click('button[type="submit"]');

    // browser native validation prevents submission
    const status = page.locator('#form-status');
    await expect(status).toHaveText('');
  });
});
