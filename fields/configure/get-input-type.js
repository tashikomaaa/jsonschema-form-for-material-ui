"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(type, uiSchema) {
  var widget = uiSchema['ui:widget'];

  if (type === 'number' || type === 'integer') {
    if (widget === 'updown' || widget === 'radio') {
      return 'number';
    }

    return 'text';
  }

  if (widget === 'password') {
    return 'password';
  }

  return type;
};

exports.default = _default;