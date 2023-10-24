Feature: Search for property by location in Bahrain Bay

  Background:
    Given I am on the Property Finder.bh website

  Scenario: Search for property in Bahrain Bay
    When I search for "Bahrain Bay" location under the search box
    And I select the first location from the search results matching the searched text
    And I click on the search icon
    Then I select the first property from the list and verify that the "Available from date" is not empty
