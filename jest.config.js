module.exports = {
    collectCoverageFrom: ["app/**/*.{js,jsx,mjs}"],
    testMatch: ["<rootDir>/app/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/app/**/?(*.)(spec|test).{js,jsx,mjs}"],
    transform: {
      "^.+\\.(js|jsx|mjs)$": "<rootDir>/jest-transformer.js"
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
  };