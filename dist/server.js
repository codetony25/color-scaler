require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/*!***************************************!*\
  !*** external "./webpack-stats.json" ***!
  \***************************************/
/***/ function(module, exports) {

module.exports = require("./webpack-stats.json");

/***/ },
/* 2 */
/*!************************!*\
  !*** external "jassy" ***!
  \************************/
/***/ function(module, exports) {

module.exports = require("jassy");

/***/ },
/* 3 */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 4 */
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _debug = __webpack_require__(/*! debug */ 20);

var _debug2 = _interopRequireDefault(_debug);

var _path = __webpack_require__(/*! path */ 35);

var _koa = __webpack_require__(/*! koa */ 22);

var _koa2 = _interopRequireDefault(_koa);

var _koaConvert = __webpack_require__(/*! koa-convert */ 24);

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaMount = __webpack_require__(/*! koa-mount */ 26);

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaStaticCache = __webpack_require__(/*! koa-static-cache */ 28);

var _koaStaticCache2 = _interopRequireDefault(_koaStaticCache);

var _index = __webpack_require__(/*! ../src/stores/index.js */ 14);

var _index2 = _interopRequireDefault(_index);

var _renderer = __webpack_require__(/*! ./renderer.js */ 12);

var _renderer2 = _interopRequireDefault(_renderer);

var _config = __webpack_require__(/*! ./config.js */ 6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var NODE_ENV = process.env.NODE_ENV;


var app = new _koa2['default']();

_debug2['default'].enable('koa');

// production middlewares
if (NODE_ENV !== 'development') {
  app.use((0, _koaConvert2['default'])(__webpack_require__(/*! koa-compress */ 23)()));
  app.use((0, _koaConvert2['default'])(__webpack_require__(/*! koa-html-minifier */ 25)({
    caseSensitive: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  })));
}

// Proxy asset folder to webpack development server in development mode
if (NODE_ENV === 'development') {
  var proxy = __webpack_require__(/*! koa-proxy */ 27)({
    host: 'http://0.0.0.0:' + String(_config.PORT + 1),
    map: function () {
      function map(filePath) {
        return 'assets/' + String(filePath);
      }

      return map;
    }()
  });
  app.use((0, _koaConvert2['default'])((0, _koaMount2['default'])('/assets', proxy)));
} else {
  var cacheOpts = { maxAge: 86400000, gzip: true };
  app.use((0, _koaConvert2['default'])((0, _koaMount2['default'])('/assets', (0, _koaStaticCache2['default'])((0, _path.resolve)('../dist'), cacheOpts))));
}

app.use(function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function () {
    function _callee(ctx) {
      var error, redirect, pathname, search;
      return regeneratorRuntime.wrap(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                ctx.status = 200;
                _context.next = 4;
                return (0, _renderer2['default'])({
                  assets: __webpack_require__(/*! ./webpack-stats.json */ 1),
                  store: (0, _index2['default'])(),
                  location: ctx.request.url
                });

              case 4:
                ctx.body = _context.sent;


                // Don't cache assets name on dev
                if (NODE_ENV === 'development') {
                  delete __webpack_require__.c[/*require.resolve*/(/*! ./webpack-stats.json */ 1)];
                }
                _context.next = 22;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                console.log('server.js error', _context.t0);
                // Render 500 error page from server
                error = _context.t0.error;
                redirect = _context.t0.redirect;

                if (!error) {
                  _context.next = 15;
                  break;
                }

                throw error;

              case 15:
                if (!redirect) {
                  _context.next = 21;
                  break;
                }

                pathname = redirect.pathname;
                search = redirect.search;

                ctx.redirect(pathname + search);
                _context.next = 22;
                break;

              case 21:
                throw _context.t0;

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), _callee, undefined, [[0, 8]]);
    }

    return _callee;
  }()));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(_config.PORT, function (error) {
  if (error) {
    console.log('error:', error);
  }
});

// Tell parent process koa-server is started
if (process.send) process.send('online');
(0, _debug2['default'])('koa')('`koa-render-server` started on port %s', _config.PORT);
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NODE_ENV, 'NODE_ENV', '/Users/tonynguyen/Desktop/color-scaler/src/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/tonynguyen/Desktop/color-scaler/src/server.js');
})();

;

