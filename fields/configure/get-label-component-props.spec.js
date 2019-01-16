"use strict";

var _chai = require("chai");

var _getLabelComponentProps = _interopRequireDefault(require("./get-label-component-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */
describe('getLabelComponentProps', function () {
  it('configures props for simple field', function () {
    var schema = {
      'title': 'First name',
      'type': 'string'
    };
    var required = []; // const data = 'Maxamillian';

    var htmlId = 'unq';
    var expectedLabelProps = {
      htmlFor: htmlId,
      required: false
    };
    var labelComponentProps = (0, _getLabelComponentProps.default)({
      schema: schema,
      required: required,
      htmlId: htmlId
    });
    (0, _chai.expect)(labelComponentProps).to.deep.equal(expectedLabelProps);
  });
});