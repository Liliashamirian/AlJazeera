Feature: Verify Player and Player button in live page

  @desktop
  Scenario: Most Read section appears on the home page
    Given I am on the live page with 1920 and 1080 browser size
    Then I should see the Player
    Then I should see the Switch Player Button
