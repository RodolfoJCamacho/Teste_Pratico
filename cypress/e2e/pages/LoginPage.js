class LoginPage {

 acessarPagina() {
        cy.visit("/login");
    }

    informarEmail(email) {
        cy.get('[data-qa="login-email"]').type(email);
    }

    informarSenha(senha) {
        cy.get('[data-qa="login-password"]').type(senha);
    }

    clicarLogin() {
        cy.get('[data-qa="login-button"]').click();
    }

    validarLogin() {
        cy.contains("Logged in as").should("be.visible");
    }

}

export default new LoginPage();