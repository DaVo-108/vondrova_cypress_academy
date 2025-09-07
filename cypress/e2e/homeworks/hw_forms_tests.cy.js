import { AutomationStorePage } from "../../page-objects/homeworks PO/automation_store_page";
import { faker } from "@faker-js/faker"; //anglický faker mám záměrně, jelikož u českého mi to padalo na diaktritice u login name

describe("Create account Automation Test Store", () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const loginName = lastName + firstName;
  const email = faker.internet.exampleEmail({
    firstName: firstName,
    lastName: lastName,
  });

  it("Open Eshop", () => {
    new AutomationStorePage()
      .openEshop()
      .clickLoginOrRegister()
      .clickContinue();
    cy.get("#AccountFrm_firstname").type(firstName);
    cy.get("#AccountFrm_firstname").should("have.attr", "name", "firstname");
    cy.get("#AccountFrm_lastname").type(lastName);
    cy.get("#AccountFrm_lastname").should("have.attr", "name", "lastname");
    cy.get("#AccountFrm_email").type(email);
    cy.get("#AccountFrm_email").should("have.attr", "name", "email");
    cy.get("#AccountFrm_telephone").type("+420741741741");
    cy.get("#AccountFrm_telephone").should("have.value", "+420741741741");
    cy.get("#AccountFrm_fax").type("+420226015100");
    cy.get("#AccountFrm_fax").should("have.value", "+420226015100");
    cy.get("#AccountFrm_company").type("Daniela Vondrová");
    cy.get("#AccountFrm_company").should("contain.value", "Vondrová");
    cy.get("#AccountFrm_address_1").type("Jitravská 14");
    cy.get("#AccountFrm_address_1").should("contain.value", "Jitravská");
    cy.get("#AccountFrm_address_2").type("Teplická 14");
    cy.get("#AccountFrm_address_2").should("contain.value", "14");
    cy.get("#AccountFrm_city").type("Praha");
    cy.get("#AccountFrm_city").should("have.value", "Praha");
    cy.get("#AccountFrm_country_id").select("Czech Republic");
    cy.get("#AccountFrm_country_id").should("have.value", "56");
    cy.wait(1000);
    cy.get("#AccountFrm_zone_id").select("Vysocina");
    cy.get("#AccountFrm_zone_id").should("have.value", "901");
    cy.get("#AccountFrm_postcode").type("19000");
    cy.get("#AccountFrm_postcode").should("have.value", "19000");
    cy.get("#AccountFrm_loginname").type(loginName);
    cy.get("#AccountFrm_loginname").should("have.attr", "name", "loginname");
    cy.get("#AccountFrm_password").type("test1234");
    cy.get("#AccountFrm_password").should("contain.value", "123");
    cy.get("#AccountFrm_confirm").type("test1234");
    cy.get("#AccountFrm_confirm").should("contain.value", "test");
    cy.get("#AccountFrm_newsletter0").check();
    cy.get("#AccountFrm_newsletter0").should("be.checked");
    cy.get("#AccountFrm_agree").check();
    cy.get("#AccountFrm_agree").should("be.checked");
    cy.get(".col-md-2 > .btn").click();
    cy.get(".maintext").should(
      "contain.text",
      "Your Account Has Been Created!"
    );
  });
});
