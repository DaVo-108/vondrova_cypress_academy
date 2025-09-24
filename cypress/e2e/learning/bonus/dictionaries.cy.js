import { customElement } from "../../../helpers/custom_element";
import { dictionary } from "../../../support/dictionary";

describe("Using Dictionaries", () => {
  it("Pmtool Login Page Texts Checks", () => {
    const texts = dictionary.pmtool.login;

    cy.visit("https://tredgate.com/pmtool");
    customElement("#username").havePlaceholder(texts.usernamePlaceholder);
    customElement("#password").havePlaceholder(texts.passwordPlaceholder);
    customElement("h3.form-title").haveText(texts.title);
  });
});
