import { Then, When } from "@wdio/cucumber-framework";
import { sumOfAllItem, subTotalAmount, creditCartLocator,
     enterCardDetails, checkOutButtonLocator, startOrderLocator, 
     savePreOrderButton,
     sumOfAllTaxAndFee,
     orderTotalAmount} from "../pageobjects/cart.page";

Then("the subtotal amount should be equal to the sum of the items in the cart", async () => {
    expect(await sumOfAllItem()).toEqual(await subTotalAmount());
});

Then("the order total amount should be equal to the sum of all the taxes and fees", async () => {
    expect(await sumOfAllTaxAndFee()).toEqual(await orderTotalAmount());
})

When("the user selects payment by Credit Card", async () => {
    await creditCartLocator.waitForExist();
    await creditCartLocator.click();
});

When("the user pays with valid card details", async () => {
    await enterCardDetails();
    await checkOutButtonLocator.waitForEnabled();
    await checkOutButtonLocator.click();
    await startOrderLocator.waitForExist();
});

When("the user clicks on the Save Pre-Order button", async () => {
    await savePreOrderButton.waitForEnabled();
    await savePreOrderButton.click();
});