describe('Calculations check', () => {
  it('Do summation and subtraction', () => {
    cy.visit('/')
    cy.waitForReact()

    cy.get('button').contains('1').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('8').click()
    cy.get('button').contains('=').click()
    cy.get('[data-test-display]').should('have.text', '5')
    cy.get('button').contains('CE').click()
  })

  it('Do multiplication and division', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('/').click()
    cy.get('button').contains('4').click()
    cy.get('button').contains('=').click()
    cy.get('div').contains('5')
    cy.get('button').contains('CE').click()
  })
})