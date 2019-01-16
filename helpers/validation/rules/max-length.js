"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _size = _interopRequireDefault(require("lodash/size"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(schema, value) {
  if (schema.maxLength && (0, _size.default)(value) > schema.maxLength) {
    return {
      message: "'".concat(value, "' exceeds the maximum length of ").concat(schema.maxLength, " for field '").concat(schema.title, "'")
    };
  }

  return null;
};

exports.default = _default;