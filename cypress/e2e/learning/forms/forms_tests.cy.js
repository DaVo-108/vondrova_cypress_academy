describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("https://tredgate.com/webtrain/registration.html");
  });

  it("Check radio button", () => {
    cy.get("input[name='contact-method']").check("phone");
    cy.get("input[name='contact-method']").should("be.checked");
  });

  it("Check 2 Interests", () => {
    cy.get("input[name='interests[]']").check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get("input[name='interests[]']").check("travel");
    cy.get("#interests-travel").should("be.checked");
    cy.get("input[name='interests[]']").check(["music", "reading"]);
  });

  it("Check and uncheck checkbox", () => {
    cy.get("input[name='interests[]']").check("travel");
    cy.get("#interests-travel").should("be.checked");
    cy.get("input[name='interests[]']").uncheck("travel");
    cy.get("#interests-travel").should("not.be.checked");
  });

  it("Clear and fill name", () => {
    cy.get("#name").clear().type("Daniela Vondrová");
    cy.get("#name").should("have.value", "Daniela Vondrová");
    cy.get("#name").clear().type("Vondrová");
    cy.get("#name").should("have.value", "Vondrová");
  });

  it("Select female gender", () => {
    cy.get("#gender").select("female");
    cy.get("#gender").should("have.value", "female");
  });

  it.only("Submit form", () => {
    cy.get("#name").clear().type("Daniela");
    cy.get("#email").clear().type("test@test.cz");
    cy.get("#phone").clear().type("123456789");
    cy.get("input[name='contact-method']").check("phone");
    cy.get("#confirm-password").clear().type("heslo");
    cy.get("#date-of-birth").type("1990-12-12");
    cy.get("#gender").select("female");
    cy.get("#address").clear().type("Testovací Adresa 123");
    cy.get("form").submit();
    cy.get("#successBox")
      .should("be.visible")
      .and("contain.text", "Registration successful!");
  });

  it("Upload file fixtures", () => {
    cy.fixture("test.txt").as("uploadFile");
    cy.get("#file-upload").selectFile("@uploadFile");
  });

  it("Type date", () => {
    cy.get("#date-of-birth").type("2000-01-01");
    cy.get("#date-of-birth").should("have.value", "2000-01-01");
  });
});
