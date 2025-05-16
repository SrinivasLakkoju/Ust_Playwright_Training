import {test as base, expect} from '@playwright/test';
import { SellerPageClass } from "./sellerpage";
import { SignInPageClass } from './signInPage';


type Fixtures = {
    sellerPage: SellerPageClass;
    signInPage: SignInPageClass;
}
export const test = base.extend<Fixtures>({
    sellerPage: async ({page}, use) => {
        const sellerPage = new SellerPageClass(page);
        await use(sellerPage);
    },

    signInPage: async({page}, use)=>{
        const signInPage = new SignInPageClass(page);
        await use(signInPage);
    }


});

export { expect } from '@playwright/test';