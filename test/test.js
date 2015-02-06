var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.es6': {
      path: 'test/input.es6',
      buffer: helper.getFileBuffer('test/output.js'),
      hash: helper.getFileHash('test/output.js'),
      requires: [{
        path: 'test/input.es6',
        hash: helper.getFileHash('test/input.es6')
      }],
      links: [],
      globs: []
    },
    'test/error.es6': Error
  }
});
