const addToOrderButton = $('[data-testid="add-to-order-button"]');
const viewCartButton = $('[data-test-id="view-cart-btn"]');

export async function addOneItemFromEachCategory(): Promise<void> {
    const category = $("div[id*='category-'] a:nth-child(1)");
    await category.waitForExist();
    const categoryFirstItemArray = browser.$$("div[id*='category-'] a:nth-child(1)");
    for (let i = 0; i < await categoryFirstItemArray.length; i++) {
        await category.waitForExist();
        const isInViewport = await categoryFirstItemArray[i].isDisplayed({ withinViewport: true });
        if (!isInViewport) {
            await categoryFirstItemArray[i].scrollIntoView();
        }
        await categoryFirstItemArray[i].click();
        await addToOrderButton.waitForExist();
        await addToOrderButton.click();
        await category.waitForExist();
    }
}

export async function openCart(): Promise<void> {
    console.log("suite-partner.page.ts: openCart");
    await viewCartButton.waitForExist();
    await viewCartButton.click();
    await viewCartButton.waitForExist({ reverse: true });
}