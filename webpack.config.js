var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

console.log('Production: ' + prod);

module.exports = {
  entry: ['./web/index.js'],
  output: {
    path: path.join(__dirname, 'assets', 'includes'),
    filename: 'bundle.js',
    publickPath: 'includes'
  },
  plugins: prod ?
    [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
      //new webpack.ProvidePlugin({}),
      new CleanWebpackPlugin(['assets'], {
        root: __dirname,
        dry: false
      })
    ] :
    [
      new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
      //new webpack.ProvidePlugin({angular: 'angular'}),
      new CleanWebpackPlugin(['assets'], {
        root: __dirname,
        dry: false
      })
    ],
  module: {
    loaders: [
      {test: /\.html/, loader: 'raw'},
      {test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader : 'file-loader'},
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  devtool: prod ? 'source-map' : 'cheap-inline-module-source-map'
};
