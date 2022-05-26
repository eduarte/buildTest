class SignUpPage {
  userNameInput = "#sign-username";
  passwordInput = "#sign-password";
  signUpButton = ".btn-primary";
  closeButton = ".btn-secondary";

  private typeUsername(username: string) {
    let input = cy.get(this.userNameInput);
    input.should("be.visible");
    input.clear();
    input.type(username);
  }

  private typePassword(password: string) {
    let input = cy.get(this.passwordInput);
    input.should("be.visible");
    input.clear();
    input.type(password);
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
