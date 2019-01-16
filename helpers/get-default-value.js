"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDefaultValue = function getDefaultValue(schema) {
  if (schema.default) return schema.default;

  switch (schema.type) {
    case 'object':
      return (0, _mapValues.default)(schema.properties, getDefaultValue);

    case 'string':
    case 'number':
    default:
      return '';
  }
};

var _default = getDefaultValue;
exports.default = _default;