module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
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
    contentBase: __dirname,
    compress: true,
  },
};
