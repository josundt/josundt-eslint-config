module.exports = {
    "extends": [
        "plugin:jsdoc/recommended"
    ],
    "plugins": [
        "jsdoc"
    ],
    "settings": {
        "jsdoc": {
            "mode": "typescript",
            "tagNamePreference": {
                "augments": {
                    "message": "@extends is to be used over @augments as it is more evocative of classes than @augments",
                    "replacement": "extends"
                }
            }
        }
    },
    "rules": {
        "jsdoc/require-jsdoc": "off",
        "jsdoc/no-types": "error",
        "jsdoc/require-param-type": "off",
        "jsdoc/require-returns-type": "off",
        "jsdoc/newline-after-description": "off",
        "jsdoc/no-undefined-types": "off",
        "jsdoc/check-tag-names": [
            "warn",
            {
                "definedTags": [
                    "internal",
                    "constructor",
                    "export",
                    "extends",
                    "memberOf"
                ]
            }
        ]
    }
};
