const path = require('path')

module.exports = {
  context: __dirname,
  entry: './frontend/todo_redux.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: './dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/preset-env'],
        },
      },
    ],
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
};
