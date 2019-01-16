"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

var _getComponentProps = _interopRequireDefault(require("./get-component-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* globals describe,it */

/* eslint-disable import/no-webpack-loader-syntax,import/no-extraneous-dependencies,import/no-unresolved,no-unused-expressions */
_chai.default.use(_sinonChai.default);

describe('getComponentProps', function () {
  it('configures props for simple field', function () {
    var schema = {
      'title': 'First name',
      'type': 'string'
    };
    var required = [];
    var path = 'firstName';
    var uiSchema = {};
    var htmlId = 'unq';

    var onChange = _sinon.default.spy();

    var expectedInputProps = {
      id: htmlId
    };
    var componentProps = (0, _getComponentProps.default)({
      schema: schema,
      uiSchema: uiSchema,
      required: required,
      path: path,
      htmlId: htmlId,
      onChange: onChange
    });
    (0, _chai.expect)(componentProps).to.haveOwnProperty('inputProps');
    (0, _chai.expect)(componentProps.inputProps).to.deep.equal(expectedInputProps);
    (0, _chai.expect)(componentProps.type).to.equal('string');
  });
  it('creates options property from enum', function () {
    var schema = {
      'title': 'First name',
      'enum': ['one', 'two', 'three']
    };
    var uiSchema = {};
    var expectedOptions = [{
      key: 'one',
      value: 'one'
    }, {
      key: 'two',
      value: 'two'
    }, {
      key: 'three',
      value: 'three'
    }];
    var componentProps = (0, _getComponentProps.default)({
      schema: schema,
      uiSchema: uiSchema
    });
    (0, _chai.expect)(componentProps).to.haveOwnProperty('options');
    (0, _chai.expect)(componentProps.options).to.deep.equal(expectedOptions);
  });
  describe('ui:options.disabled', function () {
    it('as boolean adds disabled property', function () {
      var schema = {
        'title': 'First name',
        'enum': ['one', 'two', 'three']
      };
      var uiSchema = {
        'ui:options': {
          disabled: true
        }
      };
      var componentProps = (0, _getComponentProps.default)({
        schema: schema,
        uiSchema: uiSchema
      });
      (0, _chai.expect)(componentProps).to.haveOwnProperty('disabled');
      (0, _chai.expect)(componentProps.disabled).to.equal(true);
    });
    it('as function adds disabled property', function () {
      var disabledStub = _sinon.default.stub();

      disabledStub.returns(true);
      var schema = {
        'title': 'First name',
        'enum': ['one', 'two', 'three']
      };
      var objectData = {
        x: 'one',
        y: 'two'
      };
      var uiSchema = {
        'ui:options': {
          disabled: disabledStub
        }
      };
      var componentProps = (0, _getComponentProps.default)({
        data: objectData.x,
        objectData: objectData,
        schema: schema,
        uiSchema: uiSchema
      });
      (0, _chai.expect)(componentProps).to.haveOwnProperty('disabled');
      (0, _chai.expect)(componentProps.disabled).to.equal(true);
      (0, _chai.expect)(disabledStub).to.have.been.calledWith('one', objectData);
    });
  });
  describe('when ui:widget=radio and schema.enum', function () {
    it('-> options', function () {
      var schema = {
        'title': 'First name',
        'enum': ['one', 'two', 'three']
      };
      var uiSchema = {
        'ui:widget': 'radio'
      };
      var expectedOptions = [{
        key: 'one',
        value: 'one'
      }, {
        key: 'two',
        value: 'two'
      }, {
        key: 'three',
        value: 'three'
      }];
      var componentProps = (0, _getComponentProps.default)({
        schema: schema,
        uiSchema: uiSchema
      });
      (0, _chai.expect)(componentProps).to.haveOwnProperty('options');
      (0, _chai.expect)(componentProps.options).to.deep.equal(expectedOptions);
    });
  });
  describe('sets type', function () {
    describe('to number when type=number', function () {
      it('and ui:widget=updown', function () {
        var schema = {
          'title': 'First name',
          'type': 'number'
        };
        var uiSchema = {
          'ui:widget': 'updown'
        };
        var componentProps = (0, _getComponentProps.default)({
          schema: schema,
          uiSchema: uiSchema
        });
        (0, _chai.expect)(componentProps).to.haveOwnProperty('type');
        (0, _chai.expect)(componentProps.type).to.equal('number');
      });
      it('and ui:widget=radio', function () {
        var schema = {
          'title': 'First name',
          'type': 'number'
        };
        var uiSchema = {
          'ui:widget': 'radio'
        };
        var componentProps = (0, _getComponentProps.default)({
          schema: schema,
          uiSchema: uiSchema
        });
        (0, _chai.expect)(componentProps).to.haveOwnProperty('type');
        (0, _chai.expect)(componentProps.type).to.equal('number');
      });
    });
    describe('to number when type=integer', function () {
      it('and ui:widget=updown', function () {
        var schema = {
          'title': 'First name',
          'type': 'integer'
        };
        var uiSchema = {
          'ui:widget': 'updown'
        };
        var componentProps = (0, _getComponentProps.default)({
          schema: schema,
          uiSchema: uiSchema
        });
        (0, _chai.expect)(componentProps).to.haveOwnProperty('type');
        (0, _chai.expect)(componentProps.type).to.equal('number');
      });
      it('and ui:widget=radio', function () {
        var schema = {
          'title': 'First name',
          'type': 'integer'
        };
        var uiSchema = {
          'ui:widget': 'radio'
        };
        var componentProps = (0, _getComponentProps.default)({
          schema: schema,
          uiSchema: uiSchema
        });
        (0, _chai.expect)(componentProps).to.haveOwnProperty('type');
        (0, _chai.expect)(componentProps.type).to.equal('number');
      });
    });
    it('to password when ui:widget=password', function () {
      var schema = {
        'title': 'Password',
        'type': 'string'
      };
      var uiSchema = {
        'ui:widget': 'password'
      };
      var componentProps = (0, _getComponentProps.default)({
        schema: schema,
        uiSchema: uiSchema
      });
      (0, _chai.expect)(componentProps).to.haveOwnProperty('type');
      (0, _chai.expect)(componentProps.type).to.equal('password');
    });
  });
  describe('with ui:widget=textarea', function () {
    it('sets rows and multiline', function () {
      var schema = {
        'title': 'First name',
        'type': 'string'
      };
      var uiSchema = {
        'ui:widget': 'textarea'
      };
      var componentProps = (0, _getComponentProps.default)({
        schema: schema,
        uiSchema: uiSchema
      });
      (0, _chai.expect)(componentProps).to.haveOwnProperty('rows');
      (0, _chai.expect)(componentProps).to.haveOwnProperty('multiline');
      (0, _chai.expect)(componentProps.rows).to.equal(5);
      (0, _chai.expect)(componentProps.multiline).to.equal(true);
    });
  });
  it('passes mui:* properties', function () {
    var schema = {
      'title': 'First name'
    };
    var uiSchema = {
      'mui:myprop': 'boo'
    };
    var componentProps = (0, _getComponentProps.default)({
      schema: schema,
      uiSchema: uiSchema
    });
    (0, _chai.expect)(componentProps).to.haveOwnProperty('myprop');
    (0, _chai.expect)(componentProps.myprop).to.equal('boo');
  });
  describe('onChange callback', function () {
    it('is called with event target value', function () {
      // prepare
      var schema = {
        'title': 'First name'
      };
      var value = 'new value';

      var spy = _sinon.default.spy(); // act


      var componentProps = (0, _getComponentProps.default)({
        schema: schema,
        onChange: spy
      });
      var onChange = componentProps.onChange;
      var domEvent = {
        target: {
          value: value
        }
      };
      onChange(domEvent); // check

      (0, _chai.expect)(spy).to.have.been.calledWith(value);
    });
    describe('is called with typed value', function () {
      it('text -> number', function () {
        // prepare
        var schema = {
          'title': 'First name',
          'type': 'number'
        };
        var value = '3';

        var spy = _sinon.default.spy(); // act


        var componentProps = (0, _getComponentProps.default)({
          schema: schema,
          onChange: spy
        });
        var onChange = componentProps.onChange;
        var domEvent = {
          target: {
            value: value
          }
        };
        onChange(domEvent); // check

        (0, _chai.expect)(spy).to.have.been.calledWith(3);
      });
      it('number -> text', function () {
        // prepare
        var schema = {
          'title': 'First name',
          'type': 'string'
        };
        var value = 3;

        var spy = _sinon.default.spy(); // act


        var componentProps = (0, _getComponentProps.default)({
          schema: schema,
          onChange: spy
        });
        var onChange = componentProps.onChange;
        var domEvent = {
          target: {
            value: value
          }
        };
        onChange(domEvent); // check

        (0, _chai.expect)(spy).to.have.been.calledWith('3');
      });
    });
  });
});