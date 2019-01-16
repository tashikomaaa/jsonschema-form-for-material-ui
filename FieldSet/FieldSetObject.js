"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RawFieldSetObject = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _keys = _interopRequireDefault(require("lodash/keys"));

var _styles = require("@material-ui/core/styles");

var _FormField = _interopRequireDefault(require("../FormField"));

var _fieldSetStyles = _interopRequireDefault(require("./field-set-styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RawFieldSetObject = function RawFieldSetObject(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? {} : _ref$schema,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === void 0 ? {} : _ref$uiSchema,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      path = _ref.path,
      rest = _objectWithoutProperties(_ref, ["className", "classes", "schema", "uiSchema", "data", "path"]);

  var orientation = uiSchema['ui:orientation'] === 'row' ? classes.row : null;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, orientation)
  }, (0, _keys.default)(schema.properties).map(function (p) {
    var newPath = path ? "".concat(path, ".").concat(p) : p;
    return _react.default.createElement(_FormField.default, _extends({
      key: p,
      objectData: data,
      path: newPath,
      required: schema.required,
      schema: schema.properties[p],
      data: data[p],
      uiSchema: uiSchema[p] || {}
    }, rest));
  }));
};

exports.RawFieldSetObject = RawFieldSetObject;

var _default = (0, _styles.withStyles)(_fieldSetStyles.default.fieldSetObject)(RawFieldSetObject);

exports.default = _default;