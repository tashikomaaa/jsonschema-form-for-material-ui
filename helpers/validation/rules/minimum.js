"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(schema, value) {
  if (schema.minimum && typeof value === 'number' && value < schema.minimum) {
    return {
      message: "'".concat(schema.title, "' should be >= ").concat(schema.minimum)
    };
  }

  return null;
};

exports.default = _default;