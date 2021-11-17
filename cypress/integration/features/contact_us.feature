Feature: WebdriverUniversity Login Page

    Scenario Outline: Test Login by multiple examples
        Given I access contact us page
        When I enter a first name <firstname>
        And I enter a last name <lastname>
        And I enter a email <email>
        And I add comment <comment>
        And I click on the submit button
        Then I should be presented with the following message <message>

        Examples:
            | firstname   | lastname  | email              | comment  | message |
            | firstname1  | lastname1 | email1@email.email | comment1 | Error   |
            | firstname2  | lastname2 | email1@gmail.com   | comment2 | Thank   |
            | firstname3  | lastname  | email1@email.email | comment1 | Error   |
            | firstname4  | lastname  | email1@gmail.com   | comment2 | Thank   |
            | firstname5  | lastname  | email1@email.email | comment1 | Error   |
            | firstname6  | lastname  | email1@gmail.com   | comment2 | Thank   |
            | firstname7  | lastname  | email1@email.email | comment1 | Error   |
            | firstname8  | lastname  | email1@gmail.com   | comment2 | Thank   |
            | firstname9  | lastname  | email1@email.email | comment1 | Error   |
            | firstname10 | lastname  | email1@gmail.com   | comment2 | Thank   |
            | firstname11 | lastname  | email1@email.email | comment1 | Error   |
            | firstname12 | lastname  | email1@gmail.com   | comment2 | Thank   |
            | firstname13 | lastname  | email1@email.email | comment1 | Error   |
            | firstname14 | lastname  | email1@gmail.com   | comment2 | Thank   |

