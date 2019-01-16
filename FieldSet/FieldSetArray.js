"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RawFieldSetArray = void 0;

var _react = _interopRequireDefault(require("react"));

var _includes = _interopRequireDefault(require("lodash/includes"));

var _slice = _interopRequireDefault(require("lodash/slice"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _AddCircle = _interopRequireDefault(require("@material-ui/icons/AddCircle"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _styles = require("@material-ui/core/styles");

var _FormField = _interopRequireDefault(require("../FormField"));

var _fieldSetStyles = _interopRequireDefault(require("./field-set-styles"));

var _getDefaultValue = _interopRequireDefault(require("../helpers/get-default-value"));

var _ReorderableFormField = _interopRequireDefault(require("./ReorderableFormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RawFieldSetArray = function RawFieldSetArray(props) {
  var _props$startIdx = props.startIdx,
      startIdx = _props$startIdx === void 0 ? 0 : _props$startIdx,
      className = props.className,
      classes = props.classes,
      _props$schema = props.schema,
      schema = _props$schema === void 0 ? {} : _props$schema,
      _props$uiSchema = props.uiSchema,
      uiSchema = _props$uiSchema === void 0 ? {} : _props$uiSchema,
      data = props.data,
      path = props.path,
      onMoveItemUp = props.onMoveItemUp,
      onMoveItemDown = props.onMoveItemDown,
      onDeleteItem = props.onDeleteItem,
      rest = _objectWithoutProperties(props, ["startIdx", "className", "classes", "schema", "uiSchema", "data", "path", "onMoveItemUp", "onMoveItemDown", "onDeleteItem"]);

  return _react.default.createElement("div", {
    className: classes.root
  }, !(0, _isArray.default)(schema.items) && !schema.uniqueItems && _react.default.createElement("div", null, (data || []).map(function (d, idx) {
    return _react.default.createElement(_ReorderableFormField.default, _extends({
      key: "".concat(path, "[").concat(idx, "]") // eslint-disable-line react/no-array-index-key
      ,
      path: "".concat(path, "[").concat(startIdx + idx, "]"),
      required: schema.required,
      schema: schema.items,
      data: d,
      onMoveItemUp: onMoveItemUp && onMoveItemUp(path, startIdx + idx),
      onMoveItemDown: onMoveItemDown && onMoveItemDown(path, startIdx + idx),
      onDeleteItem: onDeleteItem && onDeleteItem(path, startIdx + idx),
      uiSchema: uiSchema.items,
      first: idx === 0,
      last: idx === data.length - 1
    }, rest));
  }), _react.default.createElement("div", {
    className: classes.addItemBtn
  }, _react.default.createElement(_IconButton.default, {
    onClick: rest.onAddItem && rest.onAddItem(path, (0, _getDefaultValue.default)(schema.items))
  }, _react.default.createElement(_AddCircle.default, null)))), (0, _isArray.default)(schema.items) && (data || []).map(function (d, idx) {
    if (idx < schema.items.length) {
      return _react.default.createElement(_FormField.default, _extends({
        key: "".concat(path, "[").concat(idx, "]") // eslint-disable-line react/no-array-index-key
        ,
        path: "".concat(path, "[").concat(startIdx + idx, "]"),
        required: schema.required,
        schema: schema.items[idx],
        data: d,
        uiSchema: (uiSchema.items || [])[idx]
      }, rest));
    }

    return null;
  }), !(0, _isArray.default)(schema.items) && schema.uniqueItems && schema.items.enum && schema.items.enum.map(function (d) {
    return _react.default.createElement(_FormField.default, _extends({
      key: "".concat(path, "[").concat(d, "]") // eslint-disable-line react/no-array-index-key
      ,
      path: "".concat(path),
      required: schema.required,
      schema: _objectSpread({}, schema.items, {
        title: d
      }),
      data: (0, _includes.default)(data, d),
      uiSchema: uiSchema
    }, rest));
  }), schema.additionalItems && _react.default.createElement(RawFieldSetArray, _extends({
    classes: classes,
    path: path,
    startIdx: 2,
    required: schema.required,
    schema: {
      type: 'array',
      items: schema.additionalItems
    },
    data: (0, _slice.default)(data, schema.items.length),
    uiSchema: uiSchema.additionalItems,
    onMoveItemUp: onMoveItemUp,
    onMoveItemDown: onMoveItemDown,
    onDeleteItem: onDeleteItem
  }, rest)));
};

exports.RawFieldSetArray = RawFieldSetArray;

var _default = (0, _styles.withStyles)(_fieldSetStyles.default.fieldSetArray)(RawFieldSetArray);

exports.default = _default;