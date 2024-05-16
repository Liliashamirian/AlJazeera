Feature: Verify Most Read section on the home page

  @desktop
  Scenario: Most Read section appears on the home page
    Given I am on the home page with 1920 and 1080 browser size
    Then I should see the Most Read section

  @desktop
  Scenario: Most Read section has 10 posts
    Given I am on the home page with 1920 and 1080 browser size
    Then I should see 10 posts in the Most Read section

  @mobile
  Scenario: Most Read section is not appearing on Mobile
    Given I am on the home page with 375 and 812 browser size
    Then the Most Read section should not be displayed

  @desktop
  Scenario: Bypass block menu item for "Most Read" is working on Desktop
    Given I am on the home page with 1920 and 1080 browser size
    When I press the TAB key after clicking on the empty space next to the website logo
    And I click the "Skip to Most Read" option from the bypass block menu
    Then the URL should contain "/#most-read-container"
