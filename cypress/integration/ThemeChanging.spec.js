describe('Check theme selector component', () => {
  it('Check theme switching to dark theme', () => {
    cy.visit('#/settings')

    cy.contains('Light theme').click()
    cy.contains('Dark theme').click()
    cy.get('nav').should('have.css', 'background-color', 'rgb(112, 112, 112)')
    cy.get('li').contains('Home').click()
    cy.get('button').contains('CE').should('have.css', 'background-color', 'rgb(81, 81, 81)')
    cy.get('li').contains('Settings').click()
  })

  it('Check theme switching to colored theme', () => {
    cy.contains('Dark theme').click()
    cy.contains('Colored theme').click()
    cy.get('nav').should('have.css', 'background-color', 'rgb(18, 92, 19)')
    cy.get('li').contains('Home').click()
    cy.get('button').contains('CE').should('have.css', 'background-color', 'rgb(233, 247, 247)')
    cy.get('li').contains('Settings').click()
  })
  
  it('Check theme switching to light theme', () => {
    cy.contains('Colored theme').click()
    cy.contains('Light theme').click()
    cy.get('nav').should('have.css', 'background-color', 'rgb(67, 67, 67)')
    cy.get('li').contains('Home').click()
    cy.get('button').contains('CE').should('have.css', 'background-color', 'rgb(242, 242, 242)')
    cy.get('li').contains('Settings').click()
  })
})
