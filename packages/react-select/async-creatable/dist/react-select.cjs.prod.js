"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var async_dist_reactSelect = require("../../async/dist/react-select.cjs.prod.js"), creatable_dist_reactSelect = require("../../creatable/dist/react-select.cjs.prod.js"), stateManager = require("../../dist/stateManager-be2bf9b2.cjs.prod.js"), base_dist_reactSelect = require("../../dist/Select-7ba344ec.cjs.prod.js");

require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/objectWithoutProperties"), 
require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), 
require("@babel/runtime/helpers/inherits"), require("../../dist/index-1d123a5d.cjs.prod.js"), 
require("@babel/runtime/helpers/typeof"), require("@emotion/core"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize"), require("@babel/runtime/helpers/defineProperty"), 
require("react"), require("react-dom"), require("@babel/runtime/helpers/slicedToArray"), 
require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/assertThisInitialized"), 
require("memoize-one");

var SelectCreatable = creatable_dist_reactSelect.makeCreatableSelect(base_dist_reactSelect.Select), SelectCreatableState = stateManager.manageState(SelectCreatable), AsyncCreatable = async_dist_reactSelect.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
