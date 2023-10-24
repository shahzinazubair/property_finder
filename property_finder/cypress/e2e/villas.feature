Feature: Checking total displayed results for Villas with a price range > 300,000 AED/year

  Scenario: Verify the total displayed results
    
    Given I am on the Property Finder.bh website
    When I select "Villas" under property type
    And I navigate to Villas list
    And I filter by a price range of more than 300,000 AED/year
    Then the total API response matches the total displayed property results
