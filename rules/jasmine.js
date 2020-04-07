module.exports = {
    "extends": [
        "plugin:jasmine/recommended"
    ],
    "env": {
        "jasmine": true
    },
    "plugins": [
        "jasmine"
    ],
    "rules": {
        "jasmine/no-suite-dupes": [
            "error",
            "branch"
        ],
        "jasmine/no-spec-dupes": [
            "error",
            "branch"
        ],
        "jasmine/no-describe-variables": "error"
    }
};
