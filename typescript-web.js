module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2019,
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "extends": [
        "./rules/deprecation.js",
        // "./rules/eslint.js",  -> commented out since "typescript-eslint" rules inherit from this
        "./rules/eslint-comments.js",
        "./rules/import-typescript-web.js",
        "./rules/jsdoc-typescript.js",
        "./rules/no-lookahead-lookbehind-regexp.js",
        "./rules/typescript-eslint.js",
        "./rules/unicorn.js"
    ].map(require.resolve),
    "rules": {}
};
