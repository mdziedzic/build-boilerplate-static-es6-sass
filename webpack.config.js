require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const processHTMLPages = require('./processHTMLHelper.js');

const extractCSS = new ExtractTextPlugin('./style/style.css');
const plugins = [
  extractCSS,
  new CopyWebpackPlugin([{
    from: `${__dirname}/source/images`,
    to: `${__dirname}/build/images`,
  }]),
].concat(processHTMLPages());

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
        test: /\.scss$/i,
        loader: extractCSS.extract(['css', 'sass']),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'index.js',
  },
  devServer: {
    contentBase: `${__dirname}/build`,
  },
  plugins,
};
