var _ = require('underscore');
var babel = require('babel-core');

var NOOP = function (file, options, cb) { cb(null, options); };

module.exports = function (file, options, cb) {
  try {
    var handleError = function (er) {
      if (er.codeFrame) er.message += '\n' + er.codeFrame;
      return cb(er);
    };
    var source = file.buffer.toString();
    options = _.extend({filename: file.path}, options);
    var tap = options.tap || NOOP;
    delete options.tap;
    tap(file, options, function (er, options) {
      try {
        if (er) throw er;
        source = babel.transform(source, options).code + '\n';
        cb(null, {buffer: new Buffer(source)});
      } catch (er) { handleError(er); }
    });
  } catch (er) { handleError(er); }
};
