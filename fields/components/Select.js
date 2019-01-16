"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var type = _ref.type,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      options = _ref.options,
      nullOption = _ref.nullOption,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["type", "value", "options", "nullOption", "onChange"]);

  return _react.default.createElement(_Select.default, _extends({}, rest, {
    value: String(value),
    onChange: onChange
  }), value === null && _react.default.createElement(_MenuItem.default, {
    value: ''
  }, nullOption), options.map(function (o) {
    return _react.default.createElement(_MenuItem.default, {
      key: o.key,
      value: String(o.key)
    }, String(o.value));
  }));
};

exports.default = _default;