"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _size = _interopRequireDefault(require("lodash/size"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(schema, value) {
  if (schema.minLength !== undefined && (0, _size.default)(value) < schema.minLength) {
    return {
      message: "'".concat(schema.title, "' must be at least ").concat(schema.minLength)
    };
  }

  return null;
};

exports.default = _default;