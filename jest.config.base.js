module.exports = {
    testRegex: ".*\\.spec\\.ts$",
    transform: {
        ".+\\.(t|j)s$": "ts-jest"
    },
    testEnvironment: "node"
}