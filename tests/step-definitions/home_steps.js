const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('chai')
const HomePage = require('../../resources/pageobjects/home.page');

const pages = {
    home: HomePage
}

Then(/^I should see the Most Read section$/, async () => {
    await HomePage.waitForMostReadSection();
    const isMostReadVisible = await HomePage.mostReadSectionTitle.isDisplayed()
    expect(isMostReadVisible).to.equal(true);
});

Then(/^I should see (\d+) posts in the Most Read section$/, async (expectedCount) => {
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