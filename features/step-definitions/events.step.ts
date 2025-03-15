import { When } from '@wdio/cucumber-framework';
import {clickEventDate} from '../pageobjects/events.page.ts';

When("the user selects the event {string} from date {string}", async (eventName:string, eventDate:string) => {
    await clickEventDate(eventDate);
    const eventLocator = $(`//span[normalize-space()="${eventName}"]`);
    await eventLocator.click();
});

When("the user clicks on the CONTINUE button", async () => {
    const continueButtonLocator = $(`//button[contains(text(),"CONTINUE")]`);
    await continueButtonLocator.waitForEnabled();
    await continueButtonLocator.click();
    await continueButtonLocator.waitForExist({ reverse: true });
});
