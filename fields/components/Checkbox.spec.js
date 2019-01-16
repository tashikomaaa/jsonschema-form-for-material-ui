"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = _interopRequireWildcard(require("chai"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

var _chaiEnzyme = _interopRequireDefault(require("chai-enzyme"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Checkbox2 = _interopRequireDefault(require("./Checkbox"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */

/* eslint-disable no-unused-expressions */
// eslint-disable-line import/no-named-default
_chai.default.use(_sinonChai.default);

_chai.default.use((0, _chaiEnzyme.default)());

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('Checkbox', function () {
  it('mounts with standard attributes (control)', function () {
    var checked = true;
    var path = 'done';
    var label = 'Done';
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Checkbox2.default, {
      label: label,
      path: path,
      checked: checked
    }));
    var fcComp = wrapper.find(_FormControlLabel.default);
    (0, _chai.expect)(fcComp).to.have.length(1);
    (0, _chai.expect)(fcComp.prop('label')).to.equal(label);
    var cbComp = wrapper.find(_Checkbox.default);
    (0, _chai.expect)(cbComp).to.have.length(1);
    (0, _chai.expect)(cbComp.prop('checked')).to.equal(checked);
    (0, _chai.expect)(cbComp.prop('value')).to.equal(path);
  });
  it('passes additional properties to the Checkbox component', function () {
    var props = {
      color: 'primary'
    };
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Checkbox2.default, props));
    var cbComp = wrapper.find(_Checkbox.default);
    (0, _chai.expect)(cbComp.prop('color')).to.equal(props.color);
  });
  it('calls onChange when clicked', function () {
    var onChange = _sinon.default.spy();

    var checked = true;
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Checkbox2.default, {
      path: 'a',
      value: checked,
      onChange: onChange
    }));
    var cbComp = wrapper.find('input');
    (0, _chai.expect)(cbComp).to.have.length(1);
    cbComp.simulate('change');
    (0, _chai.expect)(onChange).to.have.been.calledOnce;
  });
});