/***/ },
/* 5 */
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ function(module, exports) {

module.exports = require("babel-polyfill");

/***/ },
/* 6 */
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _process$env = process.env;
var PORT = _process$env.PORT;
var NODE_ENV = _process$env.NODE_ENV;


var APP_CONFIG = {
  shared: {},

  development: {
    PORT: parseInt(PORT, 10) || 3000
  },

  production: {
    PORT: parseInt(PORT, 10) || 3010
  }
};

// default to development config

var _default = _extends({}, APP_CONFIG.shared, APP_CONFIG[NODE_ENV] || APP_CONFIG.development);

exports["default"] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PORT, "PORT", "/Users/tonynguyen/Desktop/color-scaler/src/config.js");

  __REACT_HOT_LOADER__.register(NODE_ENV, "NODE_ENV", "/Users/tonynguyen/Desktop/color-scaler/src/config.js");

  __REACT_HOT_LOADER__.register(APP_CONFIG, "APP_CONFIG", "/Users/tonynguyen/Desktop/color-scaler/src/config.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/tonynguyen/Desktop/color-scaler/src/config.js");
})();

;
module.exports = exports['default'];

/***/ },
/* 7 */
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ 30);

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function () {
    function _callee(store, _ref2) {
      var components = _ref2.components;
      var params = _ref2.params;
      var query = _ref2.location.query;
      return regeneratorRuntime.wrap(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all(components.filter(function (c) {
                  return (0, _isFunction3['default'])(c.fetchData);
                }).map(function (c) {
                  return c.fetchData(store, params, query);
                }));

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), _callee, undefined);
    }

    return _callee;
  }()));

  return function () {
    function _default(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return _default;
  }();
}();

exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/fetch-data.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 8 */
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Html = function Html(_ref) {
  var assets = _ref.assets;
  var locale = _ref.locale;
  var body = _ref.body;
  var appState = _ref.appState;
  var css = _ref.css;
  return _react2['default'].createElement(
    'html',
    { lang: locale },
    _react2['default'].createElement(
      'head',
      null,
      _react2['default'].createElement('meta', { charSet: 'utf-8' }),
      _react2['default'].createElement('link', { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }),
      assets.style.map(function (href, idx) {
        return _react2['default'].createElement('link', { key: idx, rel: 'stylesheet', href: href });
      }),
      _react2['default'].createElement('style', {
        type: 'text/css',
        dangerouslySetInnerHTML: { __html: css } })
    ),
    _react2['default'].createElement(
      'body',
      null,
      _react2['default'].createElement('div', { id: 'app--container', dangerouslySetInnerHTML: { __html: body } }),
      _react2['default'].createElement('script', { dangerouslySetInnerHTML: { __html: 'window.__appState__ = ' + String(appState) } }),
      _react2['default'].createElement('script', { src: assets.script[0] }),
      _react2['default'].createElement('script', {
        async: true,
        defer: true,
        id: 'github-bjs',
        src: 'https://buttons.github.io/buttons.js'
      })
    )
  );
};

var _default = Html;
exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', '/Users/tonynguyen/Desktop/color-scaler/src/html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/html.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 9 */
/*!************************!*\
  !*** ./src/hydrate.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;
exports.rehydrate = exports.dehydrate = undefined;

var _each2 = __webpack_require__(/*! lodash/each */ 29);

var _each3 = _interopRequireDefault(_each2);

var _jsonStringifySafe = __webpack_require__(/*! json-stringify-safe */ 21);

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var dehydrate = exports.dehydrate = function dehydrate(store) {
  return (0, _jsonStringifySafe2['default'])(store.contents());
};

var rehydrate = exports.rehydrate = function rehydrate(store) {
  return (0, _each3['default'])(window.__appState__, function (data, storeKey) {
    return store.set(storeKey, data);
  });
};
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(dehydrate, 'dehydrate', '/Users/tonynguyen/Desktop/color-scaler/src/hydrate.js');

  __REACT_HOT_LOADER__.register(rehydrate, 'rehydrate', '/Users/tonynguyen/Desktop/color-scaler/src/hydrate.js');
})();

;

/***/ },
/* 10 */
/*!************************!*\
  !*** ./src/layout.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _jassy = __webpack_require__(/*! jassy */ 2);

var _defaultStyle = __webpack_require__(/*! ./styles/defaultStyle.js */ 15);

