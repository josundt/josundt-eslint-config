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
        "./rules/eslint.js",
        "./rules/import-typescript.js",
        "./rules/jasmine.js",
        "./rules/jsdoc-typescript.js",
        "./rules/typescript-eslint.js",
        "./rules/unicorn.js",
    ].map(require.resolve),
    "rules": {}
};
