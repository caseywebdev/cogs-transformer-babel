var _ = require('underscore');
var babel = require('babel-core');

module.exports = function (file, options, cb) {
  var source = file.buffer.toString();
  options = _.extend({filename: file.path}, options);
  try { source = babel.transform(source, options).code + '\n'; }
  catch (er) { return cb(er); }
  cb(null, {buffer: new Buffer(source)});
};
