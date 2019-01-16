"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = _interopRequireWildcard(require("chai"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _chaiEnzyme = _interopRequireDefault(require("chai-enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

var _FormField = require("./FormField");

var _fields = _interopRequireDefault(require("./fields"));

var _FieldSet = _interopRequireDefault(require("./FieldSet"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */

/* eslint-disable no-unused-expressions */
var classes = {
  field: 'fieldClassName'
};

_chai.default.use((0, _chaiEnzyme.default)());

_chai.default.use(_sinonChai.default);

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('FormField', function () {
  it('mounts with single field (control)', function () {
    var path = 'name';

    var onChange = _sinon.default.stub();

    var schema = {
      'type': 'string',
      'title': 'First Name'
    };
    var uiSchema = {};
    var data = 'Bob';
    onChange.returns('onChangeFunc'); // act

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FormField.RawFormField, {
      path: path,
      classes: classes,
      schema: schema,
      uiSchema: uiSchema,
      data: data,
      onChange: onChange
    })); // check

    (0, _chai.expect)(wrapper).to.be.present();
    var ffComp = wrapper.find(_fields.default);
    (0, _chai.expect)(ffComp).to.have.length(1);
    (0, _chai.expect)(ffComp).to.have.prop('className', classes.field);
    (0, _chai.expect)(ffComp).to.have.prop('path', path);
    (0, _chai.expect)(ffComp).to.have.prop('schema', schema);
    (0, _chai.expect)(ffComp).to.have.prop('data', data);
    (0, _chai.expect)(ffComp).to.have.prop('uiSchema', uiSchema);
    (0, _chai.expect)(onChange).calledWith(path);
    (0, _chai.expect)(ffComp).to.have.prop('onChange', 'onChangeFunc');
  });
  it('spreads additional properties to Field', function () {
    var schema = {
      name: {
        'type': 'string'
      }
    };
    var myProp = 'blah'; // act

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FormField.RawFormField, {
      classes: classes,
      schema: schema,
      myProp: myProp
    })); // check

    (0, _chai.expect)(wrapper).to.be.present();
    var ffComp = wrapper.find(_fields.default);
    (0, _chai.expect)(ffComp).to.have.prop('myProp', myProp);
  });
  it('renders object as FieldSet, passing all properties', function () {
    var onChange = _sinon.default.stub();

    var path = 'name';
    var schema = {
      'type': 'object',
      'properties': {
        firstName: {
          type: 'string',
          title: 'First Name'
        },
        surname: {
          type: 'string',
          title: 'Surname'
        }
      }
    };
    var data = {
      firstName: 'Bob',
      surname: 'Hope'
    };
    var uiSchema = {
      firstName: {},
      surname: {}
    }; // act

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FormField.RawFormField, {
      classes: classes,
      uiSchema: uiSchema,
      path: path,
      schema: schema,
      data: data,
      onChange: onChange
    })); // check

    (0, _chai.expect)(wrapper).to.be.present();
    var fsComp = wrapper.find(_FieldSet.default);
    (0, _chai.expect)(fsComp).to.be.have.length(1);
    (0, _chai.expect)(fsComp).to.have.prop('path', path);
    (0, _chai.expect)(fsComp).to.have.prop('schema', schema);
    (0, _chai.expect)(fsComp).to.have.prop('data', data);
    (0, _chai.expect)(fsComp).to.have.prop('uiSchema', uiSchema);
    (0, _chai.expect)(fsComp).to.have.prop('onChange', onChange);
  });
});