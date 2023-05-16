module.exports = {
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.tsx?$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    },
}