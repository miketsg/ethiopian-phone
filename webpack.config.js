const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/etPhone.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'etPhone.js',
    library: 'etPhone',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'babel',
        exclude: /(node_modules)/
      },
      {
        test: /(\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.js'],
  },
};
