"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RawFormButtons = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RawFormButtons =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RawFormButtons, _React$Component);

  function RawFormButtons() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RawFormButtons);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RawFormButtons)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", function () {
      return false;
    });

    return _this;
  }

  _createClass(RawFormButtons, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          onCancel = _this$props.onCancel,
          onSubmit = _this$props.onSubmit,
          _this$props$cancelTex = _this$props.cancelText,
          cancelText = _this$props$cancelTex === void 0 ? 'Cancel' : _this$props$cancelTex,
          _this$props$submitTex = _this$props.submitText,
          submitText = _this$props$submitTex === void 0 ? 'Submit' : _this$props$submitTex;
      return (onCancel || onSubmit) && _react.default.createElement("div", {
        className: classes.formButtons
      }, onCancel && _react.default.createElement(_Button.default, {
        className: (0, _classnames.default)(classes.cancel, classes.button),
        variant: 'flat',
        onClick: onCancel
      }, cancelText), onSubmit && _react.default.createElement(_Button.default, {
        className: (0, _classnames.default)(classes.submit, classes.button),
        variant: 'raised',
        color: 'primary',
        onClick: onSubmit
      }, submitText));
    }
  }]);

  return RawFormButtons;
}(_react.default.Component);

exports.RawFormButtons = RawFormButtons;
var _default = RawFormButtons;
exports.default = _default;