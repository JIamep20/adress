var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const host = 'localhost';
const port = 8888;


config.entry = config.entry.concat([
  'webpack-dev-server/client?http://' + host +':' + port,
  'webpack/hot/only-dev-server'
]);

config.output = {
  path: path.join(__dirname, 'static', 'includes'),
  filename: 'bundle.js',
  publicPath: 'http://' + host + ':' + port + '/includes/'
};

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({template: './web/index.html'})
]);

config.devServer = {
  contentBase: host + ':' + port,
  host: host,
  port: port,
  stats: 'minimal',
  hot: true,
  inline: true
};

module.exports = config;
