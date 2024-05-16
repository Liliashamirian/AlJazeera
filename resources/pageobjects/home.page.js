const { $ } = require('@wdio/globals')
const Page = require('./page');
const Helper = require('../utils/helper.js');

/**
 * locators and methods for Home page
 */
class HomePage extends Page {
    /**
     * Locators
     */
    get mostReadSectionTitle() {
        return $('#trending-articles-heading');
    }

    get mostReadSectionList() {
        return $$('.article-trending');
    }

    get bypassMenu() {
        return $('.bypass-block-links-container');
    }

    get skipToMostReadBtn() {
        return $(`a[href^='#most-read-container']`);
    }

    get emptyPlace() {
        return $('header[role="banner"]')
    }

    /**
     * Methods
     */


    async getMostReadPostsCount() {
        const posts = await this.mostReadSectionList;
        return posts.length;
    }

    async waitForMostReadSection() {
        await Helper.waitForElementsCountToBeGreaterThanZero(this.mostReadSectionList);
    }

    open(width, height) {
        return super.open('', width, height);
    }
}

module.exports = new HomePage();
