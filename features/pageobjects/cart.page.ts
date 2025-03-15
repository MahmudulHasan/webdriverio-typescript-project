export const creditCartLocator = $("(//div[contains(@class,'adyen-checkout__payment-method__header')])[2]");
const iFrameCardNumberLocator = $('[class="js-iframe"][title="Iframe for secured card number"]');
const iFrameExpiryDateLocator = $('[class="js-iframe"][title="Iframe for secured card expiry date"]');
const iFrameCvcLocator = $('[class="js-iframe"][title="Iframe for secured card security code"]'); 
const cardNumberLocator = $("//input[contains(@id, 'adyen-checkout-encryptedCardNumber')]");
const expiryDateLocator = $("//input[contains(@id, 'adyen-checkout-encryptedExpiryDate')]");
const cvcLocator = $("//input[contains(@id, 'adyen-checkout-encryptedSecurityCode')]");
const cardHolderLocator = $("//input[contains(@id, 'adyen-checkout-holderName')]");
export const startOrderLocator = $("//button[normalize-space()='Start Order']");
export const savePreOrderButton = $("//button[normalize-space()='Save Pre-Order']");

export const checkOutButtonLocator = $('[class="adyen-checkout__button__content"]');
import * as cardInfo from "../data/card-info.json";
import { getDecryptedValue } from "./login.page";

export async function sumOfAllItem(): Promise<number> {
    const itemPriceLocatorArray = browser.$$('[data-testid="item-subtotal"]');
    let sumOfItem = 0;
    for (let i = 0; i < await itemPriceLocatorArray.length; i++) {
        const itemPrice = await itemPriceLocatorArray[i].getText();
        sumOfItem += parseFloat(itemPrice.replace("$", ""));
    }
    return sumOfItem;
}

export async function subTotalAmount(): Promise<number> {
    const subTotalLocator = browser.$$("ul li div:nth-child(2)");
    const subTotal = await subTotalLocator[0].getText();
    return parseFloat(subTotal.replace("$", ""));
}

export async function orderTotalAmount(): Promise<number> {
    const orderTotalLocator = browser.$$("ul li div:nth-child(2)");
    const orderTotal = await orderTotalLocator[await orderTotalLocator.length-1].getText();
    return parseFloat(parseFloat(orderTotal.replace("$", "")).toFixed(2));
}

export async function enterCardDetails() {
    await iFrameCardNumberLocator.waitForExist();
    await browser.switchFrame(iFrameCardNumberLocator);
    await cardNumberLocator.setValue(getDecryptedValue(cardInfo.card_number));
    await browser.switchToParentFrame();
    await iFrameExpiryDateLocator.waitForExist();
    await browser.switchFrame(iFrameExpiryDateLocator);
    await expiryDateLocator.setValue(getDecryptedValue(cardInfo.expiry_date));
    await browser.switchToParentFrame();
    await iFrameCvcLocator.waitForExist();
    await browser.switchFrame(iFrameCvcLocator);
    await cvcLocator.setValue(getDecryptedValue(cardInfo.cvc));
    await browser.switchToParentFrame();
    await cardHolderLocator.setValue(getDecryptedValue(cardInfo.name_on_card));
}

export async function sumOfAllTaxAndFee(): Promise<number> {
    const taxLocatorArray = browser.$$('ul li div:nth-child(2)');
    let sumOfTaxAndFee = 0;
    for (let i = 0; i < await taxLocatorArray.length-1; i++) {
        const tax = await taxLocatorArray[i].getText();
        sumOfTaxAndFee += parseFloat(tax.replace("$", ""));
    }
    return parseFloat(sumOfTaxAndFee.toFixed(2));
}
