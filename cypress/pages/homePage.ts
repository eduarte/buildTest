class HomePage {
    loginLink = "#login2";
    signUpLink = "#signin2";
    logoutLink = "#logout2";
    cartLink = "#cartur";
    welcomeUserName = "#nameofuser";

    public clickLogin(){
        cy.get(this.loginLink).click();
    }

    public clickSignUpLink(){
        cy.get(this.signUpLink).click();
    }

    public clickCartLink(){
        cy.get(this.cartLink).click();
    }

    public clickLogout(){
        cy.get(this.logoutLink).click();
    }
  
    public validateUserLogged(userName: string) {
        cy.get(this.welcomeUserName).should('be.visible').and('have.text', `Welcome ${userName}`);
    }

    public clickPhone(phoneName: string){
        cy.contains(phoneName).click();
    }
  }
  
  export default new HomePage();
  