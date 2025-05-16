import {test, expect} from '@playwright/test';


test('Validate the title', async ({page}) => {
    await page.goto("https://www.wikipedia.org/");
    await expect(page).toHaveTitle("Wikipedia");
})


test('Validate the search bar', async ({page}) => {
    await page.goto("https://www.wikipedia.org/");
    const searchBar = await page.locator("#searchInput");
    await expect(searchBar).toBeVisible();
})

test("Validate the search 'docker' reach that page", async ({page}) => {
    await page.goto("https://www.wikipedia.org/");
    const searchBar = await page.locator("#searchInput");
    await expect(searchBar).toBeVisible();
    await searchBar.fill("docker");
    await searchBar.press('Enter');
    await expect(page).toHaveTitle("Docker - Wikipedia");
})


test("User verify the 'standard' section", async ({page}) => {
    await page.goto("https://www.wikipedia.org/");
    const searchBar = await page.locator("#searchInput");
    await expect(searchBar).toBeVisible();
    await searchBar.fill("docker");
    await searchBar.press('Enter');
    await page.locator("#skin-client-pref-vector-feature-custom-font-size-value-1").isChecked();
})


test("Verify the user can Navigete 'Donate' page", async ({page}) => {
    await page.goto("https://www.wikipedia.org/");
    const searchBar = await page.locator("#searchInput");
    await expect(searchBar).toBeVisible();
    await searchBar.fill("python");
    await searchBar.press('Enter');
    const donateBtn = await page.locator("//li[@id='pt-sitesupport-2']//span");
    await expect(donateBtn).toBeVisible();
    await donateBtn.click();
    await expect(page).toHaveTitle("Make your donation now - Wikimedia Foundation");
})