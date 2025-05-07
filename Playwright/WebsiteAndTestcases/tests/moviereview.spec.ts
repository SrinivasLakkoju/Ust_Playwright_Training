import { test, expect } from '@playwright/test';

test.describe('Homestay Movie Review Page', () => {
  const url = 'http://127.0.0.1:5500/WebsiteAndTestcases/src/homestay.html'; // adjust if needed

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Should load all movies', async ({ page }) => {
    const movieCards = page.locator('.movie-card');
    await expect(movieCards).toHaveCount(4); // Based on the 4 movies in JS
  });

  test('Each movie should display name and image', async ({ page }) => {
    const firstCard = page.locator('.movie-card').first();
    await expect(firstCard.locator('img')).toBeVisible();
    await expect(firstCard.locator('h3')).not.toHaveText('');
  });

  test('Clicking review button opens the modal with correct title', async ({ page }) => {
    const firstButton = page.locator('.movie-card .review-btn').first();
    await firstButton.click();
    await expect(page.locator('#review-modal')).toBeVisible();
    await expect(page.locator('#modal-title')).toContainText('Review:');
  });

  test('Clicking star selects correct number of stars', async ({ page }) => {
    await page.locator('.movie-card .review-btn').nth(1).click(); // Open modal for second movie
    const thirdStar = page.locator('.star').nth(2); // 3rd star
    await thirdStar.click();

    // Check if 3 stars have class 'selected'
    const selectedStars = page.locator('.star.selected');
    await expect(selectedStars).toHaveCount(3);
  });

  test('Modal closes when clicking close button', async ({ page }) => {
    await page.locator('.movie-card .review-btn').first().click();
    await page.locator('.close-button').click();
    await expect(page.locator('#review-modal')).toBeHidden();
  });
});
