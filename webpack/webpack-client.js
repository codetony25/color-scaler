import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-hot-middleware/client?path=http://localhost:4000/__webpack_hmr`,
      path.join(__dirname, '../src/index.jsx')
    ]
  },
  output: {
    path: path.join(__dirname, './'),
    filename: '[name]-default.js',
    chunkFilename: '[name]-chunk-default.js',
    publicPath: '/assets/',
    pathinfo: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

