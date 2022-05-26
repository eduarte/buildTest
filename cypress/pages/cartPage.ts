class CartPage {
    public verifyPhoneAddedToCart(phoneName: string){
        cy.contains(phoneName).should('be.visible');
    }
  }
  
  export default new CartPage();
  