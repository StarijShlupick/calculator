describe('Check router', () => {
  it('Go to Settings screen', () => {
    cy.visit('/')

    cy.get('li').contains('Setting').click()
    cy.contains('Switch Theme')
    cy.get('button').contains('Clear All History')
  })

  it('Go to HomePage screen', () => {
    cy.get('li').contains('Home').click()
    cy.contains('History')
    cy.get('button').contains('CE')
    cy.get('button').contains('Clear history')
  })
})