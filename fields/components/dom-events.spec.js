"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = _interopRequireWildcard(require("chai"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _chaiEnzyme = _interopRequireDefault(require("chai-enzyme"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */

/* eslint-disable no-unused-expressions */
_chai.default.use(_sinonChai.default);

_chai.default.use((0, _chaiEnzyme.default)());

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('dom events', function () {
  it('test click button', function () {
    var onClick = _sinon.default.spy();

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement("button", {
      onClick: onClick
    }));
    var btnComp = wrapper.find('button');
    (0, _chai.expect)(btnComp).to.have.length(1);
    btnComp.simulate('click');
    (0, _chai.expect)(onClick).to.have.been.calledOnce;
  });
  it('test click checkbox', function () {
    var onChange = _sinon.default.spy();

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement("input", {
      type: 'checkbox',
      onChange: onChange,
      value: 'a',
      checked: true
    }));
    var btnComp = wrapper.find('input');
    (0, _chai.expect)(btnComp).to.have.length(1);
    btnComp.simulate('change');
    (0, _chai.expect)(onChange).to.have.been.calledOnce;
  });
});