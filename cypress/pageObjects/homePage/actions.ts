
class HomePageActions{


    clickOnSignInButton(){
        cy.get('.login').contains('Sign in').click();
    }

    hoverOverMenuItem(){
        return cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line').trigger('mouseover').contains('Faded Short Sleeve T-shirts');
}

    clickAddToChartButton() {
        return cy.contains('a','Add to cart').click({force:true});

}
    clickProceedCheckButton(){
        cy.get('a').contains('Proceed to checkout').click();
    }

   }

export default HomePageActions 