module.exports = {
  testEnvironment: 'jest-environment-jsdom',

  moduleFileExtensions: ['js', 'json', 'vue'],

  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },

  moduleNameMapper: {
    '\\.(css|scss|svg|png)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
}
