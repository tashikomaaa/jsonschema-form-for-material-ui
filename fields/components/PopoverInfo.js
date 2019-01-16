"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

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

var getLTofEl = function getLTofEl(el) {
  var box = el.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left
  };
};

var PopoverInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopoverInfo, _React$Component);

  function PopoverInfo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PopoverInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PopoverInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      anchorEl: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePopoverOpen", (0, _lodash.default)(function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    }, 250, {
      leading: true
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePopoverClose", (0, _lodash.default)(function () {
      _this.setState({
        anchorEl: null
      });
    }, 250, {
      leading: true
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getAnchorPosition", function () {
      if (!_this.state.anchorEl) return {
        top: 0,
        left: 0
      };
      var pos = getLTofEl(_this.state.anchorEl);

      if (_this.props.popUpOffset) {
        if (_this.props.popUpOffset.top) pos.top += _this.props.popUpOffset.top;
        if (_this.props.popUpOffset.left) pos.left += _this.props.popUpOffset.left;
      }

      return pos;
    });

    return _this;
  }

  _createClass(PopoverInfo, [{
    key: "render",
    value: function render() {
      var anchorEl = this.state.anchorEl;
      var open = Boolean(anchorEl);
      var _this$props = this.props,
          descriptionText = _this$props.descriptionText,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? {} : _this$props$classes;
      return _react.default.createElement(_IconButton.default, {
        "aria-owns": open ? 'mouse-over-popover' : null,
        "aria-haspopup": "true",
        disableRipple: true,
        className: classes.infoButton,
        disableTouchRipple: true,
        onMouseEnter: this.handlePopoverOpen,
        onMouseLeave: this.handlePopoverClose
      }, _react.default.createElement(_InfoOutlined.default, null), _react.default.createElement(_Popover.default, {
        anchorReference: "anchorPosition",
        id: "mouse-over-popover",
        className: classes.infoPopover,
        classes: {
          paper: classes.infoPaper
        },
        style: {
          pointerEvents: 'none'
        },
        open: open,
        anchorEl: anchorEl,
        anchorPosition: this.getAnchorPosition(),
        onClose: this.handlePopoverClose,
        disableRestoreFocus: true
      }, _react.default.createElement(_Typography.default, null, descriptionText)));
    }
  }]);

  return PopoverInfo;
}(_react.default.Component);

var _default = PopoverInfo;
exports.default = _default;