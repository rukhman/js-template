// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    '\\.js$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  jest: {
    moduleNameMapper: {
      '^.+\\.(jpg|jpeg)$': 'jest-static-stubs/jpg',
      '^.+\\.gif$': 'jest-static-stubs/gif',
      '^.+\\.(eot|otf|svg|ttf|woff|woff2|mp3|m4a|aac|oga)$':
        'identity-obj-proxy',
    },
  },
};
