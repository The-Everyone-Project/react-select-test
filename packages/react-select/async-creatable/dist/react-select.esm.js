import { makeAsyncSelect } from '../../async/dist/react-select.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.esm.js';
import { m as manageState } from '../../dist/stateManager-2af23fc4.esm.js';
import { S as Select } from '../../dist/Select-db36e99a.esm.js';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/inherits';
import '../../dist/index-d0e44d44.esm.js';
import '@babel/runtime/helpers/typeof';
import '@emotion/core';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import 'react-input-autosize';
import '@babel/runtime/helpers/defineProperty';
import 'react';
import 'react-dom';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/assertThisInitialized';
import 'memoize-one';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
