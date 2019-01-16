"use strict";

var _chai = require("chai");

var _getDefaultValue = _interopRequireDefault(require("./get-default-value"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */
describe('getDefaultValue', function () {
  it('works for string', function () {
    // assemble
    var data = {
      type: 'string'
    };
    var expected = ''; // act

    var actual = (0, _getDefaultValue.default)(data); // assert

    (0, _chai.expect)(actual).to.equal(expected);
  });
  it('works for string with default value', function () {
    // assemble
    var data = {
      type: 'string',
      default: 'foo'
    };
    var expected = 'foo'; // act

    var actual = (0, _getDefaultValue.default)(data); // assert

    (0, _chai.expect)(actual).to.equal(expected);
  });
  it('works for object', function () {
    // assemble
    var data = {
      type: 'object'
    };
    var expected = {}; // act

    var actual = (0, _getDefaultValue.default)(data); // assert

    (0, _chai.expect)(actual).to.deep.equal(expected);
  });
  it('works for object with properties', function () {
    // assemble
    var data = {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        }
      }
    };
    var expected = {
      name: ''
    }; // act

    var actual = (0, _getDefaultValue.default)(data); // assert

    (0, _chai.expect)(actual).to.deep.equal(expected);
  });
  it('works for object with properties with default values', function () {
    // assemble
    var data = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          default: 'bar'
        }
      }
    };
    var expected = {
      name: 'bar'
    }; // act

    var actual = (0, _getDefaultValue.default)(data); // assert

    (0, _chai.expect)(actual).to.deep.equal(expected);
  });
  it('works for nested object', function () {
    // assemble
    var data = {
      type: 'object',
      properties: {
        name: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string'
            }
          }
        }
      }
    };
    var expected = {
      name: {
        firstName: ''
      }
    }; // act

    var actual = (0, _getDefaultValue.default)(data); // assert

    (0, _chai.expect)(actual).to.deep.equal(expected);
  });
});