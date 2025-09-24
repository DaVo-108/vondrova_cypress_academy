import { faker } from "@faker-js/faker";
import {
  attemptInvalidLogin,
  loginDefaultUser,
  openAndLogin,
} from "../../../page-objects/pmtool/flows/login_flows";
import { pmtoolOpenAndResetPassword } from "../../../page-objects/pmtool/flows/lost_password_flows";

describe("Flows Tests", () => {
  context("Login flows", () => {
    it("Login using flow", () => {
      openAndLogin(
        Cypress.env("pmtool_username"),
        Cypress.env("pmtool_password")
      )
        .clickProfile()
        .clickLogout();
    });

    it("Login with Default User", () => {
      loginDefaultUser().clickProfile().clickLogout();
    });

    it("Invalid Login Test", () => {
      attemptInvalidLogin("ABCD12345", "wrongpassword").alertDiv.isVisible();
    });
  });

  it("Create Simple Project", () => {
    const projectName = "Simple Project " + faker.number.int({ max: 999999 });

    loginDefaultUser()
      .clickProjectLink()
      .createSimpleProjectFlow(projectName)
      .clickProjectInfo()
      .projectNameTitleDiv.containsText(projectName);
  });

  it("Reset Password Flow", () => {
    pmtoolOpenAndResetPassword("test", "test@tredgate.cz");
  });
});

//.clickProjectInfo() // toto mi nechce nic vyhledat, na nic mě to nenapojuje, zjistit proč
//    .projectNameTitleDiv.containsText(projectName);
