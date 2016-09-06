const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('./style/style.css');


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/source/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {

  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    './source/index.js',
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      // },
      // {
      //   test: /\.scss$/,
      //   loaders: ['sass'],
      // },      
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      // },
      { test: /\.scss$/i, loader: extractCSS.extract(['css', 'sass']) },
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
    extractCSS,
    new ExtractTextPlugin("styles.scss"),
    HTMLWebpackPluginConfig,
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      template: 'source/page2.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'more-html/page3.html',
      template: 'source/more-html/page3.html',
      inject: 'body',
    }),
    // new CopyWebpackPlugin([
    //   {
    //     context: `${__dirname}/source`,
    //     from: '**/*.html',
    //     to: `${__dirname}/build`,
    //   },
    // ]),
  ],
};
