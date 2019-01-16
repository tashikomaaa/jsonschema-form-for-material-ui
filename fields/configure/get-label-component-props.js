"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _includes = _interopRequireDefault(require("lodash/includes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var htmlId = _ref.htmlId,
      required = _ref.required,
      path = _ref.path;
  var rv = {
    htmlFor: htmlId,
    required: (0, _includes.default)(required, path)
  };
  return rv;
};

exports.default = _default;