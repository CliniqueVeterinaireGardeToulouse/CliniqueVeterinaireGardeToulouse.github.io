const path = require('path');
const webpack = require('webpack');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader?sourceMap',
      }, {
        loader: 'css-loader?sourceMap',
      }, {
        loader: 'sass-loader?sourceMap',
      }],
    }],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: distPath,
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
