import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the Property Finder.bh website", () => {
  cy.visit("https://www.propertyfinder.bh/");
});

When('I select "{string}" and click the search icon', (propertyType) => {
  cy.get('.property-type-dropdown').click();
  cy.contains(propertyType).click();
  cy.get('.search-icon').click(); // Assuming there's a search icon on the page
});

When('I select "{string}" category', (category) => {
  cy.contains(category).click();
});

Then('I should see the total displayed property results matching the API response', () => {
  // Make an API request to get property results from the API
  cy.request('GET', 'https://api.propertyfinder.bh/properties?type=commercial&category=offices')
    .its('body')
    .then((apiResponse) => {
      // Get the total count of properties from the API response
      const apiResultsCount = apiResponse.length;

      // Get the total count of displayed properties on the web page
      cy.get('.property-card').should('have.length', apiResultsCount);
    });
});

Then('I verify the details of the first property', () => {
  // Get details of the first property from the web page
  cy.get('.property-card').first().within(() => {
    // Extract and assert the details you want to verify, e.g., price, description, location, etc.
    cy.get('.property-price').should('contain', 'Expected Price'); // Example assertion
    cy.get('.property-description').should('contain', 'Expected Description'); // Example assertion
    cy.get('.property-location').should('contain', 'Expected Location'); // Example assertion
    // Add more assertions for other details as needed
  });

  // You can also compare these details with the API response if available.
});

