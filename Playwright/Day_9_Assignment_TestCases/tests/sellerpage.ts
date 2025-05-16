import {expect, Locator, Page} from 'playwright/test';

export class SellerPageClass {
    private readonly productRank: Locator;
    private readonly addtocart: Locator;
    private readonly departmentlist : Locator;
    private readonly allButton: Locator;
    private readonly signInButton: Locator;
    private readonly location: Locator;
    private readonly applyButton: Locator;
    private readonly inputPincode: Locator;
    private readonly errorMsg : Locator;
    private slideBar: Locator;
    private dropdown : Locator;
    private searchBar: Locator;
    private readonly searchButton: Locator;

    constructor(public readonly page: Page) {
        this.page = page;
        this.productRank = this.page.locator('.a-section.a-spacing-mini._cDEzb_noop_3Xbw5');
        this.addtocart = this.page.locator('#add-to-cart-button');
        this.departmentlist = this.page.locator('div._p13n-zg-nav-tree-all_style_zg-browse-group__88fbz div');
        this.allButton = this.page.locator('a#nav-hamburger-menu');
        this.signInButton = this.page.locator('#hmenu-customer-name');
        this.location = this.page.locator('#glow-ingress-line1');
        this.applyButton = this.page.locator('#GLUXZipUpdate-announce');
        this.inputPincode = this.page.locator('#GLUXZipUpdateInput');
        this.errorMsg = this.page.locator('span#GLUXZipError');
        this.slideBar = this.page.locator('._p13n-zg-nav-tab-all_style_zg-tabs__EYPLq li');
        this.dropdown = this.page.locator('#searchDropdownBox');
        this.searchBar = this.page.locator('#twotabsearchtextbox');
        this.searchButton = this.page.locator('#nav-search-submit-button');
    }

    async gotoWebSite() {
        await this.page.goto('https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2');
    }

    async verifyUserOnSellerPage() {
        await expect(this.page).toHaveTitle("Amazon.in Bestsellers: The most popular items on Amazon");
    }

    async clicktheBeautyProductBasedOnRank(rank:number) {
        await this.productRank.nth(rank).click();
    }

    async verifyUserOnProductPage() {
        await expect(await this.addtocart).toBeVisible();
    }

    async validateEachDepartmentNavigateCorrectPage() {
        const departmentCount = await this.departmentlist.count();
        console.log('Number of departments:', departmentCount);
        for (let i = 0; i < departmentCount; i++) {
            await this.departmentlist.nth(i).click();
            await this.page.waitForLoadState();
            await expect(await this.page.locator('#zg_banner_text')).toBeVisible();
            await this.page.goBack();
        }
    }
    
    async userClickAllButton() {
        await this.allButton.click();
    }

    async UserNavigateToSignInPage() {
        await this.signInButton.nth(0).click();
    }

    async userClickLocationBar(){
        await this.location.click();
    }

    async userEnterPincode(pincode:string) {
        await this.inputPincode.clear();
        await this.inputPincode.fill(pincode);
        await this.applyButton.click();
    }

    async validatePincode(): Promise<boolean> {
        await this.page.waitForTimeout(5000);
        let errorMessage = await this.errorMsg.getAttribute('style');
        return errorMessage === "display: inline;" ? false: true;
    }

    async userClickSlideBar() {
        const slides = await this.slideBar.count();
        for(let i=0; i < slides; i++){
            let before = await this.slideBar.nth(i).textContent();
            await this.slideBar.nth(i).click();
            await this.page.waitForLoadState();
            let text = await this.page.locator(".a-column.a-span8 h2").first().textContent();
            expect(text).toContain(before);       
        }
        
    }
    
    async userSelectDropdwon(value:string){
        await this.dropdown.selectOption(value);
        const selectedvalue = await this.page.locator('span#nav-search-label-id').textContent();
        expect(value).toStrictEqual(selectedvalue);
    }

    async userClickSearchBar(){
        await this.searchBar.click();
    }

    async fillDataInSearchbar(value:string){
        await this.searchBar.fill(value);
    }

    async userClickSearchIcon(){
        await this.searchButton.click();
    }

}