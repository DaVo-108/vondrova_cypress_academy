import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("Users Page Atomic Tests", () => {
  const usersPage = new UsersPage();

  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new UsersPage().visit();
  });

  context("Title Tests", () => {
    it("Title Users is visible", () => {
      usersPage.pageTitleHeader.isVisible();
    });

    it("Title have Text", () => {
      usersPage.pageTitleHeader.haveText("Users");
    });

    context("Add User Button Tests", () => {
      it("Add User Button is Visible", () => {
        usersPage.addUserButton.isVisible();
      });

      it("Add User Button have Text", () => {
        usersPage.addUserButton.haveText("Add User");
      });
    });
  });
});
