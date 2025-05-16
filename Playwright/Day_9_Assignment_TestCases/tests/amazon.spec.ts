import { test, expect } from "./fixtures";
import { SellerPageClass } from "./sellerpage";

test.describe("Amazon Best Sellers", () => {

    test.beforeEach(async ({ sellerPage }) => {
        await sellerPage.gotoWebSite();
      });

    test("verify user on seller page", async ({ sellerPage }) => {
        await sellerPage.verifyUserOnSellerPage();
    })

    test("verify user on product page", async ({ sellerPage }) => {
        await sellerPage.clicktheBeautyProductBasedOnRank(1);
        await sellerPage.verifyUserOnProductPage();
    })


    test("verify user can navigate each departement", async ({ sellerPage }) => {
        setTimeout(async () => {
            await sellerPage.validateEachDepartmentNavigateCorrectPage();
        }, 60000);
    })


    test("verify user Click All and navigate to Sign In page", async ({ sellerPage , signInPage}) => { 
        await sellerPage.userClickAllButton();
        await sellerPage.UserNavigateToSignInPage();
        await signInPage.verifyUserOnSignInPage();
    })

    const pincodeTests = [
        { pincode: "641402", expected: true },
        { pincode: "64140", expected: false },
        { pincode: "123345", expected: false },
        { pincode: "682001", expected: true },
    ];
    
    pincodeTests.forEach(({pincode, expected}) => {
        test(`verify user can enter pincode ${pincode}`, async ({ sellerPage }) => {
            await sellerPage.userClickLocationBar();
            await sellerPage.userEnterPincode(pincode);
            await expect(await sellerPage.validatePincode()).toBe(expected);
        });
    });


    test("verify user can navigate each different slide bar", async ({ sellerPage }) => {
        await sellerPage.userClickSlideBar();
    })

    test("Validate user can click the correct dropdown option", async ({ sellerPage})=>{
        await sellerPage.userSelectDropdwon("Beauty");
    })

    test("verify search functionality working", async ({ sellerPage })=>{
        await sellerPage.userClickSearchBar();
        await sellerPage.fillDataInSearchbar("iphone");
        await sellerPage.userClickSearchIcon();
    })
    

})
