describe('History test', () => {
  it('Check history functionality', () => {
    cy.visit('/')

    cy.doMath('1', '+', '3')
    cy.get('li').contains('1+3')
  })

  it('Check clear history button in settings page', () => {
    cy.get('li').contains('Settings').click()
    cy.get('button').contains('Clear All History').click()
    cy.get('li').contains('Home').click()
    cy.contains('There is no expressions yet')
  })
})