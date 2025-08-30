import { HomePageEshop } from "../../page-objects/homeworks PO/hw_homepage_eshop";

describe("HW - Polymorphism eshop header", () => {
  it("Test", () => {
    new HomePageEshop().clickProductIphone();
  });
});
