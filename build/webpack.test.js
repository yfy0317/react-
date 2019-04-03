const plugins = require("./webpack.plugins.config.js");
const CommonConfig = require("./webpack.common");

module.exports = [
  CommonConfig({
    devTool: "false",
    mode: "production",
    dropConsole: true,
    publicPath: "/",
    bundleHash: true,
    plugins: plugins.getTestPlugins(),
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 3,
            name: "commons",
            enforce: true
          }
        }
      }
    }
  })
];
