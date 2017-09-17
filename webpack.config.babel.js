const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin =
  require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin =
  require('./lib/webpack/StaticSiteGenerator');

const distPath = path.resolve(__dirname, 'dist');

const devStylesRule = {
  test: /\.scss$/,
  use: [{
    loader: 'style-loader?sourceMap',
  }, {
    loader: 'css-loader?sourceMap',
  }, {
    loader: 'sass-loader?sourceMap',
  }],
};

const prodStylesRule = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader?sourceMap',
    // resolve-url-loader may be chained before sass-loader if necessary
    use: [
      'css-loader?sourceMap',
      'postcss-loader?sourceMap',
      'sass-loader?sourceMap',
    ],
  }),
};

const isProd = process.env.NODE_ENV === 'production';

const stylesRule = isProd ? prodStylesRule : devStylesRule;

export default {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  module: {
    rules: [
      stylesRule,
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
        },
      }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: distPath,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new StaticSiteGeneratorPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
};
