Feature: Carrinho de Compras

  Scenario: Adicionar produto ao carrinho

    Given que estou na página de produtos
    When adiciono o produto "Blue Top" ao carrinho
    And acesso o carrinho
    Then devo visualizar o produto "Blue Top" no carrinho