import { HeaderSection } from "./common/header_section";
import { CreateNewProjectModal } from "./create_project_modal";

export class ProjectPage extends HeaderSection {
  constructor() {
    super();
    this.addProjectButton = 'button[test_id="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new CreateNewProjectModal();
  }
}
