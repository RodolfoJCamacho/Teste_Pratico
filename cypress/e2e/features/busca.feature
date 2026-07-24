Feature: Busca

Scenario: Buscar um produto

Given que estou logado

When pesquiso por "Blue Top"

Then o produto "Blue Top" deve ser apresentado