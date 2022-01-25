# Dionysus Override Tool

## Overview

This is a front-end testing tool, which allows developers to visualise the list of overrides which are availalbe for a given page of the *Hotels.com* website. These
overrides are essentially mock JSON files, which allow you to replicate certain back-end conditions, whilst testing out front-end changes.  This application can run
on any browser or operation system. 

## Tech Stack

- Node.js
- React
- Bulma
- Axios
- Jest
- Puppeteer

## Running the Application

In order to use this application, you must have a *Dionysus Light Server* running locally on your machine.  To do this, open the 
*dionysusuipack* repo and enter the command:
#### `npm run server`

This will start the server on [http://localhost:8080](http://localhost:8080)

In order to run this application, you need to first install the required dependencies:
#### `npm install`

Then run the following command in order to start the application:
#### `npm start`

This will start the React server on [http://localhost:3000](http://localhost:3000).
## Test Suite

This application contains a wide-ranging test suite, including snapshot tests, UI tests, unit tests and automated E2E testing.  In order
to run the test suite, simply enter the command:
#### `npm test`
