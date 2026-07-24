Cypress.Commands.add('login', (email, senha) => {

    cy.get('[data-qa="login-email"]').type(email)

    cy.get('[data-qa="login-password"]').type(senha)

    cy.contains('button','Login').click()

});