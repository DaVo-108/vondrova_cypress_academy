describe("Bonusový úkol - Vytvoření Cypress testu", () => {
  it("Otevřít stránku tredgate.com", () => {
    cy.visit("https://tredgate.com/webtrain/registration.html");
    cy.get("#name").type("Daniela Vondrová");
    cy.get("#email").type("daniela.vondrova@test.com");
    cy.get("#phone").type(735735735);
    cy.get('[for="contact-email"]').click();
    cy.get("#password").type("Cypress2025");
    cy.get("#confirm-password").type("Cypress2025");
    cy.get("#address").type("Praha");
    cy.get('[for="interests-sports"]').click();
    cy.get('[for="interests-reading"]').click();
    cy.get("button").click();
  });
});

// Occupation je pole, které nejde vyplnit, je tedy přeskočeno
