import { HeaderSection } from "./common/header_section";
import { LoginPage } from "./login_page";
import { ProjectPage } from "./project_page";

export class DashboardPage extends HeaderSection {
  constructor() {
    super();
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }
}
