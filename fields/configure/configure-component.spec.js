"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* globals describe,it,beforeEach */
// eslint-disable-next-line max-len

/* eslint-disable import/no-webpack-loader-syntax,import/no-extraneous-dependencies,import/no-unresolved,no-unused-expressions */
var proxyquire = require('proxyquire').noCallThru(); // import configureComponent from './configure-component';


_chai.default.use(_sinonChai.default);

describe('configureComponent', function () {
  var configureComponent;

  var getComponentProps = _sinon.default.stub();

  var getLabelComponentProps = _sinon.default.stub();

  var getLabelComponent = _sinon.default.stub();

  var getComponent = _sinon.default.stub();

  beforeEach(function () {
    configureComponent = proxyquire('./configure-component', {
      './get-component-props': getComponentProps,
      './get-label-component-props': getLabelComponentProps,
      './get-label-component': getLabelComponent,
      './get-component': getComponent
    }).default;
  });
  it('delegates to helper functions - control', function () {
    var props = {
      schema: {
        title: 'Default title'
      }
    };
    var expectedComponent = 'x';
    var expectedLabelComponent = 'y';
    var expectedComponentProps = {
      'a': 'a'
    };
    var expectedLabelComponentProps = {
      'b': 'b'
    };
    getComponent.returns(expectedComponent);
    getLabelComponent.returns(expectedLabelComponent);
    getComponentProps.returns(expectedComponentProps);
    getLabelComponentProps.returns(expectedLabelComponentProps);

    var _configureComponent = configureComponent(props),
        componentProps = _configureComponent.componentProps,
        labelComponentProps = _configureComponent.labelComponentProps,
        Component = _configureComponent.Component,
        LabelComponent = _configureComponent.LabelComponent,
        className = _configureComponent.className,
        title = _configureComponent.title;

    (0, _chai.expect)(Component).to.equal(expectedComponent);
    (0, _chai.expect)(LabelComponent).to.equal(expectedLabelComponent);
    (0, _chai.expect)(componentProps).to.deep.equal(expectedComponentProps);
    (0, _chai.expect)(labelComponentProps).to.deep.equal(expectedLabelComponentProps);
    (0, _chai.expect)(className).to.be.null;
    (0, _chai.expect)(title).to.equal(props.schema.title);
  });
  it('substitutes title for ui:title if present', function () {
    var schema = {
      'title': 'Default title'
    };
    var uiSchema = {
      'ui:title': 'Another title'
    };
    var config = configureComponent({
      schema: schema,
      uiSchema: uiSchema
    });
    (0, _chai.expect)(config.title).to.equal('Another title');
  });
  it('sets classname for textarea', function () {
    var schema = {};
    var uiSchema = {
      'ui:widget': 'textarea'
    };

    var _configureComponent2 = configureComponent({
      schema: schema,
      uiSchema: uiSchema
    }),
        className = _configureComponent2.className;

    (0, _chai.expect)(className).to.equal('textarea');
  });
  it('no LabelComponent if no title', function () {
    var schema = {};

    var _configureComponent3 = configureComponent({
      schema: schema
    }),
        LabelComponent = _configureComponent3.LabelComponent;

    (0, _chai.expect)(LabelComponent).to.be.undefined;
  });
});