export class HeaderEshop {
  constructor() {
    this.url = "https://tredgate.com/eshop/";
    this.logo = "#logo";
  }
  openEshop() {
    cy.visit(this.url);
    return this;
  }
  clickLogo() {
    cy.get(this.logo).click();
    return this;
  }
}
