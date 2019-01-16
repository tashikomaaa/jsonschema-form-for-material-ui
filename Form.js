"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _shortid = require("shortid");

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _formStyles = _interopRequireDefault(require("./form-styles"));

var _FormField = _interopRequireDefault(require("./FormField"));

var _updateFormData = _interopRequireWildcard(require("./helpers/update-form-data"));

var _validation = _interopRequireDefault(require("./helpers/validation"));

var _ErrorList = _interopRequireDefault(require("./ErrorList"));

var _FormButtons = _interopRequireDefault(require("./FormButtons"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: _this.props.formData,
      errors: (0, _validation.default)(_this.props.schema, _this.props.formData),
      id: (0, _shortid.generate)()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillReceiveProps", function (nextProps) {
      var errors;

      if (!(0, _isEqual.default)(nextProps.schema, _this.props.schema)) {
        errors = {};
      } else {
        errors = (0, _validation.default)(_this.props.schema, nextProps.formData);
      }

      _this.setState({
        errors: errors,
        data: nextProps.formData
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (field) {
      return function (value) {
        // eslint-disable-next-line react/no-access-state-in-setstate
        var data = (0, _updateFormData.default)(_this.state.data, field, value);

        _this.setState({
          data: data,
          errors: (0, _validation.default)(_this.props.schema, data)
        }, _this.notifyChange);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMoveItemUp", function (path, idx) {
      return function () {
        _this.setState(function (prevState) {
          return {
            data: (0, _updateFormData.moveListItem)(prevState.data, path, idx, -1)
          };
        }, _this.notifyChange);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMoveItemDown", function (path, idx) {
      return function () {
        _this.setState(function (prevState) {
          return {
            data: (0, _updateFormData.moveListItem)(prevState.data, path, idx, 1)
          };
        }, _this.notifyChange);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDeleteItem", function (path, idx) {
      return function () {
        _this.setState(function (prevState) {
          return {
            data: (0, _updateFormData.removeListItem)(prevState.data, path, idx)
          };
        }, _this.notifyChange);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddItem", function (path, defaultValue) {
      return function () {
        _this.setState(function (prevState) {
          return {
            data: (0, _updateFormData.addListItem)(prevState.data, path, defaultValue || '')
          };
        }, _this.notifyChange);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function () {
      _this.props.onSubmit({
        formData: _this.state.data
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "notifyChange", function () {
      var onChange = _this.props.onChange;
      var data = _this.state.data;

      if (onChange) {
        onChange({
          formData: data
        });
      }
    });

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          formData = _this$props.formData,
          onSubmit = _this$props.onSubmit,
          onChange = _this$props.onChange,
          onCancel = _this$props.onCancel,
          cancelText = _this$props.cancelText,
          submitText = _this$props.submitText,
          showErrorList = _this$props.showErrorList,
          ErrorList = _this$props.ErrorList,
          rest = _objectWithoutProperties(_this$props, ["classes", "formData", "onSubmit", "onChange", "onCancel", "cancelText", "submitText", "showErrorList", "ErrorList"]);

      var _this$state = this.state,
          errors = _this$state.errors,
          id = _this$state.id;
      return _react.default.createElement(_Paper.default, {
        className: classes.root
      }, showErrorList ? _react.default.createElement(ErrorList, {
        errors: errors,
        field: id
      }) : null, _react.default.createElement("div", {
        className: classes.field
      }, _react.default.createElement(_FormField.default, _extends({
        path: '',
        data: this.state.data,
        id: id,
        className: classes.formfield,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        errors: errors,
        onMoveItemUp: this.onMoveItemUp,
        onMoveItemDown: this.onMoveItemDown,
        onDeleteItem: this.onDeleteItem,
        onAddItem: this.onAddItem
      }, rest))), _react.default.createElement(_FormButtons.default, {
        onSubmit: this.onSubmit,
        onCancel: onCancel,
        classes: classes,
        cancelText: cancelText,
        submitText: submitText
      }));
    }
  }]);

  return Form;
}(_react.default.Component);

_defineProperty(Form, "defaultProps", {
  uiSchema: {},
  showErrorList: false,
  showHelperError: true,
  ErrorList: _ErrorList.default
});

var _default = (0, _styles.withStyles)(_formStyles.default)(Form);

exports.default = _default;
Form.propTypes = {
  schema: _propTypes.default.object.isRequired,
  classes: _propTypes.default.object,
  uiSchema: _propTypes.default.object,
  formData: _propTypes.default.any,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  cancelText: _propTypes.default.string,
  submitText: _propTypes.default.string,
  showErrorList: _propTypes.default.bool,
  showHelperError: _propTypes.default.bool,
  ErrorList: _propTypes.default.func
};