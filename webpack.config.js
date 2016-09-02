const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'dist/index.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist','build']),
    // new webpack.optimize.OccurrenceOrderPlugin,
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
  ]
}
