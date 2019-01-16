"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  fieldSet: function fieldSet(theme) {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        border: 0
      },
      listItem: {
        'border': "1px dotted ".concat(theme.palette.primary.main),
        'margin': theme.spacing.unit,
        'padding': theme.spacing.unit
      }
    };
  },
  fieldSetObject: {
    'root': {
      'display': 'flex',
      'flexDirection': 'column',
      '&$row': {
        flexDirection: 'row'
      }
    },
    'row': {},
    'listItem': {}
  },
  fieldSetArray: function fieldSetArray(theme) {
    return {
      'root': {
        display: 'flex',
        flexDirection: 'column'
      },
      'listItem': {},
      'addItemBtn': {
        'display': 'flex',
        'justifyContent': 'flex-end',
        '&>button': {
          'background': theme.palette.primary.main,
          'width': '3.75em',
          'color': theme.palette.common.white,
          'height': '1.25em',
          'borderRadius': 5
        }
      }
    };
  },
  reorderable: {
    'root': {
      'display': 'flex',
      'alignItems': 'baseline',
      'justifyContent': 'space-between',
      '& >fieldset': {
        width: '100%'
      }
    },
    'listItem': {}
  },
  reorderControls: function reorderControls(theme) {
    return {
      root: {
        'display': 'flex',
        'border': "1px solid ".concat(theme.palette.grey[400]),
        'borderRadius': 5,
        '& >button': {
          'borderRadius': 0,
          'width': '1.25em',
          'height': '1.25em',
          '&:not(:last-child)': {
            borderRight: "1px solid ".concat(theme.palette.grey[400])
          }
        }
      },
      remove: {
        background: theme.palette.error.main,
        color: theme.palette.grey[800]
      }
    };
  },
  fieldSetContent: {
    'root': {},
    'listItem': {}
  }
};
exports.default = _default;