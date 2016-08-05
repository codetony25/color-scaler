var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(process.env.PORT || 8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});


// var express = require('express');
// var path = require('path');
//
// var app = express();
//
// var isProduction = process.env.NODE_ENV === 'production';
// var port = isProduction ? process.env.PORT : 3000;
// var publicPath = path.resolve(__dirname, 'dist');
//
// app.use(express.static(publicPath));
//
// app.listen(port, function () {
//   console.log('Server running on port ' + port);
// });
