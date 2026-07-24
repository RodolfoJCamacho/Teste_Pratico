const { defineConfig } = require("cypress");

// Pré-processador do esbuild (compila os arquivos rapidamente)
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

// Plugin do Cucumber
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

// Plugin que integra o Cucumber com o esbuild
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({

  // ====================================================
  // CONFIGURAÇÃO DE VÍDEO
  // ====================================================
  video: true,
  videosFolder: "cypress/videos",
  videoCompression: false,

  // Impede que variáveis de ambiente sejam sobrescritas
  // por parâmetros externos não definidos.
  //allowCypressEnv: false,

  // ====================================================
  // CONFIGURAÇÃO DOS RELATÓRIOS
  // ====================================================

  // Utiliza múltiplos relatórios na mesma execução
  reporter: "cypress-multi-reporters",

  reporterOptions: {

    // Define quais relatórios serão gerados
    reporterEnabled:
      "cypress-mochawesome-reporter, mocha-junit-reporter",

    // -------------------------------
    // Configuração do JUnit XML
    // Muito usado no Jenkins, Azure DevOps,
    // GitLab CI, GitHub Actions etc.
    // -------------------------------
    mochaJunitReporterReporterOptions: {

      // Gera um XML para cada execução
      mochaFile: "cypress/reports/junit/results-[hash].xml",
    },

    // -------------------------------
    // Configuração do Mochawesome
    // Gera um relatório HTML bonito
    // -------------------------------
    CypressMochawesomeReporterReporterOptions: {

      // Exibe gráficos no relatório
      charts: true,

      // Título da página HTML
      reportPageTitle: "Relatório Pratico",

      // Insere screenshots diretamente no HTML
      embeddedScreenshots: true,

      // Coloca CSS e JS dentro do HTML
      // Assim o relatório vira apenas um arquivo
      inlineAssets: true,

      // Salva somente a última tentativa
      // (false = não salva tentativas anteriores)
      saveAllAttempts: false,
    },
  },

  // ====================================================
  // CONFIGURAÇÕES DOS TESTES E2E
  // ====================================================

  e2e: {

    baseUrl: "https://automationexercise.com",
    specPattern: "cypress/e2e/**/*.feature",

    async setupNodeEvents(on, config) {

      // ============================================
      // Inicializa o plugin do Cucumber
      // ============================================
      await addCucumberPreprocessorPlugin(on, config);

      // ============================================
      // Compila os arquivos .feature usando esbuild
      // Muito mais rápido que webpack
      // ============================================
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // ============================================
      // Inicializa o Mochawesome Reporter
      // Responsável por gerar o HTML
      // ============================================
      require("cypress-mochawesome-reporter/plugin")(on);

      // Sempre retorne o config
      return config;
    },
  },
});