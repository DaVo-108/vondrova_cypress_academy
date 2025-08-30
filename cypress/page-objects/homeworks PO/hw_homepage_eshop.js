import { HeaderEshop } from "./hw_header_eshop";
import { ProductIphone } from "./hw_product_iphone";

export class HomePageEshop extends HeaderEshop {
  constructor() {
    super();
    this.iphoneAnchor = "img[title=**'iPhone'**]";
  }
  clickProductIphone() {
    cy.get(this.iphoneAnchor).should("exist").click();
    return new ProductIphone();
  }
}
