const Plugins = require("./webpack.plugins.config");
const CommonConfig = require("./webpack.common");

module.exports = [
  CommonConfig({
    devTool: "#eval-source-map",
    mode: "development",
    dropConsole: false,
    publicPath: "/",
    plugins: Plugins.getDevPlugins(),
    bundleHash: false,
    optimization: {}
  })
];
