import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import HomePageActions from "@pageObjects/homePage/actions";
import HomePageAssertions from "@pageObjects/homePage/assertions";
import ShoppingCartAssertions from "@pageObjects/shoppingCartSummaryPage/assertions"


const url = 'http://automationpractice.com/index.php'
const actionPage= new HomePageActions();
const assertionPage= new HomePageAssertions();
const shoppingAssertion = new ShoppingCartAssertions();



Given("The user visits automationPractice page", () => {
  cy.visit(url)
})

When('The user hover over the \'Faded Short Sleeve T-shirts\' item', ()=>
{
  actionPage.hoverOverMenuItem()
  
})

When ('The user clicks on the \'Add to Cart\' button',()=>{
  actionPage.clickAddToChartButton()
})

Then('The user should see a popup opened with \'Product successfully added to your shopping cart\' title',()=>{
  assertionPage.checkPopupModelIsOpen()
})



Given("The user visits the automationPractice page",()=>{
  

})

When ('The user clicks on the \'Add to Cart\' button',()=>{
  
})



When('The user clicks on the \'Proceed to checkout\' button',()=>{
  actionPage.clickProceedCheckButton()
  
})
Then('The user should see a new page with \'Your shopping cart\' title',()=>{
  assertionPage.checkShoppingCartSummeryIsOpen()
  
})
Then('The table should have product equal <productvalue>',()=>{
  shoppingAssertion.getShoppingCartColumnContent()
  
})




