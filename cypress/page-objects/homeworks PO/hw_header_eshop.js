import { HomePageEshop } from "./hw_homepage_eshop";

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
    cy.get(this.logo).should("be.visible").click();
    return new HomePageEshop();
  }
}
