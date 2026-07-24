import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

Given("que estou na página de produtos", () => {

    ProductPage.acessarPagina();

});

When("adiciono o produto {string} ao carrinho", (produto) => {

    ProductPage.adicionarProdutoAoCarrinho(produto);

});

When("acesso o carrinho", () => {

    ProductPage.clicarViewCart();

});

Then("devo visualizar o produto {string} no carrinho", (produto) => {

    CartPage.validarProduto(produto);

});