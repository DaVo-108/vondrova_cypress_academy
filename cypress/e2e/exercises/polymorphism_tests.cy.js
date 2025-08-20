import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Exercise - Polymorphism tests", () => {
  it("Login to pmtool, Projects and Logout ", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProjectLink()
      .clickProfile()
      .clickLogout();
  });
});
