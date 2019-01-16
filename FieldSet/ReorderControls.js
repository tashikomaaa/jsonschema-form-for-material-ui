"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RawReorderControls = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ArrowUpward = _interopRequireDefault(require("@material-ui/icons/ArrowUpward"));

var _ArrowDownward = _interopRequireDefault(require("@material-ui/icons/ArrowDownward"));

var _RemoveCircle = _interopRequireDefault(require("@material-ui/icons/RemoveCircle"));

var _styles = require("@material-ui/core/styles");

var _fieldSetStyles = _interopRequireDefault(require("./field-set-styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RawReorderControls = function RawReorderControls(_ref) {
  var first = _ref.first,
      last = _ref.last,
      classes = _ref.classes,
      onMoveItemUp = _ref.onMoveItemUp,
      onMoveItemDown = _ref.onMoveItemDown,
      onDeleteItem = _ref.onDeleteItem;
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_IconButton.default, {
    className: classes.up,
    onClick: onMoveItemUp,
    disabled: first
  }, _react.default.createElement(_ArrowUpward.default, null)), _react.default.createElement(_IconButton.default, {
    className: classes.down,
    onClick: onMoveItemDown,
    disabled: last
  }, _react.default.createElement(_ArrowDownward.default, null)), _react.default.createElement(_IconButton.default, {
    className: classes.remove,
    onClick: onDeleteItem
  }, _react.default.createElement(_RemoveCircle.default, null)));
};

exports.RawReorderControls = RawReorderControls;

var _default = (0, _styles.withStyles)(_fieldSetStyles.default.reorderControls)(RawReorderControls);

exports.default = _default;