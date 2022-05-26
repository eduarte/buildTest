import { v4 as uuidv4 } from "uuid";

import SignUpPage from "../../pages/signupPage";
import HomePage from "../../pages/homePage";

const myuuid = uuidv4();
describe("Sign Up Page", function () {
  beforeEach(function () {
    cy.fixture("user").then((user) => {
      this.user = user;
    });
    cy.visit(Cypress.env("ui-url"));
    HomePage.clickSignUpLink();
  });

  describe("Success Message is Displayed", function () {
    it("When Entering Valid Credentials", function () {
      const now = Date.now();
      SignUpPage.fillSignUpForm(myuuid + this.user.email, this.user.password);
      SignUpPage.clickSignUpButton().then(() =>  {
        cy.on("window:alert", (alertText) => {
          expect(alertText).to.contain('Sign up successful.');
        });
      });
    });
  });
});
