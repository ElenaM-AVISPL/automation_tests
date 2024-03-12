const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1620,
  viewportHeight: 880,
  e2e: {
  baseUrl: "https://chi-qa-ui.vnocsymphony.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
