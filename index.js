const {promisify} = require('util');
const _ = require('underscore');
const babel = require('@babel/core');

const transform = promisify(babel.transform);

module.exports = async ({file: {buffer, path}, options}) => {
  try {
    const source = buffer.toString();
    options = _.extend({filename: path}, options);
    const {code} = await transform(source, options);
    return {buffer: Buffer.from(`${code}\n`)};
  } catch (er) {
    if (er.codeFrame) er.message += `\n${er.codeFrame}`;
    throw er;
  }
};
