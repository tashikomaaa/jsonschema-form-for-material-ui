"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RawFieldSet = exports.FieldSetContent = exports.RawFieldSetContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _endsWith = _interopRequireDefault(require("lodash/endsWith"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _styles = require("@material-ui/core/styles");

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _fieldSetStyles = _interopRequireDefault(require("./field-set-styles"));

var _FieldSetArray = _interopRequireDefault(require("./FieldSetArray"));

var _FieldSetObject = _interopRequireDefault(require("./FieldSetObject"));

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

var RawFieldSetContent = function RawFieldSetContent(props) {
  var _props$schema = props.schema,
      schema = _props$schema === void 0 ? {} : _props$schema;
  var type = schema.type;

  if (type === 'array') {
    return _react.default.createElement(_FieldSetArray.default, props);
  }

  if (type === 'object') {
    return _react.default.createElement(_FieldSetObject.default, props);
  }

  return null;
};

exports.RawFieldSetContent = RawFieldSetContent;
var FieldSetContent = (0, _styles.withStyles)(_fieldSetStyles.default.fieldSetContent)(RawFieldSetContent); // for unit testing

exports.FieldSetContent = FieldSetContent;

var RawFieldSet =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RawFieldSet, _React$Component);

  function RawFieldSet() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RawFieldSet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RawFieldSet)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", function (nextProps) {
      return !(0, _isEqual.default)(_this.props.data, nextProps.data);
    });

    return _this;
  }

  _createClass(RawFieldSet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          path = _this$props.path,
          classes = _this$props.classes,
          _this$props$schema = _this$props.schema,
          schema = _this$props$schema === void 0 ? {} : _this$props$schema;
      return _react.default.createElement("fieldset", {
        className: (0, _classnames.default)(className, classes.root, _defineProperty({}, classes.listItem, (0, _endsWith.default)(path, ']')))
      }, schema.title && _react.default.createElement(_InputLabel.default, null, schema.title), _react.default.createElement(FieldSetContent, _extends({
        path: path
      }, this.props)));
    }
  }]);

  return RawFieldSet;
}(_react.default.Component);

exports.RawFieldSet = RawFieldSet;

var _default = (0, _styles.withStyles)(_fieldSetStyles.default.fieldSet)(RawFieldSet);

exports.default = _default;