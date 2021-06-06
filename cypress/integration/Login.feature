
Feature: Automationpractice Page Login 

    I need Login automationpractice

Scenario: : Login automationpractice website

    Given The user visits automationPractice page
    When The user clicks on 'Sign in' button
    Then The user should see new page with 'Login - My Store' title

Scenario: Login with Correct Email and Password

    Given The user clicks on 'Sign in' button and Login page opened
    When The user types 'ghosoonsbaih96@gmail.com' in the Email field  
    And The user types 'ghosoon@123' in the Password field
    And The user clicks on the 'Sign in' button // or clicks 'Enter'
    Then The home page should be open



     


