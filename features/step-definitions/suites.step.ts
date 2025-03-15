import { Then, When } from "@wdio/cucumber-framework";
import { getPageTitle, firstSuiteLocator, popUpTitleLocator, suitesContinueButton, suitesSaveButton, suitesFirstContinueButton } from "../pageobjects/suites.page";

Then("the user should be in {string} page", async(pageName:string) => {
    const pageTitle = await getPageTitle(pageName);
    await console.log("Page Title: ", pageTitle);
    expect(pageTitle).toEqual(pageName);
});

When("the user selects a suite", async() => {
    await firstSuiteLocator.waitForExist();
    await firstSuiteLocator.click();
});

When("the user clicks on the Continue button", async () => {
    await suitesFirstContinueButton.waitForEnabled();
    await suitesFirstContinueButton.click();
});


Then("the user clicks Continue button on the modal dialog", async () => {
    if(await popUpTitleLocator.isExisting()) {
        await console.log("order is not existing");
        await suitesContinueButton.waitForEnabled();
        await suitesContinueButton.click();
        await suitesSaveButton.waitForExist();
        await suitesSaveButton.click();
    } else {
        await console.log("order is existing");
        const createNewOrderRadioButton = $("//span[normalize-space()='Create new order']");
        await createNewOrderRadioButton.waitForExist();
        await createNewOrderRadioButton.click();
        await suitesContinueButton.waitForClickable();
        await suitesContinueButton.click();
        await suitesContinueButton.waitForExist({ reverse: true });
    }
});