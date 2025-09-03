const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    env: {
      ...baseConfig.e2e.env,
      pmtool_url: "https://google.com",
      eshop_url: "https://seznam.cz",
      webtrain_url: "https://minisryoftesting.com",
      automation_test_store_url: "https://irozhlas.cz",
    },
  },
};

console.log(module.exports);
//node env/prod.env.config.js tímto spustím dole v terminálu

/*
/ Jednodušší cesta (přidávám proměnné mimo strukturu původního configu)
module.exports = {
  ...baseConfig,
  env: {
    someVar: "hodnota",
  },
};
*/
