
class homePageActions{

    hoveroverMenuItem(){
        return cy.get('a[class="product-container"]').contains('Faded Short Sleeve T-shirts')
}

    clickAddToChartButton() {
        return cy.contains('Add to cart')

}


}

export default homePageActions 