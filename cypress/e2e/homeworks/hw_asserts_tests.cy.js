import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login Page Tests - Mocha, Chai", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it('Username has placeholder "Username"', () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it('Password has placeholder "Password"', () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });

  it('Login page has text "Remember me"', () => {
    cy.get(".checkbox").should("contain.text", "Remember Me");
  });

  it('Submit button has text "Login"', () => {
    cy.get(".btn").should("have.text", "Login");
  });

  it('Login page has text "Password forgotten"', () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it("Login page has visible logo", () => {
    cy.get("img[title='TEG Project Management']").should("be.visible");
  });
});
