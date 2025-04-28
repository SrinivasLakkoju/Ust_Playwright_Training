import {expect, test} from "@playwright/test";

test('Opening product details are :', async ({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('watch');
    await page.locator('#nav-search-submit-button').click();
    const products = await page.locator("xpath=//div[@class='a-section aok-relative s-image-tall-aspect']/img").all();
    for(const product of products){
        expect(await product.getAttribute('alt')).toContain('Watch');
    }
    
});
