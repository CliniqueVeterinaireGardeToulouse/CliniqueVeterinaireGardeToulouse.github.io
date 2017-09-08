module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
  },
};
