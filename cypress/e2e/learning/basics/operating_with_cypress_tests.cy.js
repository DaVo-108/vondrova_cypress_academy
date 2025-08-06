describe("Operating with Cypress", () => {
  it("Login Test", () => {
    //it.only("Login Test", () => { //používat jen pro vývoj
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });

  it.skip("Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2").type("cypress_zima_2024");
  });
});
