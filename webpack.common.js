const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();
module.exports = {
    entry: [
      path.resolve('docs', '_static', 'js', 'index.js'),
      path.resolve('docs', '_static', 'css', 'styles.css'),
    ],
    output: {
        path: path.resolve('docs/_build/html'),
        filename: "bundle.js",
    },
  externals: {
    jquery: "jQuery"
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      }
    ]
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx"]
    },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css?[chunkhash]",
      chunkFilename: "[name].css?[chunkhash]"
    }),
    new webpack.DefinePlugin({
        // Provide enviroment variable defaults
        // from .env
        ALGOLIA_APP_ID: JSON.stringify(process.env.ALGOLIA_APP_ID),
        ALGOLIA_API_KEY: JSON.stringify(process.env.ALGOLIA_API_KEY),
        ALGOLIA_SEARCH_KEY: JSON.stringify(process.env.ALGOLIA_SEARCH_KEY),
        ALGOLIA_INDEX_NAME: JSON.stringify(process.env.ALGOLIA_INDEX_NAME),
    })
  ]
};
