import { HeaderEshop } from "./hw_header_eshop";
import { ProductIphone } from "./hw_product_iphone";

export class HomePageEshop extends HeaderEshop {
  constructor() {
    super();
    this.url = "https://tredgate.com/eshop/";
    this.iphoneProduct = ":nth-child(1) > .product-thumb > .caption > h4 > a";
  }
  openEshop() {
    cy.visit(this.url);
    return this;
  }
  clickProductIphone() {
    cy.get(this.iphoneProduct).should("be.visible").click();
    return new ProductIphone();
  }
}
