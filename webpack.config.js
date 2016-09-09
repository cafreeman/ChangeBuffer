const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/lib/index.ts',
  output: {
    filename: 'dist/cjs/index.js',
  },
  resolve: {
    extensions: ['.ts', '.js', ''],
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['lodash'],
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          tsconfig: 'tsconfig.json'
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new LodashModuleReplacementPlugin({
      currying: true,
      paths: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
}
