import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import HomePageActions from '@pageObjects/homePage/actions';
import LoginPageAssertions from '@pageObjects/LoginPage/assertions';
import LoginPageActions from "@pageObjects/LoginPage/actions";


const url = 'http://automationpractice.com/index.php';
const actionPage = new HomePageActions();
const loginAssertions = new LoginPageAssertions();
const loginActions = new LoginPageActions();


// 1st Scenario : Login automationpractice website
Given("The user visits automationPractice page",()=>{
cy.visit(url);
});

When("The user clicks on 'Sign in' button",()=>{
    actionPage.clickOnSignInButton();
});

Then("The user should see new page with 'Login - My Store' title",()=>{
    loginAssertions.checkLoginTitlePage();
});


//3rd Scenario : Login with wrong Email 

Given("The user clicks on 'Sign in' button and Login page opened",()=>{

});

When("The user types 'ghosoonsbaih96@gmail.com' in the Email field",()=>{
    loginActions.getCorrectEmail();
});

When("The user types 'ghosoon123' in the Password field",()=>{
    loginActions.getFailPassword();
});
When('The user clicks on the \'Sign in\' button or clicks \'Enter\'',()=>{
    loginActions.clickOnSignIn()
});
Then('The user should not be able to login into the system And the "Authentication failed." message should be appear',()=>{

});