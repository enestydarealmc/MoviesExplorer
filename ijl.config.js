const pkg = require("./package");

require("dotenv").config();

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  navigations: {
    "movie_explorer.main": "/movie_explorer",
  },
  features: {
    movie_explorer: {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    apiKey: "71661be18f2fafefa4966ae143fa2251",
  },
};
