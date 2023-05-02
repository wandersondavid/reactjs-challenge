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

  it("Add product to cart and go to cart", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).click();
    cy.get("button").contains("Finalizar Compra");
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

  it("Add product to cart and finish sales", () => {
    go(BASE_URL);
    cy.get("button").contains("Comprar").click();
    cy.get("button").contains("+").click();
    cy.get(CART_LINK_SELECTOR).click();
    cy.get("button").contains("Finalizar Compra").click();
  });

});
