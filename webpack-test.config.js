module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'dist/index.js',
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
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
}
