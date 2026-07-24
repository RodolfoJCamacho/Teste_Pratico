import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../pages/SearchPage";

Given("que estou logado", () => {
    SearchPage.acessarHome();
    SearchPage.clicarProdutos();
});

When("pesquiso por {string}", (produto) => {
    SearchPage.pesquisarProduto(produto);
});

Then("o produto {string} deve ser apresentado", (produto) => {
    SearchPage.validarProduto(produto);
});