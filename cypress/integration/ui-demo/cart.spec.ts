import { v4 as uuidv4 } from "uuid";

import HomePage from "../../pages/homePage";
import PhonePage from "../../pages/phonePage";
import CartPage from "../../pages/cartPage";

const myuuid = uuidv4();
describe("Cart Page", function () {
  beforeEach(function () {
    cy.fixture("user").then((user) => {
      this.user = user;
    });
    cy.visit(Cypress.env("ui-url"));
  });

  describe("Validate Adding an Item to the Cart", function () {
    it("Add a Phone to the cart", function () {
      HomePage.clickPhone('Samsung galaxy s6');
      PhonePage.verifyPhoneName('Samsung galaxy s6');
      PhonePage.clickAddToCard();
      HomePage.clickCartLink();
      CartPage.verifyPhoneAddedToCart('Samsung galaxy s6');
    });
  });
});
