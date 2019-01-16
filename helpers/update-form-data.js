"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveListItem = exports.removeListItem = exports.addListItem = exports.default = void 0;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _size = _interopRequireDefault(require("lodash/size"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrRegex = /^([^.]+)\[([0-9]+)\](\.(.*))?/;
var dotRegex = /^([^[]+)\.(.*$)/;

var applyAtPath = function applyAtPath(path, data, spec) {
  if (!path) return spec(data);
  var dotMatch = path.match(dotRegex);
  var arrMatch = path.match(arrRegex);

  if (!dotMatch && !arrMatch) {
    return _defineProperty({}, path, spec(data[path]));
  }

  if (dotMatch) {
    var subPath = dotMatch[1];
    var prop = dotMatch[2];
    return _defineProperty({}, subPath, applyAtPath(prop, data[subPath], spec));
  }

  if (arrMatch) {
    var _subPath = arrMatch[1];
    var index = Number(arrMatch[2]);
    return _defineProperty({}, _subPath, _defineProperty({}, index, applyAtPath(arrMatch[4], data[_subPath][index], spec)));
  }

  return {};
};

var setValueSpec = function setValueSpec(value) {
  return function () {
    if (_typeof(value) === 'object' && (0, _size.default)(value) === 1) return value;
    return {
      $set: value
    };
  };
};

var pushItemSpec = function pushItemSpec(value) {
  return function (data) {
    if (data) return {
      $push: [value]
    };
    return {
      $set: [value]
    };
  };
};

var removeItemSpec = function removeItemSpec(idx) {
  return function () {
    return {
      $splice: [[idx, 1]]
    };
  };
};

var moveItemSpec = function moveItemSpec(idx, direction) {
  return function (value) {
    var _ref4;

    return _ref4 = {}, _defineProperty(_ref4, idx, {
      $set: value[idx + direction]
    }), _defineProperty(_ref4, idx + direction, {
      $set: value[idx]
    }), _ref4;
  };
};

var _default = function _default(data, path, value) {
  var s = setValueSpec(value);
  var spec = applyAtPath(path, data, s);
  return (0, _immutabilityHelper.default)(data, spec);
};

exports.default = _default;

var addListItem = function addListItem(data, path, value) {
  var spec = applyAtPath(path, data, pushItemSpec(value));
  return (0, _immutabilityHelper.default)(data, spec);
};

exports.addListItem = addListItem;

var removeListItem = function removeListItem(data, path, index) {
  var spec = applyAtPath(path, data, removeItemSpec(index));
  return (0, _immutabilityHelper.default)(data, spec);
};

exports.removeListItem = removeListItem;

var moveListItem = function moveListItem(data, path, index, direction) {
  var spec = applyAtPath(path, data, moveItemSpec(index, direction));
  return (0, _immutabilityHelper.default)(data, spec);
};

exports.moveListItem = moveListItem;