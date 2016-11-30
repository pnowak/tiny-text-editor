/******/ (function(modules) { // webpackBootstrap
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

	var _editor = __webpack_require__(1);

	var _editor2 = _interopRequireDefault(_editor);

	var _helpers = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var editor = new _editor2.default();

	editor.create((0, _helpers.get)('editor'), {
	    toolbar: ['bold', 'italic', 'undo', 'redo']
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typing = __webpack_require__(2);

	var _typing2 = _interopRequireDefault(_typing);

	var _helpers = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var typing = new _typing2.default();

	var Editor = function () {
		function Editor(element) {
			var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, Editor);

			this.element = element;
			this.config = config;
		}

		_createClass(Editor, [{
			key: 'create',
			value: function create(element, config) {
				var root = document.createElement('div');
				var content = document.createTextNode(element.innerText);

				(0, _helpers.get)('editor').addEventListener('keydown', function (e) {
					return typing.handleKeypress(e);
				}, false);

				root.setAttribute('contentEditable', true);
				root.classList.add('root');
				root.appendChild(content);console.log(this);

				return element.replaceChild(root, element.childNodes[1]);
			}
		}]);

		return Editor;
	}();

	exports.default = Editor;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Typing = function () {
			function Typing() {
					var _keyCodeToKeyName;

					_classCallCheck(this, Typing);

					this.keyCodeToKeyName = (_keyCodeToKeyName = {
							// Keys with words or arrows on them
							8: 'Backspace', 9: 'Tab', 13: 'Enter', 16: 'Shift', 17: 'Control', 18: 'Alt',
							19: 'Pause', 20: 'CapsLock', 27: 'Esc', 32: 'Spacebar', 33: 'PageUp',
							34: 'PageDown', 35: 'End', 36: 'Home', 37: 'Left', 38: 'Up', 39: 'Right',
							40: 'Down', 45: 'Insert', 46: 'Del',

							// Number keys on main keyboard (not keypad)
							48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9',

							// Letter keys. Note that we don't distinguish upper and lower case
							65: 'A', 66: 'B', 67: 'C', 68: 'D', 69: 'E', 70: 'F', 71: 'G', 72: 'H', 73: 'I',
							74: 'J', 75: 'K', 76: 'L', 77: 'M', 78: 'N', 79: 'O', 80: 'P', 81: 'Q', 82: 'R',
							83: 'S', 84: 'T', 85: 'U', 86: 'V', 87: 'W', 88: 'X', 89: 'Y', 90: 'Z',

							97: 'a', 261: 'ą', 98: 'b', 99: 'c', 263: 'ć', 100: 'd', 101: 'e', 281: 'ę', 102: 'f',
							103: 'g', 104: 'h', 105: 'i', 106: 'j', 107: 'k', 108: 'l', 322: 'ł', 109: 'm', 110: 'n',
							324: 'ń', 111: 'o', 243: 'ó', 112: 'p', 113: 'q', 114: 'r', 115: 's', 347: 'ś', 116: 't',
							117: 'u', 118: 'v', 119: 'w', 120: 'x', 121: 'y', 122: 'z', 378: 'ź', 380: 'ż',

							// Keypad numbers and punctuation keys. (Opera does not support these.)
							96: '0' }, _defineProperty(_keyCodeToKeyName, '97', '1'), _defineProperty(_keyCodeToKeyName, '98', '2'), _defineProperty(_keyCodeToKeyName, '99', '3'), _defineProperty(_keyCodeToKeyName, '100', '4'), _defineProperty(_keyCodeToKeyName, '101', '5'), _defineProperty(_keyCodeToKeyName, '102', '6'), _defineProperty(_keyCodeToKeyName, '103', '7'), _defineProperty(_keyCodeToKeyName, '104', '8'), _defineProperty(_keyCodeToKeyName, '105', '9'), _defineProperty(_keyCodeToKeyName, '106', 'Multiply'), _defineProperty(_keyCodeToKeyName, '107', 'Add'), _defineProperty(_keyCodeToKeyName, '109', 'Subtract'), _defineProperty(_keyCodeToKeyName, '110', 'Decimal'), _defineProperty(_keyCodeToKeyName, '111', 'Divide'), _defineProperty(_keyCodeToKeyName, 59, ';'), _defineProperty(_keyCodeToKeyName, 61, '='), _defineProperty(_keyCodeToKeyName, 186, ';'), _defineProperty(_keyCodeToKeyName, 187, '='), _defineProperty(_keyCodeToKeyName, 188, ','), _defineProperty(_keyCodeToKeyName, 190, '.'), _defineProperty(_keyCodeToKeyName, 191, '/'), _defineProperty(_keyCodeToKeyName, 192, '`'), _defineProperty(_keyCodeToKeyName, 219, '['), _defineProperty(_keyCodeToKeyName, 220, '\\'), _defineProperty(_keyCodeToKeyName, 221, ']'), _defineProperty(_keyCodeToKeyName, 222, "'"), _keyCodeToKeyName);
			}

			_createClass(Typing, [{
					key: 'handleKeypress',
					value: function handleKeypress(e) {
							var key = this.keyCodeToKeyName[e.which];

							console.log(key);
					}
			}]);

			return Typing;
	}();

	exports.default = Typing;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.get = get;
	function get(id) {
	    return document.getElementById(id);
	}

/***/ }
/******/ ]);