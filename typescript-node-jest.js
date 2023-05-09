module.exports = {
    env: {
        node: true,
        es6: true,
        jest: true,
        jasmine: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        project: "tsconfig.json",
        sourceType: "module"
    },
    extends: [
        "./rules/deprecation.js",
        // "./rules/eslint.js",  -> commented out since "typescript-eslint" rules inherit from this
        "./rules/eslint-comments.js",
        "./rules/import-typescript-node.js",
        "./rules/jsdoc-typescript.js",
        "./rules/prettier.js",
        "./rules/typescript-eslint.js",
        "./rules/unicorn.js"
    ].map(require.resolve),
    rules: {},
    overrides: [
        // Overrides for test files
        {
            files: ["**/?(*.)+(spec).[jt]s?(x)"],
            extends: ["./rules/jasmine.js", "./rules/jest.js"].map(
                require.resolve
            ),
            rules: {
                "@typescript-eslint/unbound-method": "off"
            }
        }
    ]
};
