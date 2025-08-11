import { CreateNewProjectModal } from "./create_project_modal";

export class ProjectPage {
  constructor() {
    this.addProjectButton = 'button[test_id="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new CreateNewProjectModal();
  }
}
