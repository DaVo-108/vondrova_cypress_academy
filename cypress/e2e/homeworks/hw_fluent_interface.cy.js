import { AutomationStore } from "../../page-objects/homeworks PO/automation_store";

describe("Bonus HW - Fluent interface", () => {
  it("Open eshop and add product to cart", () => {
    new AutomationStore().openAutomationStore().clickProduct().clickAddToCart();
  });
});
