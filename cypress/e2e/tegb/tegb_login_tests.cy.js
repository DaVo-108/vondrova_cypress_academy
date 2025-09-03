import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("Tegb Login Tests", () => {
  it("Login to TegB", () => {
    const username = Cypress.env("tegb_username");
    const password = Cypress.env("tegb_password");

    new TegBLoginPage()
      .openTegB()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
  });
});
