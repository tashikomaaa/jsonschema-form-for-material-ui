"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _configure = _interopRequireDefault(require("./configure"));

var _ConfiguredField = _interopRequireDefault(require("./ConfiguredField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(props) {
  var path = props.path,
      id = props.id,
      schema = props.schema,
      data = props.data,
      uiSchema = props.uiSchema,
      errors = props.errors,
      showHelperError = props.showHelperError;
  var type = schema.type;
  var htmlId = "".concat(id, "_").concat(path);
  var configuredProps = (0, _configure.default)(_objectSpread({}, props, {
    htmlId: htmlId
  }));
  var descriptionText = uiSchema['ui:description'] || schema.description;
  var helpText = uiSchema['ui:help'];
  return _react.default.createElement(_ConfiguredField.default, _extends({
    id: id,
    data: data,
    type: type,
    descriptionText: descriptionText,
    helpText: helpText,
    showHelperError: showHelperError,
    errors: errors
  }, configuredProps));
};

exports.default = _default;