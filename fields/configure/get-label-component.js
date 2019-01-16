"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var schema = _ref.schema,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === void 0 ? {} : _ref$uiSchema;
  var widget = uiSchema['ui:widget'];
  var type = schema.type;

  if (schema.enum && widget === 'radio') {
    return _FormLabel.default;
  } // boolean


  if (type === 'boolean' || widget === 'checkboxes') return null;
  return _InputLabel.default;
};

exports.default = _default;