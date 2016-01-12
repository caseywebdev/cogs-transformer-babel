var _ = require('underscore');
var babel = require('babel-core');

module.exports = function (file, options, cb) {
  try {
    var source = file.buffer.toString();
    options = _.extend({filename: file.path}, options);
    source = babel.transform(source, options).code + '\n';
    cb(null, {buffer: new Buffer(source)});
  } catch (er) {
    if (er.codeFrame) er.message += '\n' + er.codeFrame;
    return cb(er);
  }
};
