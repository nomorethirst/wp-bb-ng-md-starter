'use strict'

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const webpackConfig = require('./webpack.config.js')

// lets us see & debug pre-compiled code in the browser
// different values have different levels of quality and
// performance impact
const devtool =
  'source-map'

const entry = {
  main: [
    'angular',
    'angular-material',
    'babel-polyfill',
    path.resolve(__dirname, 'src/main.js')
  ]
}

// where webpack puts its compilation results
const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
}

// rules for how webpack finds imported files
const resolve = {
  // allows loading of .js, .css, and .html files
  // with or without extensions
  extensions: [
    '.js',
    '.css',
    '.html'
  ],
  // allows absolute module imports (i.e. import 'foo'
  // instead of import './foo') from node_modules
  // (allowed by default) and lib folders (not allowed
  // by default), following node's directory-based
  // module scoping rules
  modules: [
    'node_modules',
    'src'
  ]
}

const rules = [{
  test: /\.js$/,
  exclude: [/node_modules/],
  use: [ 'babel-loader' ]
}, {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}, {
  test: /\.html$/,
  exclude: [path.resolve(__dirname, 'src')], // ngtemplate will be used here
  use: 'html-loader'
}, {
  test: /\.html$/,
  exclude: [/node_modules/, path.resolve(__dirname, 'static')],
  use: [
    // ngtemplate-loader takes the html string exported by
    // html-loader, adds it to angular's template cache, and exports
    // a string that represents the template's url
    'ngtemplate-loader',
    'html-loader'
  ]
}, {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  use: [
    'url-loader?limit=1000'
  ]
}]

const plugins = [

  // the HtmlWebpackPlugin is used to inject our compiled
  // javascript files into a given template
  // index.html file, allowing us to use auto-generated
  // file names
  new HtmlWebpackPlugin({
    //title: 'ftd-twitter',
    // tells webpack to inject the compiled files into the
    // head of the document
    inject: 'head',
    // path to the index.html template file
    template: path.resolve(__dirname, 'static/index.html')
  }),
  new DashboardPlugin(),
  // provides these names to all modules
  new webpack.ProvidePlugin({
    ng: 'angular',
    md: 'angular-material'
  })
]

const devServer = {
  compress: true,
  inline: true,
  // render a fullscreen overlay on the client when the dev server
  // encounters an error.
  overlay: true,
  // allows for SPA routing without a path  prefix
  historyApiFallback: true
}

module.exports = {
  devtool,
  entry,
  output,
  resolve,
  module: { rules },
  plugins,
  devServer
}
