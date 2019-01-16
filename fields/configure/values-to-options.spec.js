"use strict";

var _chai = require("chai");

var _valuesToOptions = _interopRequireDefault(require("./values-to-options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */
describe('valuesToOptions', function () {
  it('returns key = value form array', function () {
    var values = ['one', 'two', 'three'];
    var expected = [{
      key: 'one',
      value: 'one'
    }, {
      key: 'two',
      value: 'two'
    }, {
      key: 'three',
      value: 'three'
    }];
    var actual = (0, _valuesToOptions.default)(values);
    (0, _chai.expect)(actual).to.deep.equal(expected);
  });
  it('handles object', function () {
    var values = {
      one: 'One',
      two: 'Two',
      three: 'Three'
    };
    var expected = [{
      key: 'one',
      value: 'One'
    }, {
      key: 'two',
      value: 'Two'
    }, {
      key: 'three',
      value: 'Three'
    }];
    var actual = (0, _valuesToOptions.default)(values);
    (0, _chai.expect)(actual).to.deep.equal(expected);
  });
});