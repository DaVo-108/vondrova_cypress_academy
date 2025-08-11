import { LoginPage } from "./login_page";
import { ProjectPage } from "./project_page";

export class DashboardPage {
  constructor() {
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.projectLink = "#Projects";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  clickProjectLink() {
    cy.get(this.projectLink).click();
    return new ProjectPage();
  }
}
