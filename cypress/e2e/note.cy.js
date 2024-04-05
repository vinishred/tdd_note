describe("Note App", () => {
  it("can add a note to a box", () => {
    //je vais sur mon server local
    cy.visit("http://localhost:5000");

    // je rempli le champ note
    cy.get("#noteDescription").type("Ceci est une note");

    // je vais soumettre le formulaire
    cy.get("#formNote").submit();

    //ma note doit être présente dans la liste de notes
    cy.get("#notes").should("contain", "note");
  });
});
