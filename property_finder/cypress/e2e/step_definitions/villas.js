// Import the necessary commands from Cypress and Cucumber
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Define the step implementations

Given("I am on the Property Finder.bh website", () => {
  cy.visit("https://www.propertyfinder.bh/");
});

When('I select "{string}" under property type', (propertyType) => {
  cy.get('.property-type-dropdown').click();
  cy.contains(propertyType).click();
});

When('I go to Villas list', () => {
  cy.get('.villas-link').click();
});

When('I filter the price range to a maximum of {int} AED', (maxPrice) => {
  cy.get('.price-filter-input').type(maxPrice);
  cy.get('.apply-filter-button').click();
});

Then('I should see the total displayed property results matching the API response', () => {
  // Make an API request to get property results from the API
  cy.request('GET', 'https://api.propertyfinder.bh/properties?type=villas&maxPrice=300000')
    .its('body')
    .then((apiResponse) => {
      // Get the total count of properties from the API response
      const apiResultsCount = apiResponse.length;

      // Get the total count of displayed properties on the web page
      cy.get('.property-card').should('have.length', apiResultsCount);

      // You can add more assertions here if needed
    });
});
