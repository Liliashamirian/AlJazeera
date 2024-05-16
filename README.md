# # Automated Testing for Al Jazeera Website
This repository contains automated tests for the Al Jazeera website using CodeceptJS with WebDriver.


## Setup Instructions

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Ensure you have WebDriver installed and configured.

## Running Tests
##### To run tests for the Most Read section:
npx wdio --spec tests/features/home.feature
npm run test --  --spec=tests/features/home.feature

#### To run tests for live page :
npm run test --  --spec=tests/features/live.feature

#### To run all tests:
npm run test

#### To run tests with tags:
npm run test:desktop 
npm run test:mobile 

## Generate Allure Report
1. Run - npm install @wdio/allure-reporter --save-dev
2. Add reporter config in wdio.conf.js
3. Run test and check Allure Results folder is generated
4. Install allure command line tool  npm install -g allure-commandline --save-dev
5. Run commands
##### commands:
1. allure open     // allure generate allure-results --clean -o allure-report