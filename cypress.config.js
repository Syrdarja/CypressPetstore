const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "tmprmu",
    baseUrl: "https://petstore.swagger.io/v2/user",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
