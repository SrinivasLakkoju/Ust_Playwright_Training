import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class SignInPageClass {
    private readonly continue: Locator;

    constructor(public readonly page: Page) {
        this.page = page;
        this.continue = this.page.locator('.a-button-input');
    }

    async verifyUserOnSignInPage() {
        await expect(await this.continue).toBeVisible();
        
    }
}