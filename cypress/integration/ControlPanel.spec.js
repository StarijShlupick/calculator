describe('Control panel check', () => {
  it('Check clear history button', () => {
    cy.visit('/')

    cy.doMath('1', '+', '3')
    cy.get('li').contains('1+3')
    cy.get('button').contains('Clear history').click()
    cy.contains('There is no expressions yet')
  })

  it('Check history mode button', () => {
    cy.doMath('1', '+', '0')
    cy.doMath('1', '+', '1')
    cy.doMath('1', '+', '2')
    cy.doMath('1', '+', '3')
    cy.doMath('1', '+', '4')
    cy.doMath('1', '+', '5')
    cy.doMath('1', '+', '6')
    cy.doMath('1', '+', '7')
    cy.doMath('1', '+', '8')
    cy.doMath('1', '+', '9')

    cy.get('[data-test-history]').children().should('have.length', 5)

    cy.get('button').contains('Show full history').click()
    cy.get('[data-test-history]').children().should('have.length', 10)

    cy.get('button').contains('Show last 5 expressions').click()
    cy.get('[data-test-history]').children().should('have.length', 5)
  })
})