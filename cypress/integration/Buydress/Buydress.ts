import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import homePageActions from '../pageObject/homePage/actions'
const homePage=new homePageActions();
const url = 'http://automationpractice.com/index.php'
Given('The user visits automationpractice page', () => {
  cy.visit(url)
})

When('The user hover over the {string} item', ()=>

{
  homePage.hoveroverMenuItem()
  homePage.clickAddToChartButton()
})

Then(`The user should see a popup opened with {string} title `,()=>{
  cy.contains('{string}')
 /* cy.get('.button-medium > span').contains('Proceed to checkout').click()
  cy.get('[class="shopping_cart"]').contains('Cart')
*/

})


