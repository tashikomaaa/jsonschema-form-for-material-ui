"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var doOnChange = function doOnChange(onChange) {
  return function (e, checked) {
    return onChange(checked);
  };
};

var _default = function _default(_ref) {
  var path = _ref.path,
      label = _ref.label,
      value = _ref.value,
      type = _ref.type,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["path", "label", "value", "type", "onChange"]);

  return _react.default.createElement(_FormControlLabel.default, {
    control: _react.default.createElement(_Checkbox.default, _extends({
      checked: value,
      value: path,
      onChange: doOnChange(onChange)
    }, rest)),
    label: label
  });
};

exports.default = _default;