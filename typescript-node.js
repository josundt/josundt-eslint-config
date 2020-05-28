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
        "./rules/eslint.js",
        "./rules/import-typescript.js",
        "./rules/jsdoc-typescript.js",
        "./rules/typescript-eslint.js",
        "./rules/unicorn.js",
    ].map(require.resolve),
    "rules": {}
};
