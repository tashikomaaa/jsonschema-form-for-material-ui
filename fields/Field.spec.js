"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = _interopRequireWildcard(require("chai"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _chaiEnzyme = _interopRequireDefault(require("chai-enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _components = require("./components");

var _Field = require("./Field");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */

/* eslint-disable no-unused-expressions */
var classes = {
  description: 'description',
  root: 'rootClassName',
  myComp: 'myCompClassName',
  withLabel: 'withLabelClass'
};

_chai.default.use((0, _chaiEnzyme.default)());

_chai.default.use(_sinonChai.default);

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('Field', function () {
  it('mounts with standard attributes (control)', function () {
    var componentProps = {
      multiline: true
    };
    var data = 'Hello';
    var type = 'string';
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Field.ConfiguredField, {
      type: type,
      data: data,
      classes: classes,
      componentProps: componentProps
    })); // test FormControl properties

    var FC = wrapper.find(_FormControl.default);
    (0, _chai.expect)(FC).to.have.length(1);
    (0, _chai.expect)(FC).to.have.prop('className').match(/rootClassName/).not.match(/withLabelClass/); // no helpText, descriptionText or LabelComponent

    (0, _chai.expect)(FC.children()).to.have.length(1); // control
    // test Component properties

    var Component = wrapper.find(_Input.default); // control

    (0, _chai.expect)(Component).to.be.present();
    (0, _chai.expect)(Component).to.have.prop('multiline', componentProps.multiline);
    (0, _chai.expect)(Component).to.have.prop('value', data);
    (0, _chai.expect)(Component).to.have.prop('type', type);
    (0, _chai.expect)(Component).to.not.have.prop('className'); // control
  });
  it('applies given className', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Field.ConfiguredField, {
      classes: classes,
      className: 'myComp'
    }));
    var Component = wrapper.find(_Input.default);
    (0, _chai.expect)(Component).to.be.present();
    (0, _chai.expect)(Component).to.have.prop('className', classes.myComp);
  });
  it('renders provided Component', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Field.ConfiguredField, {
      Component: _components.RadioGroup
    }));
    (0, _chai.expect)(wrapper.find(_Input.default)).to.not.be.present();
    (0, _chai.expect)(wrapper.find(_components.RadioGroup)).to.be.present();
  });
  it('renders provided LabelComponent with title and labelComponentProps', function () {
    var labelComponentProps = {
      style: 'bold'
    };
    var title = 'Hello';

    var DummyLabel = function DummyLabel(_ref) {
      var children = _ref.children;
      return _react.default.createElement("div", null, children);
    };

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Field.ConfiguredField, {
      title: title,
      labelComponentProps: labelComponentProps,
      LabelComponent: DummyLabel
    }));
    var labelComp = wrapper.find(DummyLabel);
    (0, _chai.expect)(labelComp).to.be.present();
    (0, _chai.expect)(labelComp).to.have.prop('style', labelComponentProps.style);
    (0, _chai.expect)(labelComp.children()).to.have.length(1);
    (0, _chai.expect)(labelComp.childAt(0)).to.have.text(title);
  });
  it('renders provided descriptionText', function () {
    var descriptionText = 'This is a field';
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Field.ConfiguredField, {
      classes: classes,
      descriptionText: descriptionText
    }));
    var descriptionComp = wrapper.find('p');
    (0, _chai.expect)(descriptionComp).to.have.length(1);
    (0, _chai.expect)(descriptionComp).to.have.prop('className', classes.description);
    (0, _chai.expect)(descriptionComp).to.have.text(descriptionText);
  });
  it('renders provided helpText', function () {
    var helpText = 'Help! I need somebody!';
    var id = 'unq-id';
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Field.ConfiguredField, {
      id: id,
      helpText: helpText
    }));
    var helpComp = wrapper.find(_FormHelperText.default);
    (0, _chai.expect)(helpComp).to.be.present();
    (0, _chai.expect)(helpComp).to.have.prop('id', "".concat(id, "-help"));
    (0, _chai.expect)(helpComp.children()).to.have.length(1);
    (0, _chai.expect)(helpComp.childAt(0).text()).to.equal(helpText);
  });
  it('calls onChange', function () {
    var onChange = _sinon.default.spy();

    var data = 'Some value';
    var componentProps = {
      onChange: onChange
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Field.ConfiguredField, {
      componentProps: componentProps,
      data: data
    }));
    var inputComp = wrapper.find(_Input.default);
    inputComp.simulate('change', 'value');
    (0, _chai.expect)(onChange).to.be.calledWith('value');
  });
  it('has withLabel className ', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Field.ConfiguredField, {
      LabelComponent: _FormLabel.default,
      classes: classes
    }));
    (0, _chai.expect)(wrapper).prop('className').match(/withLabelClass/);
  });
});