const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('chai')
const HomePage = require('../pageobjects/home.page');
const livePage = require('../pageobjects/live.page');

const pages = {
    home: HomePage,
    live: livePage
}

Given(/^I am on the (\w+) page with ([^"]*) browser size$/, async (page, device) => {
    if (device === 'mobile') {
        await browser.setWindowSize(375, 812);
    } else {
        await browser.setWindowSize(1920, 1080);
    }
    await pages[page].open()
});

Then(/^I should see the Most Read section$/, { timeout: 2 * 60000 }, async () => {
    const isMostReadVisible = await HomePage.mostReadSectionTitle.isDisplayed()
    expect(isMostReadVisible).to.equal(true);
});

Then(/^I should see (\d+) posts in the Most Read section$/, { timeout: 2 * 60000 }, async (expectedCount) => {
    const actualCount = await HomePage.getMostReadPostsCount();
    expect(actualCount).to.equal(parseInt(expectedCount));
});

Then(/^the Most Read section should not be displayed$/, async () => {
    const isMostReadVisible = await HomePage.mostReadSectionTitle.isExisting()
    expect(isMostReadVisible).to.equal(false);
});

When(/^I press the TAB key after clicking on the empty space next to the website logo$/, async () => {
    await HomePage.emptyPlace.click();
    await browser.keys('Tab');
    const isBypassMenuVisible = await HomePage.bypassMenu.isDisplayed();
    expect(isBypassMenuVisible).to.equal(true);
});

When(/^I click the "Skip to Most Read" option from the bypass block menu$/, async () => {
    await HomePage.skipToMostReadBtn.click();
});

Then(/^the URL should contain "([^"]*)"$/, async (expectedUrlFragment) => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.contain(expectedUrlFragment);
});

Then(/^I should see the Player$/, { timeout: 2 * 60000 }, async () => {
    const isMostReadVisible = await livePage.getPlayer.isDisplayed();
    expect(isMostReadVisible).to.equal(true);
});

Then(/^I should see the Switch Player Button$/, { timeout: 2 * 60000 }, async () => {
    const isMostReadVisible = await livePage.getSwitchPlayer.isDisplayed();
    expect(isMostReadVisible).to.equal(true);
});