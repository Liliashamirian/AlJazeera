const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('chai')
const livePage = require('../../resources/pageobjects/live.page');

const pages = {
    live: livePage
}

Then(/^I should see the Player$/, async () => {
    const isMostReadVisible = await livePage.getPlayer.isDisplayed();
    expect(isMostReadVisible).to.equal(true);
});

Then(/^I should see the Switch Player Button$/, async () => {
    const isMostReadVisible = await livePage.getSwitchPlayer.isDisplayed();
    expect(isMostReadVisible).to.equal(true);
});