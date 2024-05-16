const { $ } = require('@wdio/globals')
const Page = require('./page');

class LivePage extends Page {
    get getPlayer() {
        return $('#vjs_video_3_html5_api');
    }

    get getSwitchPlayer() {
        return $('#liveStreamPlayerHelpButton');
    }

    open(width, height) {
        return super.open('live', width, height);
    }

}
module.exports = new LivePage();