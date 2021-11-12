Cypress.Commands.add('doMath', (firstOperand, operator, secondOperand) => {
  cy.get('button').contains(firstOperand).click()
  cy.get('button').contains(operator).click()
  cy.get('button').contains(secondOperand).click()
  cy.get('button').contains('=').click()
  cy.get('button').contains('CE').click()
})