export class RegistrationPage {
  constructor() {
    this.firstnameInput = "#input-firstname";
    this.lastnameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.phoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.confirmPasswordInput = "#input-confirm";
    this.newsletterButton = ".col-sm-10 > :nth-child(1) > input";
    this.continueButton = ".pull-right > .btn";
  }

  typeFirstname(firstname) {
    cy.get(this.firstnameInput).type(firstname);
  }

  typeLastname(lastname) {
    cy.get(this.lastnameInput).type(lastname);
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
  }

  typePhone(phone) {
    cy.get(this.phoneInput).type(phone);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  typeConfirmPassword(password) {
    cy.get(this.confirmPasswordInput).type(password);
  }

  clickNewsletter() {
    cy.get(this.newsletterButton).click();
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }
}
