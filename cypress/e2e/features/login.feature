Feature: Login

  Como usuário
  Quero acessar minha conta
  Para realizar compras

  Scenario: Login com sucesso
    Given que acesso a tela de login
    When informo um usuário válido
    And informo uma senha válida
    And clico em Login
    Then devo visualizar a página inicial