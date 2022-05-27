class SignUpPage {
  private userNameInput = "#sign-username";
  private passwordInput = "#sign-password";
  private signUpButton = ".btn-primary";

  private typeUsername(username: string) {
    cy.get(this.userNameInput).should("be.visible");
    cy.get(this.userNameInput).clear();
    cy.get(this.userNameInput).type(username, {log: false});
  }

  private typePassword(password: string) {
    cy.get(this.passwordInput).should("be.visible");
    cy.get(this.passwordInput).clear();
    cy.get(this.passwordInput).type(password, {log: false});
  }

  public clickSignUpButton() {
    return cy.get(this.signUpButton).contains("Sign up").click();
  }

  public fillSignUpForm(username: string, password: string) {
    this.typeUsername(username);
    this.typePassword(password);
  }
}

export default new SignUpPage();
