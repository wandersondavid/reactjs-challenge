import { go } from "../../../support/pages/home";

describe("Sales", () => {

  const BASE_URL = "http://localhost:5173/";
  const CART_LINK_SELECTOR = 'a[href="/cart"]';

  beforeEach(()=>(
    go(BASE_URL)
  ))

  it("Visit the sales page", () => {
    cy.get('span').contains("R$ 0,00");
  });

  it("Add product to cart", () => {
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).contains("Finalizar compra");
  });

  it("Add product to cart and remove product to cart", () => {
    cy.get("button").contains("Comprar").click();
    cy.get("button").contains("-").click();
    cy.get(CART_LINK_SELECTOR).should("not.exist");
  });

  it("Remove product to cart and add product to cart", () => {
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).click();
    cy.get("button").contains("-").click();
    cy.get('button').contains("Conferir produtos").click();
  });

  it("add product to cart verify if the product is in the cart", () => {
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).click();
    cy.get("p").contains("Seus Produtos").should("exist");
  });

  it("add product to cart and remove product to cart verify if the product is not in the cart", () => {
    cy.get("button").contains("Comprar").click();
    cy.get(CART_LINK_SELECTOR).click();
    cy.get("button").contains("-").click();
    cy.get("p").contains("Seus Produtos").should("not.exist");
    cy.get("p").contains("Carrinho Vazio").should("exist");
  });

  it("When reloading the page, the cart should be retained", () => {
    cy.get("button").contains("Comprar").click();
    cy.wait(1000);
    cy.reload();
    cy.get("p").should("exist").contains("Carregando...");
    cy.get("h6").contains('1').should("exist");
    cy.get("span").should('not.equal', 'R$ 0,00');
  });
});
