module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3763.0 Safari/537.36'
  },
  testMatch: [
    "<rootDir>/test/**/*.spec.(ts|tsx)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
}
