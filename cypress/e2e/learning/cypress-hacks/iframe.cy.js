describe("Handling IFrames", () => {
  it("Handle Tredgate WebTrain iframe", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    // cy.get("#name").type("Píšeme v iframe"); nebude fungovat, protože prvek je v iframe a on ho nevidí tak, jak já
    cy.get('[data-testid="test-automation-iframe"]').then((iframe) => {
      const body = iframe.contents().find("body"); // iframe je jquery html prvek, pomocí contents můžeme vytáhnout celý obsah jquery prvku a find v něm vyhledá a vytáhne html prvek pomocí css selektoru - v našem případě získáváme celý obsah iframu z body
      cy.wrap(body).as("iframeBody");
    });
    cy.get("@iframeBody").find("#name").type("Píšeme v iframe");
  });
});
