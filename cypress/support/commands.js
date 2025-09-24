// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("waitWith", (milliseconds, reason) => {
  cy.wait(milliseconds);
  cy.log(`Waited for ${milliseconds} ms. Reason: ${reason}`);
});

Cypress.Commands.add(
  "typeSlowly",
  { prevSubject: "element" },
  (selector, text, delay = 100) => {
    const { customElement } = require("../helpers/custom_element.js");
    customElement(selector).get().type(text, { delay, log: false });
    cy.log(
      `Typed text "${text}" into element ${selector} with delay ${delay} ms`
    );
  }
);
