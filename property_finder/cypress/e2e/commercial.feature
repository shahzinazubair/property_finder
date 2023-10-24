Feature: Property Finder Tests

  Background:
    Given I open the Property Finder website

  Scenario: Click on commercial properties only checkbox and select "offices"
    When I select "villas" checkbox
    And I click on the search icon
    And I click on the "offices" category
    Then the total displayed results should match the API response
    And I verify the details of the first property
