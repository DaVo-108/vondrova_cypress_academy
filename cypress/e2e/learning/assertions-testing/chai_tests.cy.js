import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests (Tests assertions)", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Has Text Assert", () => {
    cy.get(".form-title").should("have.text", "Login");
  });

  it.skip("Failing: Login header has text 'Login2", () => {
    cy.get(".form-title").should("have.text", "Login2");
  });

  it("Lost password link has text 'Password forgotten?'", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it('Login header has text "Login"', () => {
    let username = "username";
    new LoginPage().typeUsername(username);
    cy.get("#username").should("have.value", username);
  });

  it("Exercise - Email input in lost password page have value", () => {
    new LoginPage().clickPasswordForgotten().typeEmail("email");
    cy.get('input[placeholder="Email"]').should("have.value", "email");
  });

  it("Password input has form-control class", () => {
    cy.get("#password").should("have.class", "form-control");
  });

  it("Exercise - Login button has btn-info class", () => {
    cy.get('button[type="submit"]').should("have.class", "btn-info");
  });

  it("Login button is visible", () => {
    cy.get("[type='submit']").should("be.visible");
  });

  it("Exercise - Pmtool title is visible", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get(".navbar-brand").should("be.visible");
  });

  it("Login button exist", () => {
    cy.get("[type='submit']").should("exist");
  });

  it("Exercise - Lost password anchor exist", () => {
    cy.get("#forget_password").should("exist");
  });

  it("Username have placeholder 'Username'", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("Password have placeholder 'Password'", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });

  it("Alert not exist after Pmtool opened", () => {
    cy.get("#username").should("be.visible");
    cy.get(".alert-danger").should("not.exist");
  });

  it("Pmtool title is visible", () => {
    new LoginPage().login("cypress_zima_2024", "Zima2024Cypress");
    cy.get(".navbar-brand").should("be.visible");
  });
});
