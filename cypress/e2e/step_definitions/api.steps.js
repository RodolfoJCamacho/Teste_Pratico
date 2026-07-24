import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que envio um GET para API do Trello", () => {

    cy.request({
        method: "GET",
        url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
    }).then((res) => {

        response = res;

    });

});

Then("o status deve ser 200", () => {

    expect(response.status).to.equal(200);

});

Then('devo exibir o campo list.name', () => {

    cy.log(response.body.data.list.name);

    expect(response.body.data.list.name).to.not.be.empty;

});