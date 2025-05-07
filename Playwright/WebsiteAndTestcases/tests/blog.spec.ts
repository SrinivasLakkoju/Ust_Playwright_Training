import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/WebsiteAndTestcases/src/blog.html'); // Adjust the path/URL as needed
});

test('should render all blog posts with required elements', async ({ page }) => {
    const posts = await page.locator('.blog-post');
    await expect(posts).toHaveCount(3);
  
    for (let i = 0; i < 3; i++) {
      const post = posts.nth(i);
      await expect(post.locator('h2')).toBeVisible();
      await expect(post.locator('.blog-preview')).toBeVisible();
      await expect(post.locator('.read-more-btn')).toHaveText('Read More');
    }
  });
  test('should toggle content visibility on Read More / Read Less click', async ({ page }) => {
    const button = page.locator('.read-more-btn').first();
    const preview = page.locator('.blog-preview').first();
    const fullContent = page.locator('.blog-full-content').first();
  
    await expect(fullContent).toBeHidden();
    await expect(preview).toBeVisible();
  
    await button.click();
  
    await expect(fullContent).toBeVisible();
    await expect(preview).toBeHidden();
    await expect(button).toHaveText('Read Less');
  
    await button.click();
  
    await expect(fullContent).toBeHidden();
    await expect(preview).toBeVisible();
    await expect(button).toHaveText('Read More');
  });
  test('should show profile icon when user is logged in', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('loggedInUser', 'TestUser');
    });
    await page.reload();
  
    const profileIcon = page.locator('#profile-icon-container img');
    await expect(profileIcon).toHaveAttribute('alt', 'Profile');
    await expect(profileIcon).toBeVisible();
  
    const link = page.locator('#profile-icon-container a');
    await expect(link).toHaveAttribute('href', './profile.html');
    await expect(link).toHaveAttribute('title', 'TestUser');
  });
  test('each blog post toggles independently', async ({ page }) => {
    const buttons = page.locator('.read-more-btn');
    const fullContent1 = page.locator('#full-content-0');
    const fullContent2 = page.locator('#full-content-1');
  
    await buttons.nth(0).click();
    await expect(fullContent1).toBeVisible();
    await expect(fullContent2).toBeHidden();
  
    await buttons.nth(1).click();
    await expect(fullContent1).toBeVisible();
    await expect(fullContent2).toBeVisible();
  });
  test('subscription form shows success message on submit', async ({ page }) => {
    const form = page.locator('#subscribe-form');
    const message = page.locator('#subscribe-message');
  
    // Add form to DOM for testing, if not present
    await page.evaluate(() => {
      if (!document.getElementById('subscribe-form')) {
        const form = document.createElement('form');
        form.id = 'subscribe-form';
        form.innerHTML = `<input name="email" /><button type="submit">Subscribe</button>`;
        document.body.appendChild(form);
  
        const msg = document.createElement('div');
        msg.id = 'subscribe-message';
        msg.style.display = 'none';
        document.body.appendChild(msg);
      }
    });
  
    await page.fill('#subscribe-form input[name="email"]', 'user@example.com');
    await page.click('#subscribe-form button');
    await expect(message).toBeVisible();
    await expect(message).toHaveText('Subscription done!');
  });
          



