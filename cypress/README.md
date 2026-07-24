 Para realizar as atividades de automação utilizando a ferramenta Cypress nos projetos, se faz necessário ter o Java instalado na maquina e node.js.

Instalação Cypress

Rodar no terminal dentro da sua IDE no caminho do projeto.

npm init - Instalação do gerenciador de pacotes 
npm install cypress --save-dev - instalação da biblioteca Cypress
npx cypress open - Irá executar a ferramenta 
npx cypress run - Irá executar as scripts de testes em background

Após realizado o procedimento acima de execução a ferramenta de automação Cypress está instalado.

Realizando a instalação das dependências do mocha geração de relatórios, artefatos evidencias.  

Comando para instalação das bibliotecas de geração de relatórios dentro do terminal de sua IDE.

Importante: Rodar dentro do caminho do projeto 

npm i -D cypress-mochawesome-reporter cypress-multi-reporters mocha-junit-reporter 

Obs: Dentro dos códigos desenvolvidos é importante adicionar o comando para geração de prints imagens capturas da sequencia dos testes caso necessite . Exemplo: 

Adicionar dentro dos casos de  teste cy.screenshot()

em seguida va para o arquivo cypress.config.js

Vamos adicionar  as instruções abaixo

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
	reporterOptions: {
	reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
	mochaJunitReporterReporterOptions: {
	mochaFile:'cypress/reports/junit/results-[hash].xml'
	},
	CypressMochawesomeReporterReporterOptions:{
	charts:true,
	reportPageTitle: 'Relatório de Testes', 
	embeddedScreenshots: true, 
	inlineAssets: true, 
	saveAllAttempts: false   
  }
},
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});

