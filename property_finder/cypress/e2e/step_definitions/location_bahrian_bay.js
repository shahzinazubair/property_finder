import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Background step
Given("I am on the Property Finder.bh website", () => {
  cy.visit("https://www.propertyfinder.bh/");
});

When('I search for "{string}" location under the search box', (location) => {
  // Type the location in the search input
  cy.get('.search-input').type(location);
});

When('I select the first location from the search results matching the searched text', () => {
  // Click on the first suggestion in the search results
  cy.get('.search-suggestions-list li').first().click();
});

When('I click on the search icon', () => {
  // Click the search icon
  cy.get('.search-icon').click();
});

Then('I select the first property from the list and verify that the "Available from date" is not empty', () => {
  // Click on the first property from the list
  cy.get('.property-card').first().click();

  // Verify that the "Available from date" is not empty
  cy.get('.property-available-date').should('not.be.empty');
});
