class HomePage {
    private loginLink = "#login2";
    private signUpLink = "#signin2";
    private logoutLink = "#logout2";
    private cartLink = "#cartur";
    private  welcomeUserName = "#nameofuser";

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
  