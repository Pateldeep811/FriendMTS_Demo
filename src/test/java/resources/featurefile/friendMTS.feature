Feature: HomePageMenuTest
  As a user i should navigate to Services by click.

  Scenario: verify i should able to click on Contact Us
    Given I am on home page.
    When I click on Contact Us.
    Then I am navigated on Contact Us Page.

  Scenario Outline: verify i should navigate inside the About us page.
    Given I am on home page.
    When I mousehover on About us "<About us>"
    And I am navigated on About us page.
    Examples:
      | About us         |
      | Company overview |
      | Who we are       |
      | News & Resources |
      |  Events          |
      |  Customers       |

  Scenario: Verify the Display Message
    Given I am on home page.
    Then I will be able to see the Message "ASiD 4th Generation" on the page