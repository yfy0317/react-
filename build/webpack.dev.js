const Plugins = require('./webpack.plugins.config');

module.exports = [
  require('./webpack.common')({
    devTool: '#eval-source-map',
    mode: 'development',
    dropConsole: false,
    publicPath: '/',
    plugins: Plugins.getDevPlugins(),
    bundleHash: false,
    optimization: {},
  }),
];
