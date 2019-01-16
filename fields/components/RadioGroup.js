"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var path = _ref.path,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      value = _ref.value,
      onChange = _ref.onChange,
      inputProps = _ref.inputProps,
      nullOption = _ref.nullOption,
      rest = _objectWithoutProperties(_ref, ["path", "options", "value", "onChange", "inputProps", "nullOption"]);

  return _react.default.createElement(_RadioGroup.default, _extends({}, rest, {
    "aria-label": path,
    name: path,
    value: String(value),
    onChange: onChange
  }), options.map(function (o) {
    return _react.default.createElement(_FormControlLabel.default, {
      key: o.key,
      value: String(o.key),
      control: _react.default.createElement(_Radio.default, null),
      label: o.value
    });
  }));
};

exports.default = _default;