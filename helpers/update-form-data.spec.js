"use strict";

var _without = _interopRequireDefault(require("lodash/without"));

var _chai = require("chai");

var _updateFormData = _interopRequireWildcard(require("./update-form-data"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */
describe('updateFormData', function () {
  it('updates simple field', function () {
    var initial = {
      name: 'Bob'
    };
    var expected = {
      name: 'Harry'
    };
    (0, _chai.expect)((0, _updateFormData.default)(initial, 'name', 'Harry')).to.deep.equal(expected);
  });
  it('updates nested field', function () {
    var initial = {
      name: {
        firstName: 'Bob'
      }
    };
    var expected = {
      name: {
        firstName: 'Harry'
      }
    };
    (0, _chai.expect)((0, _updateFormData.default)(initial, 'name.firstName', 'Harry')).to.deep.equal(expected);
  });
  it('updates index field (object)', function () {
    var initial = {
      list: [{
        name: 'Bob'
      }]
    };
    var expected = {
      list: [{
        name: 'Harry'
      }]
    };
    (0, _chai.expect)((0, _updateFormData.default)(initial, 'list[0].name', 'Harry')).to.deep.equal(expected);
  });
  it('updates index field (simple)', function () {
    var initial = {
      list: ['Bob']
    };
    var expected = {
      list: ['Harry']
    };
    (0, _chai.expect)((0, _updateFormData.default)(initial, 'list[0]', 'Harry')).to.deep.equal(expected);
  });
  it('updates single field', function () {
    var initial = 'initialValue';
    var expected = 'updatedValue';
    (0, _chai.expect)((0, _updateFormData.default)(initial, '', 'updatedValue')).to.deep.equal(expected);
  });
  it('removes array item', function () {
    var initial = ['one', 'two', 'three'];
    var expected = ['one', 'three'];
    (0, _chai.expect)((0, _updateFormData.default)(initial, '', {
      $apply: function $apply(arr) {
        return (0, _without.default)(arr, 'two');
      }
    })).to.deep.equal(expected);
  });
  it('adds array item', function () {
    var initial = ['one', 'two'];
    var expected = ['one', 'two', 'three'];
    (0, _chai.expect)((0, _updateFormData.default)(initial, '', {
      $push: ['three']
    })).to.deep.equal(expected);
  });
  describe('addListItem', function () {
    it('adds list item', function () {
      var initial = {
        listItems: ['1', '2']
      };
      var expected = {
        listItems: ['1', '2', '3']
      };
      (0, _chai.expect)((0, _updateFormData.addListItem)(initial, 'listItems', '3')).to.deep.equal(expected);
    });
    it('adds list item to null list', function () {
      var initial = {
        listItems: null
      };
      var expected = {
        listItems: ['1']
      };
      (0, _chai.expect)((0, _updateFormData.addListItem)(initial, 'listItems', '1')).to.deep.equal(expected);
    });
    it('adds list item - deep', function () {
      var initial = {
        'myprop': {
          listItems: ['1', '2']
        }
      };
      var expected = {
        'myprop': {
          listItems: ['1', '2', '3']
        }
      };
      (0, _chai.expect)((0, _updateFormData.addListItem)(initial, 'myprop.listItems', '3')).to.deep.equal(expected);
    });
  });
  describe('removeListItem', function () {
    it('remove list item', function () {
      var initial = {
        listItems: ['1', '2', '3']
      };
      var expected = {
        listItems: ['1', '3']
      };
      (0, _chai.expect)((0, _updateFormData.removeListItem)(initial, 'listItems', 1)).to.deep.equal(expected);
    });
    it('remove list item - deep', function () {
      var initial = {
        'myprop': {
          listItems: ['1', '2', '3']
        }
      };
      var expected = {
        'myprop': {
          listItems: ['1', '3']
        }
      };
      (0, _chai.expect)((0, _updateFormData.removeListItem)(initial, 'myprop.listItems', 1)).to.deep.equal(expected);
    });
  });
  describe('moveListItem', function () {
    it('moves list item up', function () {
      var initial = {
        listItems: ['1', '2', '3']
      };
      var expected = {
        listItems: ['2', '1', '3']
      };
      (0, _chai.expect)((0, _updateFormData.moveListItem)(initial, 'listItems', 1, -1)).to.deep.equal(expected);
    });
    it('moves list item down', function () {
      var initial = {
        listItems: ['1', '2', '3']
      };
      var expected = {
        listItems: ['2', '1', '3']
      };
      (0, _chai.expect)((0, _updateFormData.moveListItem)(initial, 'listItems', 0, 1)).to.deep.equal(expected);
    });
  });
});