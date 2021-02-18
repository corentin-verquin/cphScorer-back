/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'babel-jest'
  },
  clearMocks: true
}
