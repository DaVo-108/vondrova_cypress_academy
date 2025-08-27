import { BasePage } from "./base_page.js";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectLink = "#Projects";
    this.dashboardlink = "#dashboard";
  }

  clickProjectLink() {
    const { ProjectPage } = require("../project_page.js");
    cy.get(this.projectLink).click();
    return new ProjectPage();
  }

  clickDashboard() {
    const { DashboardPage } = require("../dashboard_page.js");
    cy.get(this.dashboardlink).click();
    return new DashboardPage();
  }
}
