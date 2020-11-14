const TEST_ENV = process.env.TEST_ENV;

function getModule(env) {
  if (env === 'ci') {
    return `<rootdir>/dist/simply-animate.js`;
  }
  return `<rootdir>/src/simply-animate.ts`;
}

function getRoot(env) {
  console.log(env);
  if (env === 'ci') {
    return '<rootDir>/build-tests';
  }
  return '<rootDir>/src';
}

module.exports = {
  roots: [
    getRoot(TEST_ENV)
  ],
  moduleNameMapper: {
    '^simply-animate$': getModule(TEST_ENV)
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}