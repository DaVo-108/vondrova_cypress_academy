describe("Mousee Actions Tests", () => {
  it("Scroll Into View", () => {
    cy.visit("https://tredgate.com/webtrain/index.html");
    cy.get("#users_table_2").scrollIntoView().should("be.visible");
  });
  // padá mi na assertionErorr
  it("Double Click Test", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    cy.get('[data-testid="double-click-box"]').dblclick();
  });

  it("Click and Hold Test", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    cy.get(".hold-button").trigger("mousedown");
    cy.wait(1500);
    cy.get(".hold-button").trigger("mouseup");
  });

  it("Drag and Drop", () => {
    cy.visit("https://webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { forse: true });
  });
});
