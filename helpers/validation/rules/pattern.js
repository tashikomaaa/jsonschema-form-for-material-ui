"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _size = _interopRequireDefault(require("lodash/size"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var _default = function _default(schema, value) {
  if (schema.pattern && value && !RegExp(schema.pattern).test(value)) {
    return {
      message: "'".concat(schema.title, "' must ma tch pattern ").concat(schema.pattern)
    };
  }

  return null;
};

exports.default = _default;