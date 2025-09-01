export class BasePage {
  constructor(path) {
    this.baseURL = "https://tredgate.com/pmtool/index.php?";
    this.path = path;
  }

  visit() {
    cy.visit(this.baseURL + this.path);
    return this;
  }
}
