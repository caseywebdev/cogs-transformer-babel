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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _$ = _interopRequireDefault(_jquery);

  var _React = _interopRequireDefault(_react);

  var app = {
    init: function init() {
      (0, _$['default'])('body');
    }
  };

  (0, _$['default'])(app.init);

  _React['default'].createElement(
    'div',
    null,
    'foo bar baz'
  );

  module.exports = app;
});
