const path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'etphone.js',
    library: 'etPhone',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
    ]
  }
};
