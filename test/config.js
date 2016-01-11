var tap = function (file, options, cb) {
  options.presets.push('react');
  cb(null, options);
};

module.exports = {
  in: {
    js: {
      transformers: {
        name: '.',
        options: {
          presets: [
            'es2015',
            'stage-0'
          ],
          tap: tap
        }
      }
    }
  }
};
