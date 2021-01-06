const path = require("path");
const merge = require("webpack-merge");
const exec = require("child_process").exec;
const WatchPlugin = require("webpack-watch-files-plugin").default;
const ShellPlugin = require("webpack-shell-plugin");
const common = require("./webpack.common.js");


module.exports = merge(common, {
  mode: "development",
  watch: true,
  devServer: {
    contentBase: "build/html",
    port: 1919,
    open: false,
    hot: false,
    liveReload: true,
    publicPath: "/_static/",
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new WatchPlugin({
      files: ["./**/*.rst", "./**/*.py"]
    }),
    new ShellPlugin({
      onBuildStart: ["make html"],
    })
  ]
});
