/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/database/connectDataBase.ts",
    "!src/loadEnvironment.ts",
    "!src/startServer.ts",
    "!src/index.ts",
  ],
};
