export const go = (url: string) =>
  cy.visit(url);

// export const click = (selector: string) =>
//   cy.get(selector).click();

// export const clickLink = (selector: string) =>
//   cy.get(`a[href="${selector}"]`).click();

// export const clickButton = (selector: string) =>
//   cy.get(`button:contains("${selector}")`).click();

// export const clickButtonWithText = (selector: string) =>
//   cy.get(`button:contains("${selector}")`).click();

// export const clickButtonWithTextAndSelector =
//   (selector: string, text: string) =>
//     cy.get(`${selector}:contains("${text}")`).click();

// export const clickButtonWithTextAndSelectorAndIndex =
//   (selector: string, text: string, index: number) =>
//     cy.get(`${selector}:contains("${text}")`).eq(index).click();

// export const clickButtonWithTextAndIndex = (selector: string, index: number) =>
//   cy.get(`button:contains("${selector}")`).eq(index).click();

// export const clickButtonWithTextAndSelectorAndIndexAndSelector =
//   (selector: string, text: string, index: number, selector2: string) =>
//     cy.get(`${selector}:contains("${text}")`).eq(index).get(selector2).click();

// export const clickButtonWithTextAndSelectorAndIndexAndSelectorAndIndex =
//   (selector: string, text: string, index: number, selector2: string, index2: number) =>
//     cy.get(`${selector}:contains("${text}")`).eq(index).get(selector2).eq(index2).click();
