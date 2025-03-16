export const pageTitle = $("#__next h4");

export const continueButtonLocator = (button: string) => $(`//button[contains(text(),"${button}")]`);

export async function clickEventDate(date: string) {
    const eventDate = $(`//button[normalize-space()="${date.split(" ")[0]}"]`);
    await eventDate.waitForExist();
    await eventDate.click();
}


