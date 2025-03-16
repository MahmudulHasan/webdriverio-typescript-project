export const pageTitle = $("#__next h4");

export const continueButtonLocator = (button: string) => $(`//button[contains(text(),"${button}")]`);

export async function clickEventDate(date: string) {
    const eventDate = $(`//button[normalize-space()="${date.split(" ")[0]}"]`);
    await eventDate.waitForExist();
    await eventDate.click();
}

export async function clickOnEvent(eventName:string) {
    const eventLocator = $(`//span[normalize-space()="${eventName}"]`);
    await eventLocator.click();
}

export async function clickOnButton(buttonName:string) {
    const buttonLocator = $(`//button[normalize-space()="${buttonName}"]`);
    await buttonLocator.waitForExist();
    await buttonLocator.waitForEnabled();
    console.log("button name " + await buttonLocator.getText());
    await buttonLocator.click();
    if(buttonName != "Continue" && buttonName != "Save Pre-Order" && buttonName != "Cancel Order") {
        await buttonLocator.waitForExist({ reverse: true });
    }
}


