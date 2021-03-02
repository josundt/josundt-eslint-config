module.exports = {
    "env": {
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
        "./rules/import-typescript.js",
        "./rules/jasmine.js",
        "./rules/jsdoc-typescript.js",
        "./rules/typescript-eslint.js",
        "./rules/unicorn.js",
    ].map(require.resolve),
    "rules": {}
};
