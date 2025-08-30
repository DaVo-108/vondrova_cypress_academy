import { HomePageEshop } from "./hw_homepage_eshop";

export class ProductIphone {
  constructor() {
    this.url =
      "https://tredgate.com/eshop/index.php?route=product/product&product_id=40";
    this.descriptionArea = ".intro";
    cy.get(this.descriptionArea).should("contain", "phone that allows you");
  }
  openProductIphone() {
    cy.visit(this.url);
    return this;
  }

  clickLogo() {
    cy.get("#logo").should("be.visible").click();
    return new HomePageEshop();
  }
}
