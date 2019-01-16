"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RawReorderableFormField = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _FormField = _interopRequireDefault(require("../FormField"));

var _fieldSetStyles = _interopRequireDefault(require("./field-set-styles"));

var _ReorderControls = _interopRequireDefault(require("./ReorderControls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RawReorderableFormField = function RawReorderableFormField(_ref) {
  var first = _ref.first,
      last = _ref.last,
      className = _ref.className,
      classes = _ref.classes,
      path = _ref.path,
      onMoveItemUp = _ref.onMoveItemUp,
      onMoveItemDown = _ref.onMoveItemDown,
      onDeleteItem = _ref.onDeleteItem,
      rest = _objectWithoutProperties(_ref, ["first", "last", "className", "classes", "path", "onMoveItemUp", "onMoveItemDown", "onDeleteItem"]);

  return _react.default.createElement("div", {
    className: (0, _classnames.default)(className, classes.root)
  }, _react.default.createElement(_FormField.default, _extends({
    path: path
  }, rest)), _react.default.createElement(_ReorderControls.default, {
    first: first,
    last: last,
    onMoveItemUp: onMoveItemUp,
    onMoveItemDown: onMoveItemDown,
    onDeleteItem: onDeleteItem
  }));
};

exports.RawReorderableFormField = RawReorderableFormField;

var _default = (0, _styles.withStyles)(_fieldSetStyles.default.reorderable)(RawReorderableFormField);

exports.default = _default;