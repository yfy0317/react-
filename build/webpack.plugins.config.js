const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const HappyPack = require("happypack");

const happyThreadPool = HappyPack.ThreadPool({ size: 4 });
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    chunks: ["main", "vendor", "webpack-runtime"],
    filename: "index.html", // 生成的html的文件名
    template: path.resolve(__dirname, "../src/index.html"), // 依据的模板
    title: "sx-webpack",
    inject: true, // 注入的js文件将会被放在body标签中,当值为'head'时，将被放在head标签中
    minify: {
      // 压缩配置
      removeComments: true, // 删除html中的注释代码
      collapseWhitespace: true, // 删除html中的空白符
      removeAttributeQuotes: true // 删除html元素中属性的引号
    },
    // favicon: path.resolve(__dirname, '../src/favicon.png'),
    chunksSortMode: "dependency" // 按dependency的顺序引入
  }),
  new webpack.HotModuleReplacementPlugin(), // 热更新插件
  new webpack.ProvidePlugin({ $: "jquery", _: "lodash" })
];

// 生产插件
const getProdPlugins = () => {
  plugins.push(
    new CompressionPlugin({
      // 压缩gzip
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
  plugins.push(new OptimizeCSSPlugin()); // 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
  plugins.push(new webpack.HashedModuleIdsPlugin());
  plugins.push(
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../src/assets/lib"),
        to: "assets/lib"
      }
    ])
  );
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  );
  plugins.push(
    new CleanWebpackPlugin("dist", {
      root: path.resolve(__dirname, ".."),
      verbose: true,
      dry: false
    })
  );
  return plugins;
};

// 测试插件
const getTestPlugins = () => {
  plugins.push(
    new CompressionPlugin({
      // 压缩gzip
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
  plugins.push(new OptimizeCSSPlugin());
  // 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
  plugins.push(new webpack.HashedModuleIdsPlugin());
  plugins.push(
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../src/assets/lib"),
        to: "assets/lib"
      }
    ])
  );
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("test")
      }
    })
  );
  plugins.push(
    new CleanWebpackPlugin("dist", {
      root: path.resolve(__dirname, ".."),
      verbose: true,
      dry: false
    })
  );
  return plugins;
};

// 开发插件
const getDevPlugins = () => {
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  );
  plugins.push(
    new HappyPack({
      id: "happybabel",
      loaders: ["babel-loader"],
      threadPool: happyThreadPool,
      cache: true,
      verbose: true
    })
  );
  return plugins;
};
// 导出
module.exports = {
  getProdPlugins,
  getDevPlugins,
  getTestPlugins
};
