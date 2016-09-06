require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('./style/style.css');
const processHTMLPages = require('./processHTMLHelper.js');
const plugins = [
  extractCSS,
  new ExtractTextPlugin('styles.scss'),
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
    extensions: ['', '.js'],
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'index.js',
  },
  devServer: {
    contentBase: './build',
  },
  plugins,
};
