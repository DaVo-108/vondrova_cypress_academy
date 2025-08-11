import { DashboardPage } from "./dashboard_page";

export class CreateNewProjectModal {
  constructor() {
    this.projectNameInput = "#fields_158";
    this.saveButton = ".modal-footer > .btn-primary";
  }

  typeName(name) {
    cy.get(this.projectNameInput).type(name);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new DashboardPage();
  }
}