var _defaultStyle2 = _interopRequireDefault(_defaultStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Layout = (_temp = _class = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  Layout.prototype.render = function () {
    function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_jassy.Style, { rules: _extends({}, _defaultStyle2['default']) }),
        _react2['default'].createElement(
          'div',
          { className: 'main-container' },
          _react2['default'].createElement(
            'div',
            { className: 'view-container' },
            this.props.children
          )
        )
      );
    }

    return render;
  }();

  return Layout;
}(_react2['default'].Component), _class.displayName = 'Layout', _temp);
var _default = Layout;
exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Layout, 'Layout', '/Users/tonynguyen/Desktop/color-scaler/src/layout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/layout.jsx');
})();

;
module.exports = exports['default'];

/***/ },
/* 11 */
/*!***********************************!*\
  !*** ./src/provide-insert-css.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _class, _temp;

var _react = __webpack_require__(/*! react */ 0);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ProvideInsertCss = (_temp = _class = function (_Component) {
  _inherits(ProvideInsertCss, _Component);

  function ProvideInsertCss() {
    _classCallCheck(this, ProvideInsertCss);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ProvideInsertCss.prototype.getChildContext = function () {
    function getChildContext() {
      var insertCss = this.props.insertCss;

      return { insertCss: insertCss };
    }

    return getChildContext;
  }();

  ProvideInsertCss.prototype.render = function () {
    function render() {
      var children = this.props.children;

      return children;
    }

    return render;
  }();

  return ProvideInsertCss;
}(_react.Component), _class.childContextTypes = {
  insertCss: _react.PropTypes.func.isRequired
}, _temp);
var _default = ProvideInsertCss;
exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProvideInsertCss, 'ProvideInsertCss', '/Users/tonynguyen/Desktop/color-scaler/src/provide-insert-css.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/provide-insert-css.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 12 */
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _mobxReactDevtools = __webpack_require__(/*! mobx-react-devtools */ 33);

var _mobxReactDevtools2 = _interopRequireDefault(_mobxReactDevtools);

var _reactDom = __webpack_require__(/*! react-dom */ 36);

var _server = __webpack_require__(/*! react-dom/server */ 37);

var _reactTunnel = __webpack_require__(/*! react-tunnel */ 39);

var _reactRouter = __webpack_require__(/*! react-router */ 3);

var _routes = __webpack_require__(/*! ./routes.jsx */ 13);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(/*! ./fetch-data */ 7);

var _fetchData2 = _interopRequireDefault(_fetchData);

var _provideInsertCss = __webpack_require__(/*! ./provide-insert-css */ 11);

var _provideInsertCss2 = _interopRequireDefault(_provideInsertCss);

var _hydrate = __webpack_require__(/*! ./hydrate */ 9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _process$env = process.env;
var NODE_ENV = _process$env.NODE_ENV;
var BROWSER = _process$env.BROWSER;

var _default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function () {
    function _callee2() {
      var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var store = _ref2.store;
      var location = _ref2.location;
      var assets = _ref2.assets;

      var css, insertCss, _require, whyDidYouUpdate, App, container, _require2, AppContainer, Dev, _ret;

      return regeneratorRuntime.wrap(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                css = [];
                insertCss = BROWSER ? function (styles) {
                  return styles._insertCss();
                } : function (styles) {
                  return css.push(styles._getCss());
                };

                if (!BROWSER) {
                  _context2.next = 15;
                  break;
                }

                (0, _hydrate.rehydrate)(store);

                // track potentially unnecessary re-renders
                // if we find `debugRender` in the query string
                if (NODE_ENV === 'development' && window.location.search.includes('debugRender')) {
                  _require = __webpack_require__(/*! why-did-you-update */ 40);
                  whyDidYouUpdate = _require.whyDidYouUpdate;

                  whyDidYouUpdate(_react2['default']);
                }

                App = _react2['default'].createElement(
                  _reactTunnel.Provider,
                  { provide: { store: store } },
                  function () {
                    return _react2['default'].createElement(
                      _provideInsertCss2['default'],
                      { insertCss: insertCss },
                      _react2['default'].createElement(
                        _reactRouter.Router,
                        { history: _reactRouter.browserHistory },
                        _routes2['default']
                      )
                    );
                  }
                );
                container = document.getElementById('app--container');

                if (!(NODE_ENV !== 'development')) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt('return', (0, _reactDom.render)(App, container));

              case 9:

                // special render in development:
                // * enable react-hot-loader
                // * enable mobx-react-devtools
                _require2 = __webpack_require__(/*! react-hot-loader */ 38);
                AppContainer = _require2.AppContainer;
                Dev = _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    AppContainer,
                    { key: 0 },
                    App
                  ),
                  _react2['default'].createElement(_mobxReactDevtools2['default'], { key: 1, position: { bottom: 0, right: 20 } })
                );


                (0, _reactDom.render)(Dev, container);
                _context2.next = 19;
                break;

              case 15:
                return _context2.delegateYield(regeneratorRuntime.mark(function () {
                  function _callee() {
                    var Html, asyncMatch, _ref3, _ref4, routerError, redirect, renderProps, appState, body;

                    return regeneratorRuntime.wrap(function () {
                      function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              // server side rendering
                              Html = __webpack_require__(/*! ./html.js */ 8);

                              // promisify `match` from `react-router`

                              asyncMatch = function () {
                                function asyncMatch() {
                                  return new Promise(function (resolve) {
                                    (0, _reactRouter.match)({ route: _routes2['default'], location: location }, function () {
                                      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                                        args[_key] = arguments[_key];
                                      }

                                      return resolve(args);
                                    });
                                  });
                                }

                                return asyncMatch;
                              }();

                              _context.next = 4;
                              return asyncMatch(location, _routes2['default']);

                            case 4:
                              _ref3 = _context.sent;
                              _ref4 = _slicedToArray(_ref3, 3);
                              routerError = _ref4[0];
                              redirect = _ref4[1];
                              renderProps = _ref4[2];


                              console.log('renderProps', renderProps, routerError, redirect);

                              if (!(routerError || redirect)) {
                                _context.next = 12;
                                break;
                              }

                              throw { error: routerError, redirect: redirect };

                            case 12:
                              _context.next = 14;
                              return (0, _fetchData2['default'])(store, renderProps);

                            case 14:
                              appState = (0, _hydrate.dehydrate)(store);


                              console.log('appState', appState);
                              body = (0, _server.renderToString)(_react2['default'].createElement(
                                _reactTunnel.Provider,
                                { provide: { store: store, insertCss: insertCss } },
                                function () {
                                  return _react2['default'].createElement(
                                    _provideInsertCss2['default'],
                                    { insertCss: insertCss },
                                    _react2['default'].createElement(_reactRouter.RouterContext, renderProps)
                                  );
                                }
                              ));

                              // const body = renderToString(
                              //   <div>
                              //     <h1>Hello! Am I working?</h1>
                              //     <h3>Coool.</h3>
                              //   </div>
                              // );

                              return _context.abrupt('return', {
                                v: (0, _server.renderToString)(_react2['default'].createElement(Html, {
                                  assets: assets,
                                  locale: 'fr_FR',
                                  body: body,
                                  appState: appState,
                                  css: css.join('')
                                }))
                              });

                            case 18:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }

                      return _callee$;
                    }(), _callee, undefined);
                  }

                  return _callee;
                }())(), 't0', 16);

              case 16:
                _ret = _context2.t0;

                if (!((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object")) {
                  _context2.next = 19;
                  break;
                }

                return _context2.abrupt('return', _ret.v);

              case 19:
              case 'end':
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), _callee2, undefined);
    }

    return _callee2;
  }()));

  return function () {
    function _default(_x) {
      return _ref.apply(this, arguments);
    }

    return _default;
  }();
}();

exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NODE_ENV, 'NODE_ENV', '/Users/tonynguyen/Desktop/color-scaler/src/renderer.js');

  __REACT_HOT_LOADER__.register(BROWSER, 'BROWSER', '/Users/tonynguyen/Desktop/color-scaler/src/renderer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/renderer.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 13 */
/*!************************!*\
  !*** ./src/routes.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ 3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _default = _react2['default'].createElement(
  _reactRouter.Route,
  { path: '/' },
  _react2['default'].createElement(
    _reactRouter.Route,
    { component: __webpack_require__(/*! ./layout.jsx */ 10) },
    _react2['default'].createElement(_reactRouter.IndexRoute, { component: __webpack_require__(/*! ./views/Home/index.js */ 19) })
  )
);

exports['default'] = _default;

// export default [
//   {
//     path: '/',
//     component: require('./layout.jsx'),
//     indexRoute: { component: require('./views/Home/index.js') }
//   }
// ];

// const routes = (
//   <Route path="/">
//     <Route component={Layout}>
//       <IndexRoute component={Home} />
//     </Route>
//   </Route>
// );
//
// class Root extends React.Component {
//   static displayName = 'Root';
//
//   constructor (props) {
//     super(props);
//   }
//
//   onRouteUpdateScrollTop = () => window.scrollTo(0, 0);
//
//   render () {
//     return (
//       <Router
//         onUpdate={this.onRouteUpdateScrollTop()}
//         history={browserHistory}
//       >
//         {routes}
//       </Router>
//     );
//   }
// }
//
// export default Root;

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/routes.jsx');
})();

