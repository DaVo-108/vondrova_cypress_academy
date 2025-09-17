describe("Login Portal", () => {
  it("Modify Anchor to Open Page in The Same Screen", () => {
    cy.visit("https://webdriveruniversity.com/");

    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#text").type("Vyplnit username");
  });
});
