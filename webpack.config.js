require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const processHTMLPages = require('./processHTMLHelper.js');
const autoprefixer = require('autoprefixer');

const extractCSS = new ExtractTextPlugin('style.css');
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
        loader: extractCSS.extract('style-loader', 'css?-minimize!postcss!sass'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]',
          context: './source',
        },
      },
    ],
  },
  postcss: [autoprefixer()],
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
  output: {
    path: './build',
    filename: 'index.js',
  },
  devServer: {
    contentBase: './source',
  },
  plugins,
};
