// config-overrides.js

const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: [
      path.resolve(__dirname, 'node_modules/boxicons')
    ],
  });
  return config;
};
