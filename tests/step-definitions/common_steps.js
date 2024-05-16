const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('chai')
const HomePage = require('../../resources/pageobjects/home.page');
const livePage = require('../../resources/pageobjects/live.page');

const pages = {
    home: HomePage,
    live: livePage
}


Given(/^I am on the (\w+) page with (\d+) and (\d+) browser size$/, async (page, width, height) => {
    await pages[page].open(width, height)
});

Then(/^the URL should contain "([^"]*)"$/, async (expectedUrlFragment) => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.contain(expectedUrlFragment);
});