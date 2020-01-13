Feature: CricinfoHomePage LHS and RHS tests

    Background:
        Given I'm a Cricinfo user

    Scenario: Verify Cricinfo Home page title
        When I landed to the cricinfo home page
        Then I expect the title should match
