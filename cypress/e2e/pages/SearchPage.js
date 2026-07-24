class SearchPage {

    acessarHome() {
        cy.visit("/");
    }

    clicarProdutos() {
        cy.contains("Products").click();
    }

    pesquisarProduto(produto) {
        cy.get('#search_product').clear().type(produto);
        cy.get('#submit_search').click();
    }

    validarProduto(produto) {
        cy.contains(produto).should("be.visible");
    }
}

export default new SearchPage();