;
module.exports = exports['default'];

/***/ },
/* 14 */
/*!*****************************!*\
  !*** ./src/stores/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _mobxStore = __webpack_require__(/*! mobx-store */ 34);

var _mobxStore2 = _interopRequireDefault(_mobxStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultState = {
  todos: []
};

var _default = function _default() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
  return new _mobxStore2['default'](state);
};

exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultState, 'defaultState', '/Users/tonynguyen/Desktop/color-scaler/src/stores/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/stores/index.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 15 */
/*!************************************!*\
  !*** ./src/styles/defaultStyle.js ***!
  \************************************/
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;
var defaultStyles = {
  'html': {
    boxSizing: 'border-box',
    height: '100%'
  },

  'body': {
    margin: 0,
    padding: 0,
    minHeight: '100%',
    position: 'relative',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility'
  },

  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },

  'a': {
    textDecoration: 'none',
    cursor: 'pointer'
  },

  'ul, ol': {
    listStyle: 'none',
    padding: 0
  }
};

var _default = defaultStyles;
exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultStyles, 'defaultStyles', '/Users/tonynguyen/Desktop/color-scaler/src/styles/defaultStyle.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/styles/defaultStyle.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 16 */
/*!*********************************!*\
  !*** ./src/views/Home/Home.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _class, _class2, _temp;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(/*! mobx-react */ 32);

var _jassy = __webpack_require__(/*! jassy */ 2);

var _HomeStyle = __webpack_require__(/*! ./HomeStyle */ 18);

var _HomeStyle2 = _interopRequireDefault(_HomeStyle);

var _HomeState = __webpack_require__(/*! ./HomeState */ 17);

var _HomeState2 = _interopRequireDefault(_HomeState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var homeState = new _HomeState2['default']();

var Home = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.renderGeneratedResult = function () {
      if (homeState.generatedColorScalePercentage) {
        return _react2['default'].createElement(
          'div',
          { className: 'home-color-result' },
          _react2['default'].createElement(
            'h3',
            null,
            'RESULTS! For Lighten Percentage:'
          ),
          _react2['default'].createElement(
            'h1',
            null,
            '$variable: ',
            _react2['default'].createElement(
              'span',
              null,
              homeState.generatedColorScalePercentage
            )
          )
        );
      } else {
        return null;
      }
    };

    _this.renderErrorMessage = function () {
      if (homeState.generateErrorMessage) {
        return _react2['default'].createElement(
          'div',
          { className: 'home-generate-error' },
          _react2['default'].createElement(
            'p',
            null,
            homeState.generateErrorMessage
          )
        );
      }
    };

    _this.state = {
      styles: (0, _HomeStyle2['default'])()
    };
    return _this;
  }

  Home.prototype.render = function () {
    function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'home-container' },
          _react2['default'].createElement(_jassy.Style, { rules: this.state.styles }),
          _react2['default'].createElement(
            'div',
            { className: 'home-title' },
            _react2['default'].createElement(
              'h1',
              null,
              'Hello Color Scaler!! (BETA)'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Currently supporting only Grayscale colors between black\n              and white. Will include more colors in the soon!'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'home-choose-color' },
            _react2['default'].createElement(
              'button',
              { onClick: function () {
                  function onClick() {
                    return homeState.selectColor('#ffffff');
                  }

                  return onClick;
                }() },
              'White'
            ),
            _react2['default'].createElement(
              'button',
              { onClick: function () {
                  function onClick() {
                    return homeState.selectColor('#000000');
                  }

                  return onClick;
                }() },
              'Black'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'home-color-starting-input' },
            _react2['default'].createElement(
              'h3',
              null,
              'Selected Color: '
            ),
            _react2['default'].createElement('input', {
              type: 'text',
              disabled: true,
              value: homeState.startCurrentColor,
              onChange: homeState.handleStartColorChange }),
            _react2['default'].createElement(
              'span',
              null,
              homeState.startRgbColor ? homeState.startRgbColor : ''
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'home-color-ending-input' },
            _react2['default'].createElement(
              'h3',
              null,
              'Desired Hex Color: '
            ),
            _react2['default'].createElement('input', {
              type: 'text',
              onChange: homeState.handleEndColorChange
            }),
            _react2['default'].createElement(
              'span',
              null,
              homeState.endRgbColor ? homeState.endRgbColor : ''
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'home-generate-color' },
            _react2['default'].createElement(
              'h2',
              null,
              'Generate Color Scale'
            ),
            this.renderErrorMessage(),
            _react2['default'].createElement(
              'button',
              {
                onClick: function () {
                  function onClick() {
                    return homeState.onGenerateColorClick('lighten');
                  }

                  return onClick;
                }() },
              'Lighten Percentage!'
            ),
            _react2['default'].createElement(
              'button',
              {
                onClick: function () {
                  function onClick() {
                    return homeState.onGenerateColorClick('darken');
                  }

                  return onClick;
                }() },
              'Darken Percentage!'
            )
          ),
          this.renderGeneratedResult()
        )
      );
    }

    return render;
  }();

  return Home;
}(_react2['default'].Component), _class2.displayName = 'Home', _temp)) || _class;

