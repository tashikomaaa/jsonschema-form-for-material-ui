"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _without = _interopRequireDefault(require("lodash/without"));

var _getMuiProps = _interopRequireDefault(require("./get-mui-props"));

var _getInputType = _interopRequireDefault(require("./get-input-type"));

var _valuesToOptions = _interopRequireDefault(require("./values-to-options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toNumber = function toNumber(v) {
  if (v === '' || v === undefined) return v;
  var n = Number(v);
  return !Number.isNaN(n) ? n : v;
};

var coerceValue = function coerceValue(type, value) {
  switch (type) {
    case 'string':
      return typeof value === 'string' ? value : String(value);

    case 'number':
    case 'integer':
    case 'double':
    case 'float':
    case 'decimal':
      return toNumber(value);

    default:
      return value;
  }
};

var onChangeHandler = function onChangeHandler(onChange, type) {
  return function (e) {
    var value = coerceValue(type, e.target.value);
    if (value !== undefined) onChange(value);
  };
};

var onCheckboxChangeHandler = function onCheckboxChangeHandler(onChange, title) {
  return function (e) {
    var spec = {};

    if (e) {
      spec.$push = [title];
    } else {
      spec.$apply = function (arr) {
        return (0, _without.default)(arr, title);
      };
    }

    return onChange(spec);
  };
};

var _default = function _default(_ref) {
  var _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? {} : _ref$schema,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === void 0 ? {} : _ref$uiSchema,
      onChange = _ref.onChange,
      htmlId = _ref.htmlId,
      data = _ref.data,
      objectData = _ref.objectData;
  var widget = uiSchema['ui:widget'];
  var options = uiSchema['ui:options'] || {};
  var type = schema.type;

  var rv = _objectSpread({
    type: (0, _getInputType.default)(type, uiSchema),
    onChange: onChange && onChangeHandler(onChange, type)
  }, (0, _getMuiProps.default)(uiSchema));

  if (schema.enum) {
    if (widget === 'radio') {
      if (options.inline) {
        rv.row = true;
      }
    } else if (widget === 'checkboxes') {
      rv.onChange = onChange && onCheckboxChangeHandler(onChange, schema.title);
      rv.label = schema.title;
    } else {
      rv.nullOption = 'Please select...';
    }

    rv.options = (0, _valuesToOptions.default)(schema.enum);
  } else if (type === 'boolean') {
    rv.label = schema.title;
    rv.onChange = onChange;
  } else {
    rv.inputProps = {
      id: htmlId
    };
  }

  if (widget === 'textarea') {
    rv.multiline = true;
    rv.rows = 5;
  }

  if (options.disabled) {
    if (typeof options.disabled === 'boolean') {
      rv.disabled = options.disabled;
    } else if (typeof options.disabled === 'function') {
      rv.disabled = options.disabled.call(null, data, objectData);
    }
  }

  return rv;
};

exports.default = _default;