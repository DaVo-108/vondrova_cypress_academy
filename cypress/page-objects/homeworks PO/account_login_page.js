export class AccountLoginPage {
  constructor() {
    this.continueButton = "#accountFrm > fieldset > .btn";
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }
}