var _default = Home;
exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(homeState, 'homeState', '/Users/tonynguyen/Desktop/color-scaler/src/views/Home/Home.jsx');

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/tonynguyen/Desktop/color-scaler/src/views/Home/Home.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/views/Home/Home.jsx');
})();

;
module.exports = exports['default'];

/***/ },
/* 17 */
/*!*************************************!*\
  !*** ./src/views/Home/HomeState.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;
exports['default'] = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _mobx = __webpack_require__(/*! mobx */ 31);

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var HomeState = (_class = function () {
  function HomeState() {
    var _this = this;

    _classCallCheck(this, HomeState);

    _initDefineProp(this, 'startCurrentColor', _descriptor, this);

    _initDefineProp(this, 'endCurrentColor', _descriptor2, this);

    _initDefineProp(this, 'generatedColorScalePercentage', _descriptor3, this);

    _initDefineProp(this, 'generateErrorMessage', _descriptor4, this);

    _initDefineProp(this, 'startRgbColor', _descriptor5, this);

    _initDefineProp(this, 'endRgbColor', _descriptor6, this);

    this.selectColor = function (color) {
      _this.startCurrentColor = color;
      _this.generateGrayscaleColors();
      return _this.startCurrentColor;
    };

    this.handleStartColorChange = function () {
      return;
    };

    this.handleEndColorChange = function (event) {
      _this.endCurrentColor = event.target.value;
    };

    this.handleErrorMessage = function () {
      _this.generateErrorMessage = 'This is not a valid color hex value. For example: #e0e0e0 or #fff';
    };

    this.generateGrayscaleColors = function () {
      for (var i = 0; i <= 10000; i++) {
        var percent = i / 10000,
            fixedPercent = (percent * 100).toFixed(1),
            numberAfterDecimal = Number((fixedPercent / 10).toString().split('')[2]),
            numberBeforeDecimal = Number((fixedPercent / 10).toString().split('')[0]),
            hexString = _this.shadeColor(_this.startCurrentColor, percent);

        if (numberAfterDecimal === 2 || numberAfterDecimal === 4 || numberAfterDecimal === 6 || numberAfterDecimal === 8 || fixedPercent / 10 === 10) {
          fixedPercent = Math.floor(Number(fixedPercent));
        }

        _this.storeGrayscaleColors[hexString] = {
          hexColor: hexString.toUpperCase(),
          percent: fixedPercent
        };
      }
    };

    this.onGenerateColorClick = function (shadeType) {
      console.log('LIGHTEN GENERATE');
      console.log('ArraY!?', _this.storeGrayscaleColors);
      _this.generateErrorMessage = '';
      var hexStringArray = void 0;

      if (_this.endCurrentColor) {
        hexStringArray = _this.endCurrentColor.split('');
      } else {
        _this.handleErrorMessage();
        return;
      }

      if ((hexStringArray.length === 4 || hexStringArray.length === 7) && hexStringArray[0] === '#') {

        if (hexStringArray[1] === hexStringArray[2] && hexStringArray[1] === hexStringArray[3] && hexStringArray.length === 4) {
          _this.endCurrentColor = '' + String(_this.endCurrentColor) + String(hexStringArray[1]) + String(hexStringArray[1]) + String(hexStringArray[1]);
        }

        _this.endRgbColor = _this.convertHexToRgb(_this.endCurrentColor);
        _this.startRgbColor = _this.convertHexToRgb(_this.startCurrentColor);
        _this.endCurrentColor = _this.endCurrentColor.toUpperCase();

        for (var key in _this.storeGrayscaleColors) {
          if (_this.storeGrayscaleColors[key].hexColor === _this.endCurrentColor) {
            var colorPercent = _this.storeGrayscaleColors[key].percent;
            _this.generatedColorScalePercentage = 'lighten(' + String(_this.startCurrentColor) + ', ' + String(colorPercent) + '%);';
            return;
          }
        }
      } else {
        _this.handleErrorMessage();
      }
    };

    this.convertHexToRgb = function (hex, opacity) {
      if (hex.split('')[0] !== '#' && hex.split('').length !== 7) {
        console.warn('function: convertHexToRgb has to have at least 7 characters\n         or and has to be a hex string like this: #e0e0e0');
      }

      hex = hex.replace('#', '');

      var result = void 0,
          red = parseInt(hex.substring(0, 2), 16),
          green = parseInt(hex.substring(2, 4), 16),
          blue = parseInt(hex.substring(4, 6), 16);

      if (!opacity) {
        result = 'rgb(' + String(red) + ', ' + String(green) + ', ' + String(blue) + ')';
      } else {
        result = 'rgba(' + String(red) + ', ' + String(green) + ', ' + String(blue) + ', ' + opacity / 100 + ')';
      }

      return result;
    };

    this.shadeColor = function (color, percent) {
      var f = parseInt(color.slice(1), 16),
          t = percent < 0 ? 0 : 255,
          p = percent < 0 ? percent * -1 : percent,
          R = f >> 16,
          G = f >> 8 & 0x00FF,
          B = f & 0x0000FF;
      return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    };

    this.blendColors = function (c0, c1, p) {
      var f = parseInt(c0.slice(1), 16),
          t = parseInt(c1.slice(1), 16),
          R1 = f >> 16,
          G1 = f >> 8 & 0x00FF,
          B1 = f & 0x0000FF,
          R2 = t >> 16,
          G2 = t >> 8 & 0x00FF,
          B2 = t & 0x0000FF;
      return "#" + (0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 + (Math.round((G2 - G1) * p) + G1) * 0x100 + (Math.round((B2 - B1) * p) + B1)).toString(16).slice(1);
    };

    this.storeGrayscaleColors = {};

    (0, _mobx.autorun)(function () {
      _this.generateGrayscaleColors();
    });
  }

  return HomeState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'startCurrentColor', [_mobx.observable], {
  enumerable: true,
  initializer: function () {
    function initializer() {
      return '#000000';
    }

    return initializer;
  }()
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'endCurrentColor', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'generatedColorScalePercentage', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'generateErrorMessage', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'startRgbColor', [_mobx.observable], {
  enumerable: true,
  initializer: function () {
    function initializer() {
      return '';
    }

    return initializer;
  }()
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'endRgbColor', [_mobx.observable], {
  enumerable: true,
  initializer: function () {
    function initializer() {
      return '';
    }

    return initializer;
  }()
})), _class);
exports['default'] = HomeState;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomeState, 'HomeState', '/Users/tonynguyen/Desktop/color-scaler/src/views/Home/HomeState.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 18 */
/*!*************************************!*\
  !*** ./src/views/Home/HomeStyle.js ***!
  \*************************************/
/***/ function(module, exports) {

"use strict";
'use strict';

exports.__esModule = true;
var homeStyles = function homeStyles() {
  return {
    '.home-container': {

      '.home-title': {
        textAlign: 'center',
        paddingTop: 30,
        color: 'red',

        'p': {
          color: 'blue'
        }
      },

      '.home-choose-color': {
        textAlign: 'center',

        'button': {
          width: 100,
          height: 40
        },

        'button:first-child': {
          marginRight: 50
        }
      },

      '.home-color-starting-input': {
        textAlign: 'center',

        'h3': {
          display: 'inline-block',
          width: 220
        },

        'input': {
          margin: 30,
          padding: 20,
          fontSize: 25
        }
      },

      '.home-color-ending-input': {
        textAlign: 'center',

        'h3': {
          display: 'inline-block',
          width: 220,
          flaot: 'left'
        },

        'input': {
          margin: 30,
          padding: 20,
          fontSize: 25
        }
      },

      '.home-generate-color': {
        textAlign: 'center',
        margin: 50,

        'button': {
          width: 150,
          height: 60,
          marginRight: 25
        }
      },

      '.home-color-result': {
        textAlign: 'center',

        'h1': {
          color: 'green'
        },

        'span': {
          color: 'purple'
        }
      },

      '.home-generate-error': {
        textAlign: 'center',

        'p': {
          color: 'red'
        }
      }
    }
  };
};

var _default = homeStyles;
exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(homeStyles, 'homeStyles', '/Users/tonynguyen/Desktop/color-scaler/src/views/Home/HomeStyle.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/views/Home/HomeStyle.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 19 */
/*!*********************************!*\
  !*** ./src/views/Home/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

exports.__esModule = true;

var _Home = __webpack_require__(/*! ./Home.jsx */ 16);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _default = _Home2['default'];
exports['default'] = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tonynguyen/Desktop/color-scaler/src/views/Home/index.js');
})();

