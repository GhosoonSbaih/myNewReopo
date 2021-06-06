Feature: Automationpractice Page Failed Login 


 I will enter wrong Email to sure don't move user to account page


Scenario: : Login automationpractice website

    Given The user visits automationPractice page
    When The user clicks on 'Sign in' button
    Then The user should see new page with 'Login - My Store' title


  Scenario: Login with Failed Email

    Given The user clicks on 'Sign in' button and Login page opened
    When The user types 'ghosoonsbaih@gmail.com' in the Email field 
    And The user types 'ghosoon@123' in the Password field
    And The user clicks on the 'Sign in' button or clicks 'Enter'
    Then The user should not be able to login into the system And the "Authentication failed." message should be appear

 
 