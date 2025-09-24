import { ProjectPage } from "../project_page";

export function createSimpleProject(projectName) {
  return new ProjectPage().clickAddProject().typeName(projectName).clickSave();
}
