export class HomePage {
  constructor() {
    this.url = "https://tredgate.com/eshop/";
    this.accountButton = ".dropdown > .dropdown-toggle > .fa";
    this.registerButton = ".dropdown-menu > :nth-child(1) > a";
  }
  openHomePage() {
    cy.visit(this.url);
  }

  clickAccount() {
    cy.get(this.accountButton).click();
  }
  clickRegister() {
    cy.get(this.registerButton).click();
  }
}
