describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.contains('Customer Login').click();
    cy.get('#userSelect').select('Harry Potter');
    cy.contains('Login').click();
    cy.contains('Deposit').click();
    cy.get('.form-control').type('100');
    cy.get('button.btn-default').click();
    cy.get('span.error').should('contain','Deposit Successful');
    cy.get('button.logout').click();
  })
})

