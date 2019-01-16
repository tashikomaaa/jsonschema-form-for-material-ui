"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _forOwn = _interopRequireDefault(require("lodash/forOwn"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _rules = _interopRequireDefault(require("./rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validationResult = function validationResult(schema, value) {
  var rv = [];
  (0, _forOwn.default)(_rules.default, function (rule, ruleId) {
    var result = rule(schema, value);

    if (result) {
      rv.push(_objectSpread({
        rule: ruleId
      }, result));
    }
  });
  return rv;
};

var getFieldSpec = function getFieldSpec(schema, value) {
  if (value === null) {
    return {
      $set: []
    };
  }

  if (_typeof(value) !== 'object') {
    return {
      $set: validationResult(schema, value)
    };
  }

  return (0, _mapValues.default)(schema.properties, function (s, p) {
    return getFieldSpec(s, value[p]);
  });
};

var _default = function _default(schema, data) {
  var spec = getFieldSpec(schema, data);
  return (0, _immutabilityHelper.default)({}, spec);
};

exports.default = _default;