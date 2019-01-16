"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getComponentProps = _interopRequireDefault(require("./get-component-props"));

var _getLabelComponentProps = _interopRequireDefault(require("./get-label-component-props"));

var _getLabelComponent = _interopRequireDefault(require("./get-label-component"));

var _getComponent = _interopRequireDefault(require("./get-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Input, { InputLabel } from 'material-ui/Input'; // eslint-disable-line import/no-named-default
var getClassName = function getClassName(_ref) {
  var _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === void 0 ? {} : _ref$uiSchema;
  var widget = uiSchema['ui:widget'];
  return widget === 'textarea' ? 'textarea' : null;
};

var _default = function _default(props) {
  var schema = props.schema,
      _props$uiSchema = props.uiSchema,
      uiSchema = _props$uiSchema === void 0 ? {} : _props$uiSchema;
  var title = uiSchema['ui:title'] || schema.title;
  return {
    title: title,
    className: getClassName(props),
    Component: (0, _getComponent.default)(props),
    componentProps: (0, _getComponentProps.default)(props),
    LabelComponent: title && (0, _getLabelComponent.default)(props),
    labelComponentProps: (0, _getLabelComponentProps.default)(props),
    popUpOffset: props.popUpOffset
  };
};

exports.default = _default;