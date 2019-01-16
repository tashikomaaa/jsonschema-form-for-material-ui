"use strict";

var _react = _interopRequireDefault(require("react"));

var _forEach = _interopRequireDefault(require("lodash/forEach"));

var _chai = _interopRequireWildcard(require("chai"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _chaiEnzyme = _interopRequireDefault(require("chai-enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _sinon = _interopRequireDefault(require("sinon"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _FieldSet = require("./FieldSet");

var _FormField = _interopRequireDefault(require("../FormField"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */

/* eslint-disable no-unused-expressions */
var classes = {
  root: 'rootClassName',
  row: 'rowClassName'
};

_chai.default.use((0, _chaiEnzyme.default)());

_chai.default.use(_sinonChai.default);

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('FieldSet', function () {
  describe('FieldSet - control', function () {
    it('mounts (control)', function () {
      var schema = {};
      var data = {}; // act

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawFieldSet, {
        classes: classes,
        schema: schema,
        data: data
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      var ffComp = wrapper.find(_FieldSet.FieldSetContent);
      (0, _chai.expect)(ffComp).to.have.length(1);
      (0, _chai.expect)(ffComp).to.have.prop('schema', schema);
      var legendComp = wrapper.find('legend');
      (0, _chai.expect)(legendComp).to.not.be.present();
    });
  });
  describe('FieldSetObject', function () {
    it('mounts with single field (control)', function () {
      var schema = {
        type: 'object',
        properties: {
          name: {
            'type': 'string',
            'title': 'Name'
          }
        }
      };
      var data = {
        name: 'Bob'
      }; // act

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawFieldSetObject, {
        classes: classes,
        schema: schema,
        data: data
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      (0, _chai.expect)(wrapper).to.have.prop('className').not.match(/rowClassName/);
      var ffComp = wrapper.find(_FormField.default);
      (0, _chai.expect)(ffComp).to.have.length(1);
      (0, _chai.expect)(ffComp).to.have.prop('path', 'name');
      (0, _chai.expect)(ffComp).to.have.prop('data', data.name);
      (0, _chai.expect)(ffComp).to.have.prop('objectData').deep.equal(data);
    });
    it('respects orientation hint', function () {
      var schema = {
        type: 'object',
        properties: {
          name: {
            'type': 'string',
            'title': 'Name'
          }
        }
      };
      var uiSchema = {
        'ui:orientation': 'row'
      };
      var data = {
        name: 'Bob'
      }; // act

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawFieldSetObject, {
        classes: classes,
        schema: schema,
        data: data,
        uiSchema: uiSchema
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      (0, _chai.expect)(wrapper).to.have.prop('className').match(/rowClassName/);
      var ffComp = wrapper.find(_FormField.default);
      (0, _chai.expect)(ffComp).to.have.length(1);
      (0, _chai.expect)(ffComp).to.have.prop('path', 'name');
      (0, _chai.expect)(ffComp).to.have.prop('data', data.name);
    });
  });
  describe('FieldSetArray', function () {
    it('handles simple, orderable list of strings', function () {
      var path = 'names';
      var defaultValue = 'abc';
      var startIdx = 2;
      var schema = {
        type: 'array',
        title: 'My list',
        items: {
          'type': 'string',
          'title': 'Name',
          'default': defaultValue
        }
      };

      var onMoveItemUp = _sinon.default.stub();

      var onMoveItemDown = _sinon.default.stub();

      var onDeleteItem = _sinon.default.stub();

      (0, _forEach.default)([0, 1], function (i) {
        return onMoveItemUp.withArgs(path, startIdx + i).returns("moveUp".concat(i));
      });
      (0, _forEach.default)([0, 1], function (i) {
        return onMoveItemDown.withArgs(path, startIdx + i).returns("moveDown".concat(i));
      });
      (0, _forEach.default)([0, 1], function (i) {
        return onDeleteItem.withArgs(path, startIdx + i).returns("deleteItem".concat(i));
      });
      var uiSchema = {
        items: {
          'ui:widget': 'textarea'
        }
      };
      var data = ['Bob', 'Harry'];

      var onAddItem = _sinon.default.spy(); // act


      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawFieldSetArray, {
        startIdx: startIdx,
        onAddItem: onAddItem,
        onMoveItemUp: onMoveItemUp,
        onMoveItemDown: onMoveItemDown,
        onDeleteItem: onDeleteItem,
        uiSchema: uiSchema,
        path: path,
        classes: classes,
        schema: schema,
        data: data
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      var ffComp = wrapper.find(_FieldSet.ReorderableFormField);
      (0, _chai.expect)(ffComp).to.have.length(2);
      (0, _forEach.default)([0, 1], function (i) {
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('path', "names[".concat(i + startIdx, "]"));
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('data', data[i]);
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('schema', schema.items);
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('uiSchema', uiSchema.items);
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('onMoveItemUp', "moveUp".concat(i));
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('onMoveItemDown', "moveDown".concat(i));
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('onDeleteItem', "deleteItem".concat(i));
      });
      (0, _chai.expect)(ffComp.at(0)).to.have.prop('first', true);
      (0, _chai.expect)(ffComp.at(0)).to.have.prop('last', false);
      (0, _chai.expect)(ffComp.at(1)).to.have.prop('first', false);
      (0, _chai.expect)(ffComp.at(1)).to.have.prop('last', true);
      var addButton = wrapper.find(_IconButton.default);
      (0, _chai.expect)(addButton).to.be.present();
      addButton.simulate('click');
      (0, _chai.expect)(onAddItem).to.be.calledWith(path, defaultValue);
    });
    it('handles simple, fixed list of strings', function () {
      var path = 'names';
      var schema = {
        type: 'array',
        title: 'My list',
        items: [{
          'type': 'string',
          'title': 'Name'
        }, {
          'type': 'boolean',
          'title': 'Name'
        }]
      };
      var uiSchema = {
        items: [{
          'ui:widget': 'textarea'
        }, {
          'ui:widget': 'checkbox'
        }]
      };
      var data = ['Bob', false]; // act

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawFieldSetArray, {
        uiSchema: uiSchema,
        path: path,
        classes: classes,
        schema: schema,
        data: data
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      var ffComp = wrapper.find(_FormField.default);
      var rffComp = wrapper.find(_FieldSet.ReorderableFormField);
      (0, _chai.expect)(ffComp).to.have.length(2);
      (0, _chai.expect)(rffComp).to.have.length(0);
      (0, _forEach.default)([0, 1], function (idx) {
        (0, _chai.expect)(ffComp.at(idx)).to.have.prop('path', "names[".concat(idx, "]"));
        (0, _chai.expect)(ffComp.at(idx)).to.have.prop('data', data[idx]);
        (0, _chai.expect)(ffComp.at(idx)).to.have.prop('schema', schema.items[idx]);
        (0, _chai.expect)(ffComp.at(idx)).to.have.prop('uiSchema', uiSchema.items[idx]);
      });
    });
    it('handles simple, fixed list of strings with additional items', function () {
      var path = 'names';
      var onMoveItemUp = 'onMoveItemUp';
      var onMoveItemDown = 'onMoveItemDown';
      var onDeleteItem = 'onDeleteItem';
      var schema = {
        type: 'array',
        title: 'My list',
        items: [{
          'type': 'string',
          'title': 'Name'
        }, {
          'type': 'boolean',
          'title': 'Name'
        }],
        additionalItems: {
          'type': 'string',
          'title': 'Name'
        }
      };
      var uiSchema = {
        items: [{
          'ui:widget': 'textarea'
        }, {
          'ui:widget': 'checkbox'
        }],
        additionalItems: {
          'ui:title': 'Children'
        }
      };
      var data = ['Bob', false, 'Harry', 'Susan']; // act

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawFieldSetArray, {
        onMoveItemUp: onMoveItemUp,
        onMoveItemDown: onMoveItemDown,
        onDeleteItem: onDeleteItem,
        uiSchema: uiSchema,
        path: path,
        classes: classes,
        schema: schema,
        data: data
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      var ffComp = wrapper.find(_FormField.default);
      (0, _chai.expect)(ffComp).to.have.length(2);
      (0, _forEach.default)([0, 1], function (i) {
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('path', "names[".concat(i, "]"));
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('data', data[i]);
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('schema', schema.items[i]);
        (0, _chai.expect)(ffComp.at(i)).to.have.prop('uiSchema', uiSchema.items[i]);
        (0, _chai.expect)(ffComp.at(i)).to.not.have.prop('onMoveItemUp');
        (0, _chai.expect)(ffComp.at(i)).to.not.have.prop('onMoveItemDown');
        (0, _chai.expect)(ffComp.at(i)).to.not.have.prop('onDeleteItem');
      });
      var fsArrayComp = wrapper.find(_FieldSet.FieldSetArray);
      (0, _chai.expect)(fsArrayComp).to.be.present();
      (0, _chai.expect)(fsArrayComp).to.have.prop('path', path);
      (0, _chai.expect)(fsArrayComp).to.have.prop('data').deep.equal(['Harry', 'Susan']);
      (0, _chai.expect)(fsArrayComp).to.have.prop('schema').deep.equal({
        type: 'array',
        items: schema.additionalItems
      });
      (0, _chai.expect)(fsArrayComp).to.have.prop('uiSchema', uiSchema.additionalItems);
      (0, _chai.expect)(fsArrayComp).to.have.prop('startIdx', schema.items.length);
      (0, _chai.expect)(fsArrayComp).to.have.prop('onMoveItemUp', onMoveItemUp);
      (0, _chai.expect)(fsArrayComp).to.have.prop('onMoveItemDown', onMoveItemDown);
      (0, _chai.expect)(fsArrayComp).to.have.prop('onDeleteItem', onDeleteItem);
    });
  });
  describe('ReorderControls', function () {
    it('renders buttons with callbacks', function () {
      // prepare
      var onMoveItemUp = _sinon.default.spy();

      var onMoveItemDown = _sinon.default.spy();

      var onDeleteItem = _sinon.default.spy(); // act


      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawReorderControls, {
        onMoveItemDown: onMoveItemDown,
        onDeleteItem: onDeleteItem,
        onMoveItemUp: onMoveItemUp,
        classes: classes
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      var buttonList = wrapper.find(_IconButton.default);
      (0, _chai.expect)(buttonList).to.have.length(3);
      buttonList.at(0).simulate('click');
      (0, _chai.expect)(onMoveItemUp).to.have.been.called;
      buttonList.at(1).simulate('click');
      (0, _chai.expect)(onMoveItemDown).to.have.been.called;
      buttonList.at(2).simulate('click');
      (0, _chai.expect)(onDeleteItem).to.have.been.called;
    });
    it('ReorderControls - first', function () {
      // act
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawReorderControls, {
        first: true,
        last: false,
        classes: classes
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      var buttonList = wrapper.find(_IconButton.default);
      (0, _chai.expect)(buttonList).to.have.length(3);
      (0, _chai.expect)(buttonList.at(0)).to.have.prop('disabled', true);
      (0, _chai.expect)(buttonList.at(1)).to.have.prop('disabled', false);
      (0, _chai.expect)(buttonList.at(2)).to.not.have.prop('disabled');
    });
    it('ReorderControls - last', function () {
      // act
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawReorderControls, {
        first: false,
        last: true,
        classes: classes
      })); // check

      (0, _chai.expect)(wrapper).to.have.length(1);
      var buttonList = wrapper.find(_IconButton.default);
      (0, _chai.expect)(buttonList).to.have.length(3);
      (0, _chai.expect)(buttonList.at(0)).to.have.prop('disabled', false);
      (0, _chai.expect)(buttonList.at(1)).to.have.prop('disabled', true);
      (0, _chai.expect)(buttonList.at(2)).to.not.have.prop('disabled');
    });
  });
  describe('ReorderableFormField', function () {
    it('ReorderableFormField - control', function () {
      var path = 'path';
      var first = 'first';
      var last = 'last'; // act

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FieldSet.RawReorderableFormField, {
        path: path,
        first: first,
        last: last,
        classes: classes
      })); // check

      var ffComp = wrapper.find(_FormField.default);
      (0, _chai.expect)(ffComp).to.have.length(1);
      var controls = wrapper.find(_FieldSet.ReorderControls);
      (0, _chai.expect)(controls).to.have.length(1);
      (0, _chai.expect)(controls).to.have.prop('first', first);
      (0, _chai.expect)(controls).to.have.prop('last', last);
    });
  });
});