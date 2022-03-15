Feature: Automationpractice Page


    Scenario Outline: Test registration user
        Given I access the Automationpractice page
        When I go to Sign in page, enter email and click Create an account <email>
        And I fill in all the required fields
        And I click on the register button
        Then User should be registered and can log in and log out of that account <email>

        Examples:
            | email            |
            | test24@test.test |
            | test25@test.test |
            | test26@test.test |

