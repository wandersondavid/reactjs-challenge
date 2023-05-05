import { go } from "../../../support/pages/home";

describe("Buying", () => {
  const BASE_URL = "http://localhost:5173/";


  beforeEach(()=>(
    go(BASE_URL)
  ));

  it("To page buying", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get("p").contains("Seus Produtos").should("exist");
    cy.get("p").contains("Resumo").should("exist");
    cy.get("span").contains('2').should("exist");
    cy.get("button").contains("Continuar").click();
    cy.get("h2").contains("Seus Produtos").should("exist");
  });

  it("To page buying back to page cart", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get("p").contains("Seus Produtos").should("exist");
    cy.get("p").contains("Resumo").should("exist");
    cy.get("span").contains('2').should("exist");
    cy.get("button").contains("Continuar").click();
    cy.get('a[href="/cart"]').contains("Voltar").click();
  });

  it("To page buying back to page cart and add 1", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get("p").contains("Seus Produtos").should("exist");
    cy.get("p").contains("Resumo").should("exist");
    cy.get("span").contains('2').should("exist");
    cy.get("button").contains("Continuar").click();
    cy.get('a[href="/cart"]').contains("Voltar").click();
    cy.get("button").contains("+").click();
    cy.get("span").contains('3').should("exist");
    cy.get("button").contains("Continuar").click();
    cy.get("h2").contains("Seus Produtos").should("exist");
  });

  it("To page buying to checkout", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get("p").contains("Seus Produtos").should("exist");
    cy.get("p").contains("Resumo").should("exist");
    cy.get("span").contains('2').should("exist");
    cy.get("button").contains("Continuar").click();
    cy.get("button").contains("Ir para checkout").click();

    // cy.wait(5000);

    cy.get("span").should("exist").contains("Powered by");

  });

})