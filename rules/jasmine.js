module.exports = {
    extends: ["plugin:jasmine/recommended"],
    env: {
        jasmine: true
    },
    plugins: ["jasmine"],
    rules: {
        "jasmine/no-suite-dupes": ["error", "branch"],
        "jasmine/no-spec-dupes": ["error", "branch"],
        "jasmine/no-describe-variables": "off",
        "jasmine/new-line-between-declarations": "off", // formatting rule conflicting with formatters (e.g. prettier)
        "jasmine/new-line-before-expect": "off" // formatting rule conflicting with formatters (e.g. prettier)
    }
};