;
module.exports = exports['default'];

/***/ },
/* 20 */
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 21 */
/*!**************************************!*\
  !*** external "json-stringify-safe" ***!
  \**************************************/
/***/ function(module, exports) {

module.exports = require("json-stringify-safe");

/***/ },
/* 22 */
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 23 */
/*!*******************************!*\
  !*** external "koa-compress" ***!
  \*******************************/
/***/ function(module, exports) {

module.exports = require("koa-compress");

/***/ },
/* 24 */
/*!******************************!*\
  !*** external "koa-convert" ***!
  \******************************/
/***/ function(module, exports) {

module.exports = require("koa-convert");

/***/ },
/* 25 */
/*!************************************!*\
  !*** external "koa-html-minifier" ***!
  \************************************/
/***/ function(module, exports) {

module.exports = require("koa-html-minifier");

/***/ },
/* 26 */
/*!****************************!*\
  !*** external "koa-mount" ***!
  \****************************/
/***/ function(module, exports) {

module.exports = require("koa-mount");

/***/ },
/* 27 */
/*!****************************!*\
  !*** external "koa-proxy" ***!
  \****************************/
/***/ function(module, exports) {

module.exports = require("koa-proxy");

/***/ },
/* 28 */
/*!***********************************!*\
  !*** external "koa-static-cache" ***!
  \***********************************/
