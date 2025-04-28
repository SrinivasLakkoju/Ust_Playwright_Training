import {expect, test} from "@playwright/test";

test('Opening product details are :', async ({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('watch');
    await page.locator('#nav-search-submit-button').click();
    //code to switch to new tab
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), 
        page.locator("xpath=//div[@class='a-section aok-relative s-image-tall-aspect']").first().click(), // Click the product
    ]);

    await newPage.waitForLoadState(); 
    await newPage.locator('#add-to-cart-button').click();
});