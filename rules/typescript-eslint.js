const { typescriptEslintRules } = require("./typescript-eslint/rules.js");
const {
    typescriptEslintExtensionrules
} = require("./typescript-eslint/extensionrules.js");

module.exports = {
    extends: [
        "./eslint",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    plugins: ["@typescript-eslint/eslint-plugin"],
    rules: {
        ...typescriptEslintRules,
        ...typescriptEslintExtensionrules
    }
};
