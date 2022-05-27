import LoginPage from "../../pages/loginPage";
import HomePage from "../../pages/homePage";

describe("Sign Up Page", function () {
  beforeEach(function () {
    cy.fixture("user").then((user) => {
      this.user = user;
    });
    cy.visit(Cypress.env("ui-url"));
    HomePage.clickLogin();
  });

  describe("Validate Welcome User Name", function () {
    it("When Entering Valid Credentials", function () {
      LoginPage.fillLoginForm(this.user.email, this.user.password);
      HomePage.validateUserLogged(this.user.email);
    });
  });
});
