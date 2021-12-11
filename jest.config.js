module.exports = {
  cacheDirectory: '.jest-cache',

  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'node'],

  testEnvironment: 'node',

  testMatch: ['**/__tests__/**/*(*.)(spec).ts?(x)'],

  transform: {
    "^.+\\.tsx?$": "esbuild-jest"
  },
}