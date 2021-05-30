import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import homePageActions from 'cypress/pageObject/homePage/actions'
import homePageAssertions from 'cypress/pageObject/homePage/assertions'



const url = 'http://automationpractice.com/index.php'
const homePage= new homePageActions()
const homePageAss= new homePageAssertions()



Given("The user visits automationPractice page", () => {
  cy.visit(url)
})

When('The user hover over the \'Faded Short Sleeve T-shirts\' item', ()=>
{
  homePage.hoverOverMenuItem()
  
})

When ('The user clicks on the \'Add to Cart\' button',()=>{
  homePage.clickAddToChartButton()
})

Then('The user should see a popup opened with \'Product successfully added to your shopping cart\' title',()=>{
  homePageAss.checkPopupModelIsOpen()
  
})



Given("The user visits the automationPractice page",()=>{
  

})

When ('The user clicks on the \'Add to Cart\' button',()=>{
  
})

When('The Popup should be opened',()=>{
  
  
})

When('The user clicks on the \'Proceed to checkout\' button',()=>{
  homePage.clickProceedCheckButton()
  
})
Then('The user should see a new page with \'Your shopping cart\' title',()=>{
  homePageAss.checkShoppingCartSummeryIsOpen()
  
})




