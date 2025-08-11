import { LoginPage } from "../../page-objects/pmtool/login_page";
import { fakerCS_CZ as faker } from "@faker-js/faker";

describe("CSS Selectors exercise ", () => {
  it("Create new project with selectors", () => {
    const name = faker.person.fullName();

    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProjectLink()
      .clickAddProject()
      .typeName(name)
      .clickSave()
      .clickProfile()
      .clickLogout();
  });
});
