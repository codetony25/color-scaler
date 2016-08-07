process.env.BABEL_ENV = 'browser';
process.env.NODE_ENV = 'development';

require('babel-register');
require('babel-polyfill');

const debug = require('debug');

const startRenderServer = require('./start-render-server');
const startWebpackServer = require('./start-webpack-server');

debug.enable('dev,koa');

startWebpackServer(startRenderServer);
