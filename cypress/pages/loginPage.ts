class LoginPage {
  userNameInput = "#loginusername";
  passwordInput = "#loginpassword";
  loginButton = ".btn-primary";
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

  private clickLoginButton() {
    return cy.get(this.loginButton).contains("Log in").click();
  }

  public fillLoginForm(username: string, password: string) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLoginButton();
  }
}

export default new LoginPage();
