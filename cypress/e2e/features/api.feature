Feature: API Trello

Scenario: Consultar Action

Given que envio um GET para API do Trello

Then o status deve ser 200

And devo exibir o campo list.name