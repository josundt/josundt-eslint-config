module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "extends": [
        "./rules/deprecation.js",
        // "./rules/eslint.js",  -> commented out since "typescript-eslint" rules inherit from this
        "./rules/eslint-comments.js",
        "./rules/import-typescript.js",
        "./rules/jsdoc-typescript.js",
        "./rules/typescript-eslint.js",
        "./rules/unicorn.js",
    ].map(require.resolve),
    "rules": {},
    "overrides": [ // Overrides for test files
        {
            "files": ["**/?(*.)+(spec).[jt]s?(x)"],
            "extends": [
                "./rules/jasmine.js",
                "./rules/jest.js"
            ].map(require.resolve),
            "rules": {
                "@typescript-eslint/unbound-method": "off",
            }
        }
    ],
};
