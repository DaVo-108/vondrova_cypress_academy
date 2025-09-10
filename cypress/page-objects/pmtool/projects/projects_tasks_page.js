import { customElement } from "../../../helpers/custom_element";
import { HeaderSection } from "../common/header_section";
import { ProjectInfoPage } from "./project_info_page";

export class ProjectsTasksPage extends HeaderSection {
  constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`);
    this.projectInfoButton = customElement(".navbar-header .navbar-brand");
  }

  clickProjectInfo() {
    this.projectInfoButton.click();
    return new ProjectInfoPage();
  }
}
