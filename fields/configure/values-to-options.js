"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys = _interopRequireDefault(require("lodash/keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default(values) {
  if (values instanceof Array) {
    return values.map(function (e) {
      return {
        key: e,
        value: e
      };
    });
  }

  if (_typeof(values) === 'object') {
    return (0, _keys.default)(values).map(function (e) {
      return {
        key: e,
        value: values[e]
      };
    });
  }

  return [{}];
};

exports.default = _default;