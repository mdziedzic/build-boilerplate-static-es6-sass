require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const processHTMLPages = require('./processHTMLHelper.js');
const autoprefixer = require('autoprefixer');

const extractCSS = new ExtractTextPlugin('./style/style.css');
const plugins = [
  extractCSS,
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
        test: [/\.scss$/i, /\.css$/],
        loader: extractCSS.extract(['css?-minimize', 'postcss', 'sass']),
      },
    ],
  },
  postcss: [autoprefixer()],
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'index.js',
  },
  devServer: {
    contentBase: `${__dirname}/source`,
  },
  plugins,
};
