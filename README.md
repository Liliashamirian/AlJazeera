# # Automated Testing for Al Jazeera Website
This repository contains automated tests for the Al Jazeera website using CodeceptJS with WebDriver.


## Setup Instructions

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Ensure you have WebDriver installed and configured.
4. Customize the configuration in `codecept.conf.js` if necessary.

## Running Tests
##### To run tests for the Most Read section:
npx wdio --spec features/home.feature

#### To run tests for live page :
npx wdio --spec features/live.feature

#### To run all tests:
npx wdio --spec features/home.feature features/live.feature

## Generate Allure Report
1. Run - npm install @wdio/allure-reporter --save-dev
2. Add reporter config in wdio.conf.js
3. Run test and check Allure Results folder is generated
4. Install allure command line tool  npm install -g allure-commandline --save-dev
5. Run commands
##### commands:
1. allure generate allure-results // this will generate allure-report folder
2. allure open     // will start server and open report