class ProductPage {

    acessarPagina() {
        cy.visit("/products");
    }

    adicionarProdutoAoCarrinho(produto) {

        cy.contains(produto)
            .parents(".product-image-wrapper")
            .within(() => {
                cy.contains("Add to cart").click();
            });

    }

    clicarViewCart() {
        cy.contains("View Cart").click();
    }

}

export default new ProductPage();