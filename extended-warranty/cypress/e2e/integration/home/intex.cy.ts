import { go } from "../../../support/pages/home";

describe("Sales", () => {

  const BASE_URL = "http://localhost:5173/";
  const CART_LINK_SELECTOR = 'a[href="/cart"]';

  it("Visit the sales page", () => {
    go(BASE_URL);
    cy.get('span').contains("R$ 0,00");
  });

  it("Add product to cart", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).contains("Finalizar compra");
  });

  it("Add product to cart and remove product to cart", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get("button").contains("-").click();
    cy.get(CART_LINK_SELECTOR).should("not.exist");
  });

  it("Remove product to cart and add product to cart", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).click();
    cy.get("button").contains("-").click();
    cy.get('button').contains("Conferir produtos").click();
  });

  // it("Add product to cart and finish sales", () => {
  //   go(BASE_URL);
  //   cy.get("button").contains("Comprar").click();
  //   cy.get("button").contains("+").click();
  //   cy.get(CART_LINK_SELECTOR).click();
  //   cy.get("button").contains("Finalizar Compra").click();
  // });

  it("add product to cart verify if the product is in the cart", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).click();
    cy.get("p").contains("Seus Produtos").should("exist");
  });

  it("add product to cart and remove product to cart verify if the product is not in the cart", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).click();
    cy.get("button").contains("-").click();
    cy.get("p").contains("Seus Produtos").should("not.exist");
    cy.get("p").contains("Carrinho Vazio").should("exist");
  });

  it("test",()=>{
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.wait(1000);
    cy.reload();
    cy.get("p").contains("Carregando...").should("exist");
    cy.get("h6").contains('1')
  });
});
