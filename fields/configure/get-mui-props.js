"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));

var _pickBy = _interopRequireDefault(require("lodash/pickBy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return (0, _mapKeys.default)((0, _pickBy.default)(props, function (v, k) {
    return k.startsWith('mui:');
  }), function (v, k) {
    return k.substring(4);
  });
};

exports.default = _default;