const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/source/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './source/index.js',
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },

  resolve: {
    extensions: ['', '.js'],
  },

  output: {
    path: `${__dirname}/build`,
    filename: 'index.js',
  },

  devServer: {
    contentBase: './build',
  },

  plugins: [
    HTMLWebpackPluginConfig,
  ],
};
