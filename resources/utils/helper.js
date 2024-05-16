const { browser } = require('@wdio/globals')

async function waitForElementToBeDisplayed(item, waitInSeconds = 5) {
    await browser.waitUntil(
        async () => await item.isDisplayed(),
        {
            timeout: waitInSeconds,
            timeoutMsg: 'expected text to be different after 5s'
        }
    )
}

async function waitForElementsCountToBeGreaterThanZero(items, waitInSeconds = 5) {
    await browser.waitUntil(
        async () => await items.length > 0,
        {
            timeout: waitInSeconds,
            timeoutMsg: 'expected text to be different after 5s'
        }
    )
}

module.exports = { waitForElementToBeDisplayed, waitForElementsCountToBeGreaterThanZero };
