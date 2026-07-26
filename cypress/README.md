 Para realizar as atividades de automação utilizando a ferramenta Cypress nos projetos, se faz necessário ter o node.js.

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

__________________________________________________________________________________________________________

Instalação e Configuração Cucumber

Dentro do VSCODE instale a extenção  Cucumber (Gherkin) Full Support de "Alexander Krechik"

Acesso o pasta do teu projeto e execute os seguintes comandos 

npm install -D @badeball/cypress-cucumber-preprocessor
\\Permite que o Cypress entenda arquivos .feature escritos em Gherkin e os associe aos Step Definitions.\\

em seguida 

npm install -D @bahmutov/cypress-esbuild-preprocessor
\\Compila rapidamente os arquivos JavaScript/TypeScript antes da execução dos testes.\\

npm install -D esbuild

\\Ferramenta de compilação (bundler) extremamente rápida utilizada pelo preprocessor.\\

Configuração do arquivo ".cypress-cucumber-preprocessorrc.json"

O arquivo .cypress-cucumber-preprocessorrc.json é o arquivo de configuração do Cypress Cucumber Preprocessor. Sua função é informar ao plugin como ele deve interpretar os arquivos .feature e gerar os relatórios da execução dos testes.

Ele funciona como um arquivo de configuração exclusivo do Cucumber dentro do Cypress, centralizando opções relacionadas ao comportamento do plugin.

Crie este arquivo no diretório raiz do projeto 

dentro do arquivo 

{
  "json": {
    "enabled": true,
    "output": "cypress/reports/cucumber-report.json"
  }
}


Importante: Este projeto|desafio realiza a execução automatizada de evidencias que são elas 

Videos dos testes 
Report do MochawesomeReporterReporter
Report do cucumber 


OBS: A instalação das dependências do Cucumber não altera automaticamente o arquivo cypress.config.js. Após executar o npm install, é necessário configurar manualmente esse arquivo para registrar o plugin do Cucumber, integrar o Esbuild e definir o padrão de execução dos arquivos .feature. Sem essas configurações, o Cypress não reconhecerá os cenários escritos em Gherkin.
