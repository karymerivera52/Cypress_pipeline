const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '27vwob',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
