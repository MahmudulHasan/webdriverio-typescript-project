export const firstSuiteLocator = $("div[role='radiogroup'] label:nth-child(1)");
export const popUpTitleLocator = $("//h6[normalize-space()='Place an order?']");
export const suitesContinueButton = $('(//button[normalize-space()="Continue"])[2]');
export const suitesFirstContinueButton = $(`//button[contains(text(),"Continue")]`);
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