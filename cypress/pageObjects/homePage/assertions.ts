    class HomePageAssertions{

    checkPopupModelIsOpen(){
        return cy.get('.layer_cart_product > h2').should('contain','Product successfully added to your shopping cart');
    
}

checkShoppingCartSummeryIsOpen(){
        return cy.get('[class="navigation_page"]').should('contain','Your shopping cart');
    }

}

export default HomePageAssertions