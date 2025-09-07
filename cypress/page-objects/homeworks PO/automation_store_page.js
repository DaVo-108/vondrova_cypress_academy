import { AccountLoginPage } from "./account_login_page";

export class AutomationStorePage {
  constructor() {
    this.url = "https://automationteststore.com/";
    this.loginOrRegisterButton = "#customer_menu_top";
  }

  openEshop() {
    cy.visit(this.url);
    return this;
  }

  clickLoginOrRegister() {
    cy.get(this.loginOrRegisterButton).click();
    return new AccountLoginPage();
  }
}
