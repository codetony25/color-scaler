var Koa = require('koa');
var convert = require('koa-convert');
var webpack = require('webpack');
var koaDevMiddleware = require('koa-webpack-dev-middleware');
var koaHotMiddleware = require('koa-webpack-hot-middleware');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

var app = new Koa();

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(process.env.PORT || 3030, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3030');
});
