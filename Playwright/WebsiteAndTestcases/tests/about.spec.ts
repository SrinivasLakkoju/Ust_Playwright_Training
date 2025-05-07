import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/WebsiteAndTestcases/src/about.html'); // Adjust the path/URL as needed
});

test('should load the About page correctly', async ({ page }) => {
 
  // Verify the title
  const title = await page.title();
  expect(title).toBe('About Us | View and Review');
  
  // Verify background color
  const bodyBackgroundColor = await page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor);
  expect(bodyBackgroundColor).toBe('rgb(248, 249, 250)'); // #f8f9fa in rgb format
});

test('should log "About page loaded" to the console', async ({ page }) => {
  // Listen to the console logs
  page.on('console', msg => {
    if (msg.text() === 'About page loaded') {
      console.log('Console log verified!');
    }
  });
  
  
});

test('should display correct content in the "Our Mission" section', async ({ page }) => {
  
  // Navigate to the "Our Mission" section
  const missionTitle = await page.locator('h2:has-text("Our Mission")');
  const missionText = await page.locator('p:has-text("We aim to help movie lovers make informed decisions")');
  
  // Verify the title and content
  await expect(missionTitle).toBeVisible();
  await expect(missionText).toHaveText('We aim to help movie lovers make informed decisions by providing in-depth, unbiased reviews. Our goal is to celebrate cinema while fostering a community of passionate film enthusiasts.');
});
