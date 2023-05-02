import { go } from "../../../support/pages/home";

describe("Cart", () => {
  const BASE_URL = "http://localhost:5173/";


  it("Add product to cart", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get('span').contains("2");

    cy.get('p').contains("Seus Produtos");
    cy.get('p').contains("Resumo");
  });

  it("Verify has extended warranty", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get('span').contains("2");

    cy.get('h3').contains("Garantia Estendida");
    cy.get('p').contains("Voce pode estender o tempo de garantia deste produto");
    cy.get('span').contains("Sem garantia");

  });

  it("Verify has extended warranty and add 1 year", () => {

    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get('span').contains("2");

    cy.get('h3').contains("Garantia Estendida");
    cy.get('p').contains("Voce pode estender o tempo de garantia deste produto");

    cy.get('span[data-index="1"]').contains("1 ano").click();
    cy.get('span').contains("1 ano");

  })

})