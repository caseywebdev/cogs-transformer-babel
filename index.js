import babel from '@babel/core';
import _ from 'underscore';

const { Buffer } = globalThis;

export default async ({ file: { buffer, path }, options }) => {
  try {
    const source = buffer.toString();
    options = _.extend({ filename: path }, options);
    const { code } = await babel.transformAsync(source, options);
    return { buffer: Buffer.from(`${code}\n`) };
  } catch (er) {
    if (er.codeFrame) er.message += `\n${er.codeFrame}`;
    throw er;
  }
};
