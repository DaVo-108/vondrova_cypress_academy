export class MenuSection {
  constructor() {
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
