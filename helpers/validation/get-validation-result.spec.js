"use strict";

var _chai = require("chai");

var _getValidationResult = _interopRequireDefault(require("./get-validation-result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals describe,it */
describe('getValidations', function () {
  it('max len - fail', function () {
    var schema = {
      'properties': {
        'firstName': {
          'title': 'First name',
          'maxLength': 10
        }
      }
    };
    var data = {
      firstName: 'Maxamillian'
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.firstName).to.have.length(1);
    (0, _chai.expect)(result.firstName[0].rule).to.equal('maxLength');
  });
  it('max-len - pass', function () {
    var schema = {
      'properties': {
        'firstName': {
          'title': 'First name',
          'maxLength': 10
        }
      }
    };
    var data = {
      firstName: 'Max'
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.firstName).to.have.length(0);
  });
  it('min-len - fail', function () {
    var schema = {
      'properties': {
        'firstName': {
          'title': 'First name',
          'minLength': 3
        }
      }
    };
    var data = {
      firstName: 'Mi'
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.firstName).to.have.length(1);
    (0, _chai.expect)(result.firstName[0].rule).to.equal('minLength');
  });
  it('pattern - fail', function () {
    var schema = {
      'properties': {
        'email': {
          'title': 'Email',
          'pattern': '[a-zA-Z]{1}[a-zA-Z\\-\\+_]@[a-zA-Z\\-_]+\\.com'
        }
      }
    };
    var data = {
      email: 'geoffs-fridges-at-gmail-dot-com'
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result).to.haveOwnProperty('email');
    (0, _chai.expect)(result.email).to.have.length(1);
    (0, _chai.expect)(result.email[0].rule).to.equal('pattern');
  });
  it('pattern - pass', function () {
    var schema = {
      'properties': {
        'email': {
          'title': 'Email',
          'pattern': '[a-zA-Z]{1}[a-zA-Z\\-\\+_]@[a-zA-Z\\-_]+\\.com'
        }
      }
    };
    var data = {
      email: 'geoffs-fridges@geoff.com'
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result).to.haveOwnProperty('email');
    (0, _chai.expect)(result.email).to.have.length(0);
  });
  it('minimum - fail', function () {
    var schema = {
      'properties': {
        'age': {
          'title': 'Age',
          'minimum': 10
        }
      }
    };
    var data = {
      age: 9
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.age).to.have.length(1);
    (0, _chai.expect)(result.age[0].rule).to.equal('minimum');
  });
  it('minimum - pass', function () {
    var schema = {
      'properties': {
        'age': {
          'title': 'Age',
          'minimum': 10
        }
      }
    };
    var data = {
      age: 10
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.age).to.have.length(0);
  });
  it('maximum - fail', function () {
    var schema = {
      'properties': {
        'age': {
          'title': 'Age',
          'maximum': 18
        }
      }
    };
    var data = {
      age: 19
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.age).to.have.length(1);
    (0, _chai.expect)(result.age[0].rule).to.equal('maximum');
  });
  it('maximum - pass', function () {
    var schema = {
      'properties': {
        'age': {
          'title': 'Age',
          'maximum': 18
        }
      }
    };
    var data = {
      age: 18
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.age).to.have.length(0);
  });
  it('no validations', function () {
    var schema = {
      'properties': {
        'name': {
          type: 'string'
        }
      }
    };
    var data = {
      name: 'Bob'
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.name).to.have.length(0);
  });
  it('no validations, no value', function () {
    var schema = {
      'properties': {
        'name': {
          type: 'string'
        }
      }
    };
    var data = {
      name: null
    };
    var result = (0, _getValidationResult.default)(schema, data);
    (0, _chai.expect)(result.name).to.have.length(0);
  });
});