import { go } from "../../../support/pages/home";

describe("Cart", () => {
  const BASE_URL = "http://localhost:5173/";


  beforeEach(()=>(
    go(BASE_URL)
  ))

  it("Add product to cart", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get('span').contains("2");
    cy.get('p').contains("Seus Produtos");
    cy.get('p').contains("Resumo");
  });

  it("Verify has extended warranty", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get('span').contains("2");
    cy.get('h3').contains("Garantia Estendida");
    cy.get('p').contains("Voce pode estender o tempo de garantia deste produto");
    cy.get('span').contains("Sem garantia");

  });

  it("Verify has extended warranty and add 1 year", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get('span').contains("2");
    cy.get('h3').contains("Garantia Estendida");
    cy.get('p').contains("Voce pode estender o tempo de garantia deste produto");
    cy.get('span[data-index="1"]').contains("1 ano").click();
    cy.get('span').contains("1 ano");

  })

  it("Verify has extended warranty and add 2 year", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get('span').contains("2");

    cy.get('h3').contains("Garantia Estendida");
    cy.get('p').contains("Voce pode estender o tempo de garantia deste produto");

    cy.get('span[data-index="2"]').contains("2 ano").click();
    cy.get('span').contains("2 ano");

  })

  it("Verify has extended warranty and add 3 year", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();
    cy.get('span').contains("2");
    cy.get('h3').contains("Garantia Estendida");
    cy.get('p').contains("Voce pode estender o tempo de garantia deste produto");
    cy.get('span[data-index="3"]').contains("3 ano").click();
    cy.get('span').contains("3 ano");
  })

  it("When reloading the page, the cart should be retained", () => {
    cy.get("button").contains("Comprar").click();
    cy.get('a[href="/cart"]').contains("Finalizar compra").click();
    cy.get("button").contains("+").click();

    cy.reload().then(() => {
      cy.get("p").contains("Seus Produtos").should("exist");
      cy.get("p").contains("Resumo").should("exist");
      cy.get("span").contains('2').should("exist");
    });

  });

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

})