import { test, expect } from '@playwright/test';

// test('GitHub profile should load properly', async ({ page }) => {
//     await page.goto('https://github.com/aryan1403');
//     await expect(page).toHaveTitle(/aryan1403/);
// });

// test('Check if repositories section exists', async ({ page }) => {
//     await page.goto('https://github.com/aryan1403');
//     const reposTab = await page.getByRole('link', { name: 'Repositories' });
//     await expect(reposTab).toBeVisible();
// });

// test('Ensure profile name is visible', async ({ page }) => {
//     await page.goto('https://github.com/aryan1403');
//     const profileName = await page.locator('span[itemprop="name"]');
//     await expect(profileName).toBeVisible();
// });

test('Verify follow button exists', async ({ page }) => {
    await page.goto('https://github.com/aryan1403');
    const followButton = await page.locator('input[name="commit"]');
    await expect(followButton).toBeVisible();
});

// test('Check contributions graph is displayed', async ({ page }) => {
//     await page.goto('https://github.com/aryan1403');
//     const contributionsGraph = await page.locator('.js-yearly-contributions');
//     await expect(contributionsGraph).toBeVisible();
// });
