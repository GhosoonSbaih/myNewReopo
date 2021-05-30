
class homePageActions{

    hoverOverMenuItem(){
        return cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line').contains('Faded Short Sleeve T-shirts');
}

    clickAddToChartButton() {
        return cy.contains('a','Add to cart').click({force:true});

}
    clickProceedCheckButton(){
        cy.get('a[class="btn btn-default button button-medium"]').click();
    }

   }

export default homePageActions 