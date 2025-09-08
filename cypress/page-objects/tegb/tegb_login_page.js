import { customElement } from "../../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";

export class TegBLoginPage {
  constructor() {
    this.url = "http://localhost:3001/";
    this.usernameInput = customElement('[data-testid="username"]');
    this.passwordInput = customElement('[data-testid="password"]');
    this.loginButton = customElement('[data-testid="log_in"]');
    // pokud voláme new TegBLoginPage opakovaně, dochází k duplicitnímu nastavení interceptu, pokud to tak je, můžeme intercept přidaat přímo do testu do horní části před kroky, nebo si udělat svoji vlastní f-ci, která nám bude ověřovat, zda je intercept nastavený
    cy.intercept("/auth/login").as("login_api");
  }
  openTegB() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }
  clickLogin() {
    this.loginButton.click();
    cy.wait("@login_api");
    return new DashboardPage();
    // TODO: Add return value for Dashboard
  }
  // slučovací metoda
  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    return this.clickLogin();
  }
  // TODO: Add return value for Dashboard
}
