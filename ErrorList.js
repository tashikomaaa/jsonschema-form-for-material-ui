"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _keys = _interopRequireDefault(require("lodash/keys"));

var _styles = require("@material-ui/core/styles");

var _filter = _interopRequireDefault(require("lodash/filter"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ErrorOutline = _interopRequireDefault(require("@material-ui/icons/ErrorOutline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorsStyles = {
  errorList: {
    backgroundColor: '#ffa3a3',
    borderColor: '#ebccd1',
    color: '#f44336',
    clear: 'both'
  },
  panelHeading: {
    color: '#a94442',
    backgroundColor: '#f98989',
    borderColor: '#ebccd1'
  }
};

var Error = function Error(_ref) {
  var errors = _ref.errors;
  return _react.default.createElement(_ListItemText.default, {
    primary: errors.message
  });
};

var Errors = function Errors(_ref2) {
  var errors = _ref2.errors,
      anchor = _ref2.anchor,
      classes = _ref2.classes;
  return _react.default.createElement(_ListItem.default, {
    button: true,
    onClick: function onClick() {
      document.getElementById(anchor).focus(); // eslint-disable-line
    }
  }, errors.map(function (v, idx) {
    return _react.default.createElement(Error, {
      key: idx,
      errors: v,
      classes: classes
    });
  }) // eslint-disable-line react/no-array-index-key,max-len
  );
};

var hasErrors = function hasErrors(errors) {
  var errorsFlag = false;
  Object.values(errors).forEach(function (error) {
    if (error.length !== 0) {
      errorsFlag = true;
    }
  });
  return errorsFlag;
};

var ErrorList = function ErrorList(_ref3) {
  var errors = _ref3.errors,
      field = _ref3.field,
      classes = _ref3.classes;
  return _react.default.createElement("div", {
    className: classes.errorList
  }, hasErrors(errors) ? _react.default.createElement(_List.default, {
    component: "nav",
    subheader: _react.default.createElement(_ListItem.default, {
      className: classes.panelHeading
    }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_ErrorOutline.default, {
      color: "error"
    })), _react.default.createElement(_ListItemText.default, {
      primary: "ERRORS",
      color: "error"
    }))
  }, (0, _filter.default)((0, _keys.default)(errors), function (k) {
    var v = errors[k];
    return v && v.length > 0;
  }).map(function (v) {
    return _react.default.createElement(Errors, {
      key: v,
      errors: errors[v],
      anchor: "".concat(field, "_").concat(v),
      classes: classes
    });
  })) : null);
};

var _default = (0, _styles.withStyles)(errorsStyles)(ErrorList);

exports.default = _default;