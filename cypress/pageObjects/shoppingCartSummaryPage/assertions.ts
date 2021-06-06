class ShoppingCartAssertions{

    getShoppingCartColumnContent(){
        cy.get('tbody').find("td").eq(0).should("contain","")
        cy.get('tbody').find("td").eq(1).should("contain","Faded Short Sleeve T-shirts")
        cy.get('tbody').find("td").eq(2).should("contain","In stock")
        cy.get('tbody').find("td").eq(3).should("contain","$16.5")
        cy.get('tbody').find(".cart_quantity_input").should("contain.value","1")
        cy.get('tbody').find("td").eq(5).should("contain","$16.5")



        

    }

}

export default ShoppingCartAssertions;