/***/ function(module, exports) {

module.exports = require("koa-static-cache");

/***/ },
/* 29 */
/*!******************************!*\
  !*** external "lodash/each" ***!
  \******************************/
/***/ function(module, exports) {

module.exports = require("lodash/each");

/***/ },
/* 30 */
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ function(module, exports) {

module.exports = require("lodash/isFunction");

/***/ },
/* 31 */
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ function(module, exports) {

module.exports = require("mobx");

/***/ },
/* 32 */
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/***/ function(module, exports) {

module.exports = require("mobx-react");

/***/ },
/* 33 */
/*!**************************************!*\
  !*** external "mobx-react-devtools" ***!
  \**************************************/
/***/ function(module, exports) {

module.exports = require("mobx-react-devtools");

/***/ },
/* 34 */
/*!*****************************!*\
  !*** external "mobx-store" ***!
  \*****************************/
/***/ function(module, exports) {

module.exports = require("mobx-store");

/***/ },
/* 35 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 36 */
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ function(module, exports) {

module.exports = require("react-dom");

/***/ },
/* 37 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 38 */
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/***/ function(module, exports) {

module.exports = require("react-hot-loader");

/***/ },
/* 39 */
/*!*******************************!*\
  !*** external "react-tunnel" ***!
  \*******************************/
/***/ function(module, exports) {

module.exports = require("react-tunnel");

/***/ },
/* 40 */
/*!*************************************!*\
  !*** external "why-did-you-update" ***!
  \*************************************/
/***/ function(module, exports) {

module.exports = require("why-did-you-update");

/***/ },
/* 41 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */5);
module.exports = __webpack_require__(/*! /Users/tonynguyen/Desktop/color-scaler/src/server.js */4);


/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map