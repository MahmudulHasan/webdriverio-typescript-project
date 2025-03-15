import { Then, When } from "@wdio/cucumber-framework";
import { addOneItemFromEachCategory, openCart, suitePartnerPageTitle } from "../pageobjects/suite-partner.page";

When("the user adds one item from each category", async() => {
    await addOneItemFromEachCategory();
});

Then("the user should be in the {string} page", async (page:string) => {
    await suitePartnerPageTitle.waitForExist();
    await expect(suitePartnerPageTitle).toHaveText(page);
});

When("the user opens the cart", async () => {
    await openCart();
});