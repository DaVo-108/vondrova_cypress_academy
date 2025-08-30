export class ProductStick {
  constructor() {
    this.productStickUrl =
      "https://automationteststore.com/index.php?rt=product/product&product_id=50";
    this.addToCartButton = ".productpagecart";
  }
  clickAddToCart() {
    cy.get(this.addToCartButton).click();
  }
}
