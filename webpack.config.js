const webpackMerge = require('webpack-merge');
const commonPartial = require('./webpack/webpack.common');
const serverPartial = require('./webpack/webpack.server');
const prodPartial = require('./webpack/webpack.prod');

module.exports = function (options, webpackOptions) {
  options = options || {};

  if (options.aot) {
    console.log(`Running build for ${options.client ? 'client' : 'server'} with AoT Compilation`)
  }

  const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    entry: options.aot ? './src/main.server.aot.ts' : serverPartial.entry, // Temporary
  });


  const configs = [];
  if (!options.aot) {
    configs.push(serverConfig);

  } else if (options.client) {
    configs.push(clientConfig);

  } else if (options.server) {
    configs.push(serverConfig);
  }

  return configs;
}
