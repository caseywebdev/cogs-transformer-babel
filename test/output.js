(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'jquery', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('jquery'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jquery, global.react);
    global.input = mod.exports;
  }
})(this, function (exports, _jquery, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _jquery2 = _interopRequireDefault(_jquery);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var app = (0, _jquery2.default)(function () {
    return _react2.default.createElement('div', {
      id: 'foo'
    });
  });
  exports.default = app;
});
