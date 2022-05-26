# Automated Test for Build

This repo contains 2 different approaches of testing UI. and API

#UI TEST

UI Test are targeted to demonstrate the ability to automate using Cypress and Page Object Model

In order to run the test you can run it with 2 different commands:

`npm cypress:open` and select the test under ui-demo
`npm run run-ui-test` to run the test from the command line

In the other hand, using Cypress to automate the API, I have added 2 different API to test different HTTP Methods such as POST, GET, PUT, DELETE


`npm run run-api-test` to run the test from the command line against `https://reqres.in/`

`npm run run-api-test-heroku` to run the test from the command line against `https://api-nodejs-todolist.herokuapp.com`
