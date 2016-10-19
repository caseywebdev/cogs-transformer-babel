const _ = require('underscore');
const babel = require('babel-core');

module.exports = ({file: {buffer, path}, options}) => {
  try {
    const source = buffer.toString();
    options = _.extend({filename: path}, options);
    return {
      buffer: Buffer.from(`${babel.transform(source, options).code}\n`)
    };
  } catch (er) {
    if (er.codeFrame) er.message += `\n${er.codeFrame}`;
    throw er;
  }
};
