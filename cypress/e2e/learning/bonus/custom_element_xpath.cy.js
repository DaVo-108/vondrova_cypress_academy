import { customElement } from "../../../helpers/custom_element";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Custom Element using automatic Xpath, CSS resolution", () => {
  it("Custom Element Xpath, CSS", () => {
    new LoginPage().openPmtool();
    customElement("//input[@id='username']").type("XPATH SELECTOR");
    customElement("#username").type("CSS SELECTOR");
  });
});
