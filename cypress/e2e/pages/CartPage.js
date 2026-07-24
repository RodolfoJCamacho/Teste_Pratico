class CartPage {
    
    acessarPagina() {
          cy.visit("/");
    }


    abrirCarrinho() {

        cy.contains("Cart").click();

    }

    validarProduto(produto) {

        cy.contains(produto).should("be.visible");

    }

    validarTelaPagamento() {

        cy.contains("Proceed To Checkout").should("be.visible");

    }

    clicarCheckout() {

        cy.contains("Proceed To Checkout").click();

    }

}

export default new CartPage();