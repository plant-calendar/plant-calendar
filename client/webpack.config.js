const TSLintPlugin = require('tslint-webpack-plugin');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    // '@babel/polyfill', // enables async-await... but actually seems unnecessary
    './index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, '..', 'backend-dist/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new TSLintPlugin({
      files: ['./src/client/*.ts', './src/client/*.tsx'],
    }),
  ],
};
