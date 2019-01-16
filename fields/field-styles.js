"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    root: {
      '&$withLabel': {
        marginTop: theme.spacing.unit * 3
      }
    },
    textarea: {
      '& textarea': {
        height: 'initial'
      }
    },
    description: {
      transform: "translateX(-".concat(theme.spacing.unit * 2, "px)"),
      fontSize: '80%',
      color: theme.palette.grey[500]
    },
    withLabel: {},
    label: {
      height: '1rem',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center'
    } // infoButton: {},
    // infoPopover: {}

  };
};

exports.default = _default;