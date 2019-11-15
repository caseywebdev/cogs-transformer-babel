const _ = require('underscore');
const { transformAsync } = require('@babel/core');

module.exports = async ({ file: { buffer, path }, options }) => {
  try {
    const source = buffer.toString();
    options = _.extend({ filename: path }, options);
    const { code } = await transformAsync(source, options);
    return { buffer: Buffer.from(`${code}\n`) };
  } catch (er) {
    if (er.codeFrame) er.message += `\n${er.codeFrame}`;
    throw er;
  }
};
