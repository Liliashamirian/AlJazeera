Feature: Verify Most Read section on the home page

  Scenario: Most Read section appears on the home page
    Given I am on the home page with desktop browser size
    Then I should see the Most Read section

  Scenario: Most Read section has 10 posts
    Given I am on the home page with desktop browser size
    Then I should see 10 posts in the Most Read section

  Scenario: Most Read section is not appearing on Mobile
    Given I am on the home page with mobile browser size
    Then the Most Read section should not be displayed

 Scenario: Bypass block menu item for "Most Read" is working on Desktop 
    Given I am on the home page with desktop browser size
    When I press the TAB key after clicking on the empty space next to the website logo
    And I click the "Skip to Most Read" option from the bypass block menu
    Then the URL should contain "/#most-read-container"
