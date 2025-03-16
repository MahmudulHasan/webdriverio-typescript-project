import { clickOnButton } from "./events.page";

export const firstSuiteLocator = $("div[role='radiogroup'] label:nth-child(1)");
export const popUpTitleLocator = $("//h6[normalize-space()='Place an order?']");
export const suitesContinueButton = $('(//button[normalize-space()="Continue"])[2]');
export const suitesSaveButton = $('//button[normalize-space()="Save"]');


export async function getPageTitle(pageName:string): Promise<string> {
    let pageTitle = $("#__next h4");
    if(pageName != "My Events" && pageName!= "My Suites") {
        pageTitle = $("#__next h1");
    }
    await pageTitle.waitForExist();
    const pageTitleText = await pageTitle.getText();
    return pageTitleText;
}

export async function openSuitesPartnerFromSuites() {
    if(await popUpTitleLocator.isExisting()) {
        await suitesContinueButton.waitForEnabled();
        await suitesContinueButton.click();
        await suitesSaveButton.waitForExist();
        await suitesSaveButton.click();
    } else {
        const createNewOrderRadioButton = $("//span[normalize-space()='Create new order']");
        await createNewOrderRadioButton.waitForExist();
        await createNewOrderRadioButton.click();
        await suitesContinueButton.waitForClickable();
        await suitesContinueButton.click();
        await suitesContinueButton.waitForExist({ reverse: true });
    }
}

export async function selectFirstSuite() {
    await firstSuiteLocator.waitForExist();
    await firstSuiteLocator.click();
}