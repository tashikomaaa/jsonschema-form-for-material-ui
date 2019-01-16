"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(schema, value) {
  if (schema.maximum && typeof value === 'number' && value > schema.maximum) {
    return {
      message: "'".concat(schema.title, "' should be <= ").concat(schema.maximum)
    };
  }

  return null;
};

exports.default = _default;