module.exports = {
  cacheDirectory: '.jest-cache',

  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],

  testEnvironment: 'node',

  testMatch: ['**/__tests__/**/*(*.)(spec).ts?(x)'],

  transform: {
    "^.+\\.tsx?$": "jest-esbuild"
  },
}