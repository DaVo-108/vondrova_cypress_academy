import { HeaderSection } from "./common/header_section";
import { CreateNewProjectModal } from "./create_new_project_modal";

export class ProjectPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProjectButton = 'button[test_id="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new CreateNewProjectModal();
  }
}
