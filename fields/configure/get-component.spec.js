"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* globals describe,it,beforeEach */
// eslint-disable-next-line max-len

/* eslint-disable import/no-webpack-loader-syntax,import/no-extraneous-dependencies,import/no-unresolved,no-unused-expressions */
var proxyquire = require('proxyquire').noCallThru();

_chai.default.use(_sinonChai.default);

var InputSpy;
var RadioGroupSpy;
var CheckboxSpy;
var SelectSpy;
var getComponent;
describe('getComponent', function () {
  beforeEach(function () {
    InputSpy = _sinon.default.spy();
    RadioGroupSpy = _sinon.default.spy();
    CheckboxSpy = _sinon.default.spy();
    SelectSpy = _sinon.default.spy();
    getComponent = proxyquire('./get-component', {
      '@material-ui/core/Input': {
        default: InputSpy
      },
      '../components': {
        RadioGroup: RadioGroupSpy,
        Checkbox: CheckboxSpy,
        Select: SelectSpy
      }
    }).default;
  });
  it('configures props for simple field', function () {
    var schema = {
      'title': 'First name',
      'type': 'string'
    };
    var required = [];
    var path = 'firstName';
    var uiSchema = {}; // const data = 'Maxamillian';

    var htmlId = 'unq';

    var onChange = _sinon.default.spy();

    var Component = getComponent({
      schema: schema,
      uiSchema: uiSchema,
      required: required,
      path: path,
      htmlId: htmlId,
      onChange: onChange
    });
    (0, _chai.expect)(Component.id).to.equal(InputSpy.id);
  });
  describe('yields Component', function () {
    describe('depending on ui:widget', function () {
      it('-> RadioGroup when ui:widget=radio and schema.enum', function () {
        var schema = {
          'enum': ['one', 'two', 'three']
        };
        var uiSchema = {
          'ui:widget': 'radio'
        };
        var Component = getComponent({
          schema: schema,
          uiSchema: uiSchema
        });
        (0, _chai.expect)(Component.id).to.equal(RadioGroupSpy.id);
      });
      it('Checkbox when ui:widget=radio and schema.enum', function () {
        var schema = {
          'enum': ['one', 'two', 'three']
        };
        var uiSchema = {
          'ui:widget': 'radio'
        };
        var Component = getComponent({
          schema: schema,
          uiSchema: uiSchema
        });
        (0, _chai.expect)(Component.id).to.equal(RadioGroupSpy.id);
      });
    });
    it('Checkbox when type=boolean', function () {
      var schema = {
        'type': 'boolean'
      };
      var uiSchema = {};
      var Component = getComponent({
        schema: schema,
        uiSchema: uiSchema
      });
      (0, _chai.expect)(Component.id).to.equal(CheckboxSpy.id);
    });
    it('Select when schema.enum', function () {
      var schema = {
        'enum': ['one', 'two', 'three']
      };
      var uiSchema = {};
      var Component = getComponent({
        schema: schema,
        uiSchema: uiSchema
      });
      (0, _chai.expect)(Component.id).to.equal(SelectSpy.id);
    });
    it('Select when schema.enum, regardless of type', function () {
      var schema = {
        'type': 'number',
        'enum': ['one', 'two', 'three']
      };
      var uiSchema = {};
      var Component = getComponent({
        schema: schema,
        uiSchema: uiSchema
      });
      (0, _chai.expect)(Component.id).to.equal(SelectSpy.id);
    });
  });
});