(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"));
	else if(typeof define === 'function' && define.amd)
		define(["fs"], factory);
	else if(typeof exports === 'object')
		exports["print"] = factory(require("fs"));
	else
		root["print"] = factory(root["fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var str = '%fBlue,bgGreen;Blue text, green background. %fRed;red text%bgBlue;, blue background.\\%bgRed; This must be not changed.';

	(0, _index2.default)(str);

	(0, _index2.default)('test $a;', { a: 8 }, 'final');

	(0, _index2.default)(str, 'noStyles,final');

	(0, _index2.default)((0, _index2.default)('test $b;', 'final', { b: 12 }), 'final', { b: 12 });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _print = __webpack_require__(2);

	var _print2 = _interopRequireDefault(_print);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _print2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _print = __webpack_require__(3);

	var _print2 = _interopRequireDefault(_print);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _print2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _fs = __webpack_require__(4);

	var _styles = __webpack_require__(5);

	var _styles2 = _interopRequireDefault(_styles);

	var _getVars = __webpack_require__(8);

	var _getVars2 = _interopRequireDefault(_getVars);

	var _getOptions = __webpack_require__(9);

	var _getOptions2 = _interopRequireDefault(_getOptions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function print() {
		var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var arg2 = arguments[1];
		var arg3 = arguments[2];

		var vars = (0, _getVars2.default)(arg2, arg3);
		var options = (0, _getOptions2.default)(arg2, arg3);

		var _options$noStyles = options.noStyles,
		    noStyles = _options$noStyles === undefined ? false : _options$noStyles,
		    _options$noVars = options.noVars,
		    noVars = _options$noVars === undefined ? false : _options$noVars,
		    _options$final = options.final,
		    final = _options$final === undefined ? false : _options$final,
		    _options$encoding = options.encoding,
		    encoding = _options$encoding === undefined ? 'utf8' : _options$encoding;


		str = '' + str;

		if (!noStyles) str = str.replace(/\\?%\w+,?\w*;/g, function (v) {
			return v.substr(0, 1) === '\\' ? v.substr(1) : v.substring(1, v.length - 1).split(',').map(function (v) {
				return _styles2.default[v] || '';
			}).join('');
		});

		if (!noVars) str = str.replace(/\\?\$\w;/, function (v) {
			return v.substr(0, 1) === '\\' ? v.substr(1) : vars[v.substring(1, v.length - 1)] || v;
		});

		if (final) str = '' + str + _styles2.default.Reset + '\n';

		return (0, _fs.writeSync)(1, str, encoding);
	}

	exports.default = print;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _common2 = __webpack_require__(6);

	var _common = _interopRequireWildcard(_common2);

	var _colors = __webpack_require__(7);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function toFormat() {
		var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var pref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		var res = {};

		for (var key in obj) {
			res["" + pref + key] = "\x1B[" + obj[key] + "m";
		}return res;
	}

	function setColors() {
		var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		var colorList = {};

		colors.forEach(function (color, i) {
			colorList[color] = i + shift;
		});

		return colorList;
	}

	var styles = _extends({}, toFormat(_common), toFormat(setColors(_colors2.default, 30), 'f'), toFormat(setColors(_colors2.default, 40), 'bg'));

	exports.default = styles;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Reset = exports.Reset = 0;
	var Bright = exports.Bright = 1;
	var Dim = exports.Dim = 2;
	var Underscore = exports.Underscore = 4;
	var Blink = exports.Blink = 5;
	var Reverse = exports.Reverse = 7;
	var Hidden = exports.Hidden = 8;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = 'Black,Red,Green,Yellow,Blue,Magenta,Cyan,White'.split(',');

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isObj = function isObj(v) {
		return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? v : undefined;
	};

	exports.default = function (v1, v2) {
		return isObj(v1) || isObj(v2) || {};
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var strToOpts = function strToOpts(str) {
		return typeof str === 'string' ? str.split(',').reduce(function (o, key) {
			o[key] = true;return o;
		}, {}) : {};
	};

	exports.default = function (v1, v2) {
		return _extends({}, strToOpts(v1), strToOpts(v2));
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map