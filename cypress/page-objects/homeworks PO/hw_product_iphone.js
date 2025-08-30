export class ProductIphone {
  constructor() {
    this.url =
      "https://tredgate.com/eshop/index.php?route=product/product&product_id=40";
  }
  openProductIphone() {
    cy.visit(this.url);
    return this;
  }
}
