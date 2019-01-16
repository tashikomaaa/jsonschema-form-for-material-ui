"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* globals describe,it,beforeEach */

/* eslint-disable import/no-webpack-loader-syntax,import/no-extraneous-dependencies,import/no-unresolved,no-unused-expressions,max-len,no-unused-vars */
_chai.default.use(_sinonChai.default);

var InputLabelSpy;
var getLabelComponent;

_chai.default.use(_sinonChai.default);

describe('getLabelComponent', function () {
  beforeEach(function () {
    InputLabelSpy = _sinon.default.spy();
    getLabelComponent = (0, _proxyquire.default)('./get-label-component', {
      '@material-ui/core/Input': {
        InputLabel: InputLabelSpy
      }
    }).default;
  });
  it('returns InputLabel by default', function () {
    var LabelComponent = getLabelComponent({
      schema: {}
    });
    (0, _chai.expect)(LabelComponent.id).to.equal(InputLabelSpy.id);
  });
});