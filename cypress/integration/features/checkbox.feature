Feature: Automationpractice Page


    Scenario: Validate the states of specific radio buttons
        Given I access the Webdriveruniversity page
        When I'm on the Checkbox page
        And I check the first checkbox
        And I uncheck all the checkboxes
        Then I check all the checkboxes and confirm that they are all checked