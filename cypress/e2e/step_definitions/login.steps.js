import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

Given("que acesso a tela de login", () => {
    LoginPage.acessarPagina();
});

When("informo um usuário válido", () => {
    LoginPage.informarEmail("teste2021@teste.com.br");
});

When("informo uma senha válida", () => {
    LoginPage.informarSenha("teste");
});

When("clico em Login", () => {
    LoginPage.clicarLogin();
});

Then("devo visualizar a página inicial", () => {
    LoginPage.validarLogin();
});