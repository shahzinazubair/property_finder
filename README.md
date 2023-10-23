# Test Automation Scenarios README

## Table of Contents
- [Introduction](#introduction)
- [Scenario 1](#scenario-1)
- [Scenario 2](#scenario-2)
- [Scenario 3](#scenario-3)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Tests](#running-the-tests)
- [Test Results](#test-results)
- [Contributing](#contributing)

## Introduction

This document provides information about a set of test automation scenarios for the Property Finder website. The test scenarios are automated using the Cypress testing framework.

## Scenario 1

### Description
- Check the total displayed number of results for the "Villas" category with a price range of more than 300,000 AED per year.

### Steps
1. Starts on the Property Finder website.
2. Select "Villas" under the property type.
3. Go to the Villas list.
4. Filter the price range to a maximum of 300,000 AED.
5. Check that the total number of results from the API response matches the total displayed property results.

## Scenario 2

### Description
- Click on the "Commercial Properties Only" checkbox and select "offices."

### Steps
1. Starts on the Property Finder website.
2. Select the "Show Commercial Properties Only" checkbox and click on the search icon.
3. From the commercial property list returned, click on the "offices" category.
4. Check that the total number of results from the API response matches the total displayed property results.
5. Verify the details of the first property in the searched results, including price, description, location, size, title, and bathrooms.

## Scenario 3

### Description
- Search for a property by location in Bahrain Bay.

### Steps
1. Starts on the Property Finder website.
2. On the home page, search for the "Bahrain Bay" location under the search box.
3. Select the first location from the search results that matches the searched text.
4. Click on the search icon.
5. Select the first property from the list and verify that the "Available from date" is not empty.

## Prerequisites

- Node.js installed
- Cypress installed (you can install it using npm)

## Setup

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.

## Running the Tests

- Use the following command to run the tests:

```shell
npx cypress run
