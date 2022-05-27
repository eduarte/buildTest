class LoginPage {
  private userNameInput = "#loginusername";
  private passwordInput = "#loginpassword";
  private loginButton = ".btn-primary";
  private closeButton = ".btn-secondary";

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
