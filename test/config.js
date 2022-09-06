export default {
  transformers: {
    name: 'index.js',
    only: '**/*.js',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};
