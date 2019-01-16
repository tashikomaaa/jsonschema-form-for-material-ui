"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import Input, { InputLabel } from 'material-ui/Input'; // eslint-disable-line import/no-named-default
var Input = require('@material-ui/core/Input').default;

var _require = require('../components'),
    RadioGroup = _require.RadioGroup,
    Select = _require.Select,
    Checkbox = _require.Checkbox;

var _default = function _default(_ref) {
  var schema = _ref.schema,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === void 0 ? {} : _ref$uiSchema;
  var widget = uiSchema['ui:widget'];
  var type = schema.type;

  if (schema.enum) {
    if (widget === 'radio') {
      return RadioGroup;
    }

    if (widget === 'checkboxes') {
      return Checkbox;
    }

    return Select;
  }

  if (type === 'boolean') {
    return Checkbox;
  }

  return Input;
};

exports.default = _default;