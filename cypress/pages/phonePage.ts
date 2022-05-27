class PhonePage {
    private phoneTitleName = ".name";
    private addToCardButton = '.btn-success';

    public verifyPhoneName(phoneName: string){
        cy.get(this.phoneTitleName).should('be.visible').and('have.text', phoneName)
    }

    public clickAddToCard(){
        cy.get(this.addToCardButton).click();
    }

  }
  
  export default new PhonePage();
  