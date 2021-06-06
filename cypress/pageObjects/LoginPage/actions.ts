class LoginPageActions{
    getCorrectEmail(){
        cy.get('#email').type('ghosoonsbaih96@gmail.com');
       
    }
    getFailedEmail(){
        cy.get('#email').type('ghosoonsbaih@gmail.com');

    }
    getPassword(){
        cy.get('#passwd').type('ghosoon@123');
    }
    getFailPassword(){
        cy.get('#passwd').type('ghosoon123');
    }
    clickOnSignIn(){
        cy.get('#SubmitLogin').contains('Sign in').click()
    }


}

export default LoginPageActions;