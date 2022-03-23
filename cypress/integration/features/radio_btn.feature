Feature: Automationpractice Page


    Scenario: Validate the states of specific radio buttons
        Given I access the Webdriveruniversity page
        When I'm on the Radio Buttons page
        And I check the lettuce
        Then Lettuce should be checked, Cabbage should be disabled and Pumpkin should not be checked