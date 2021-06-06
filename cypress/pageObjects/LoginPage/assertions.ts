class LoginPageAssertions{

    checkLoginTitlePage(){
        cy.title().should('eq','Login - My Store');

}

    checkAccountTitle(){
        cy.title().should('include','My account - My Store');
    }



}
export default LoginPageAssertions;