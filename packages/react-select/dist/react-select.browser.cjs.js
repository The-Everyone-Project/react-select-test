'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base_dist_reactSelect = require('./Select-093169c0.browser.cjs.js');
var stateManager = require('./stateManager-93dac90e.browser.cjs.js');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _inherits = require('@babel/runtime/helpers/inherits');
var index$1 = require('./index-f53a9239.browser.cjs.js');
var React = require('react');
var core = require('@emotion/core');
var createCache = require('@emotion/cache');
var memoizeOne = require('memoize-one');
require('@babel/runtime/helpers/objectWithoutProperties');
require('@babel/runtime/helpers/extends');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/assertThisInitialized');
require('react-dom');
require('@babel/runtime/helpers/typeof');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('react-input-autosize');
require('@babel/runtime/helpers/defineProperty');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefault(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefault(_createClass);
var _inherits__default = /*#__PURE__*/_interopDefault(_inherits);
var React__default = /*#__PURE__*/_interopDefault(React);
var createCache__default = /*#__PURE__*/_interopDefault(createCache);
var memoizeOne__default = /*#__PURE__*/_interopDefault(memoizeOne);

var NonceProvider = /*#__PURE__*/function (_Component) {
  _inherits__default['default'](NonceProvider, _Component);

  var _super = index$1._createSuper(NonceProvider);

  function NonceProvider(props) {
    var _this;

    _classCallCheck__default['default'](this, NonceProvider);

    _this = _super.call(this, props);

    _this.createEmotionCache = function (nonce) {
      return createCache__default['default']({
        nonce: nonce
      });
    };

    _this.createEmotionCache = memoizeOne__default['default'](_this.createEmotionCache);
    return _this;
  }

  _createClass__default['default'](NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return /*#__PURE__*/React__default['default'].createElement(core.CacheProvider, {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(React.Component);

var index = stateManager.manageState(base_dist_reactSelect.Select);

exports.createFilter = base_dist_reactSelect.createFilter;
exports.defaultTheme = base_dist_reactSelect.defaultTheme;
exports.mergeStyles = base_dist_reactSelect.mergeStyles;
exports.components = index$1.components;
exports.NonceProvider = NonceProvider;
exports.default = index;
