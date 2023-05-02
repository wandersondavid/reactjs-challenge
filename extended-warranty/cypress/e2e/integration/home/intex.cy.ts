describe("Sales", () => {

  it("Visit the sales page", () => {
    cy.visit("http://localhost:5173/");
    cy.get('span').contains("R$ 0,00");
  });

  it("Add product to cart", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra");
  });

  it("Add product to cart and go to cart", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').click();
    cy.get("button").contains("Finalizar Compra");
  });

  it("Add product to cart and remove product to cart", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Comprar").click();
    cy.get("button").contains("-").click();
    cy.get('a[href="/cart"]').should("not.exist");
  });

  it("Remove product to cart and add product to cart", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').click();
    cy.get("button").contains("-").click();
    cy.get('button').contains("Conferir produtos").click();
  });

  it("Add product to cart and finish sales", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Comprar").click();
    cy.get("button").contains("+").click();
    cy.get('a[href="/cart"]').click();
    cy.get("button").contains("Finalizar Compra").click();
  });

});
