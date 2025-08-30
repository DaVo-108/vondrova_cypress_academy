import { ProductStick } from "./product_stick";

export class AutomationStore {
  constructor() {
    this.url = "https://automationteststore.com/";
    this.productAnchor =
      "div[id='block_frame_featured_1769'] a[title='Skinsheen Bronzer Stick']";
  }

  openAutomationStore() {
    cy.visit(this.url);
    return this;
  }

  clickProduct() {
    cy.get(this.productAnchor).click();
    return new ProductStick();
  }
}
