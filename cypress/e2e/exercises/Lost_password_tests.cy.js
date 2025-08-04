describe("Exercise - operating with Cypress", () => {
  it.only("Lost Password", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#forget_password").click();
    cy.get(":nth-child(3) > .input-icon > .form-control").type(
      "test@tredgate.cz"
    );
    cy.get(":nth-child(2) > .input-icon > .form-control").type("test");
    cy.get(".btn-info").click();
  });

  it.skip("Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2").type("cypress_zima_2024");
  });
});
