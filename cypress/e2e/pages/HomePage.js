class HomePage {

    acessarHome() {
        cy.visit("/");
    }

    clicarLogin() {
        cy.contains("Signup / Login").click();
    }

    clicarProdutos() {
        cy.contains("Products").click();
    }

    clicarCarrinho() {
        cy.contains("Cart").click();
    }

    validarHome() {
        cy.url().should("include", "automationexercise.com");
    }

    validarUsuarioLogado() {
        cy.contains("Logged in as").should("be.visible");
    }

}

export default new HomePage();