// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  // eslint:recommended обязательно в начале
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier', 'jest'],
  ignorePatterns: [
    'webpack.config.js',
    'node_modules',
    'babel.config.js',
    'dist',
  ],
};
