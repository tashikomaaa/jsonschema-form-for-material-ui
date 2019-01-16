"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RawConfiguredField = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _fieldStyles = _interopRequireDefault(require("./field-styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import PopoverInfo from './components/PopoverInfo'; removed for fix animation problems
// for unit testing only
var RawConfiguredField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RawConfiguredField, _React$Component);

  function RawConfiguredField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RawConfiguredField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RawConfiguredField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", function (nextProps, nextState) {
      if (_this.props.data !== nextProps.data) return true;
      if (_this.state.anchorEl !== nextState.anchorEl) return true;
      return false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formatErrorMessages", function () {
      var errors = _this.props.errors;
      return errors.map(function (error) {
        return error.message;
      }).toString();
    });

    return _this;
  }

  _createClass(RawConfiguredField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? {} : _this$props$classes,
          data = _this$props.data,
          type = _this$props.type,
          descriptionText = _this$props.descriptionText,
          _this$props$helpT = _this$props.helpT,
          helpT = _this$props$helpT === void 0 ? helpText : _this$props$helpT,
          showHelperError = _this$props.showHelperError,
          _this$props$Component = _this$props.Component,
          Component = _this$props$Component === void 0 ? _Input.default : _this$props$Component,
          LabelComponent = _this$props.LabelComponent,
          labelComponentProps = _this$props.labelComponentProps,
          title = _this$props.title,
          className = _this$props.className,
          _this$props$component = _this$props.componentProps,
          componentProps = _this$props$component === void 0 ? {} : _this$props$component,
          id = _this$props.id,
          errors = _this$props.errors;
      var helpText = showHelperError && errors && errors.length > 0 ? this.formatErrorMessages() : helpT;
      return _react.default.createElement(_FormControl.default, {
        error: errors && errors.length > 0,
        className: (0, _classnames.default)(classes.root, _defineProperty({}, classes.withLabel, LabelComponent))
      }, LabelComponent && title && _react.default.createElement(LabelComponent, _extends({
        className: classes.label
      }, labelComponentProps), title, descriptionText ? _react.default.createElement(_Tooltip.default, {
        title: descriptionText,
        placement: "top-start"
      }, _react.default.createElement(_IconButton.default, null, _react.default.createElement(_InfoOutlined.default, null))) : null), descriptionText && !(LabelComponent && title) ? _react.default.createElement(_Tooltip.default, {
        title: descriptionText,
        placement: "top-start"
      }, _react.default.createElement(_IconButton.default, null, _react.default.createElement(_InfoOutlined.default, null))) : null, _react.default.createElement(Component, _extends({
        className: className && classes[className],
        value: data,
        htmlId: labelComponentProps.htmlFor,
        type: type
      }, componentProps)), _react.default.createElement(_FormHelperText.default, {
        id: "".concat(id, "-help")
      }, helpText));
    }
  }]);

  return RawConfiguredField;
}(_react.default.Component);

exports.RawConfiguredField = RawConfiguredField;

var _default = (0, _styles.withStyles)(_fieldStyles.default)(RawConfiguredField);

exports.default = _default;