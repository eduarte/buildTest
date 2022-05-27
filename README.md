# Automated Test for Build

The intention of the repo is to have a base framework using Cypress.IO as the automation framework. The framework has been created using TypeScript and in order to run it the user must install Node.JS (v16).

In order to install the framework run the following commands:

- `npm install`

After all dependencies were installed you will be able to run the test.

## UI TEST

UI Test are targeted to demonstrate the ability to automate using Cypress and Page Object Model to automate user interactions with the browser.

Using the following command you can run the tests against the [demo site](https://www.demoblaze.com/index.html#)

- `npm run cypress:open`
  - This command will open Cypress CLI and you will be able to select individual files.
- `npm run ui-test`
  - This command will run the UI test from the command line without opening the browser (in headless mode)


## API Test

The API Tests are intended to test the API Layer using Cypress to test different HTTP Methods such as POST, GET, PUT, DELETE

- `npm run api-test`
  - to run the test from the command line against [reqres.in](https://reqres.in/)
- `npm run api-test-heroku`
  - to run the test from the command line against [TODO AP](https://api-nodejs-todolist.herokuapp.com)
