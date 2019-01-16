"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    root: {
      padding: theme.spacing.unit * 2
    },
    formButtons: {
      marginTop: theme.spacing.unit * 2,
      justifyContent: 'flex-end'
    },
    submit: {
      fontSize: '100%'
    },
    cancel: {
      fontSize: '100%'
    },
    button: {
      fontSize: '100%'
    },
    field: {
      display: 'flex',
      flexDirection: 'column'
    },
    formfield: {}
  };
};

exports.default = _default;