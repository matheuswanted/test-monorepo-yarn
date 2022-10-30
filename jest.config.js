module.exports = {
    projects: [
        "<rootDir>/packages/app",
        "<rootDir>/packages/models"
    ],
    coverageReporters: [
        "json",
        "text-summary",
        "html"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/!(*spec).ts"
    ],
    coverageDirectory: "coverage/unit",
    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
}