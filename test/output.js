(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'jquery', 'react'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('jquery'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.$, global.React);
    global.input = mod.exports;
  }
})(this, function (exports, module, _jquery, _react) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _$ = _interopRequire(_jquery);

  var _React = _interopRequire(_react);

  var app = {
    init: function init() {
      _$('body');
    }
  };

  _$(app.init);

  _React.createElement(
    'div',
    null,
    'foo bar baz'
  );

  module.exports = app;
});
