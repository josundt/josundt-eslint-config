module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "camelcase": "error",
        "capitalized-comments": [
            "off",
            "always"
        ],
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "complexity": [
            "off",
            {
                "max": 20
            }
        ],
        "constructor-super": "error",
        "curly": "error",
        "default-case": "off",
        "dot-notation": "off",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "always"
        ],
        "guard-for-in": "error",
        "handle-callback-err": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Function",
            "Undefined"
            //"undefined"
        ],
        "id-match": "error",
        "linebreak-style": [
            "off",
            "windows"
        ],
        "max-classes-per-file": [
            "off",
            5
        ],
        "max-len": [
            "warn",
            {
                "ignorePattern": "^import |^\\s*\\/\\/ |^\\s*\\/\\*\\*",
                "code": 180
            }
        ],
        "max-lines": [
            "off",
            2000
        ],
        "new-parens": "error",
        "newline-per-chained-call": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": [
            "error"
        ],
        "no-console": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "off",
        "no-implied-eval": "error",
        "no-inner-declarations": "off",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "error",
        "no-magic-numbers": "off",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "warn",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-syntax": [
            "off",
            "ForInStatement"
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "warn",
        "no-undef-init": "error",
        "no-underscore-dangle": [
            "off",
            {
                "allowAfterThis": true
            }
        ],
        "no-unsafe-finally": "error",
        "no-unused-expressions": "off", // Switched off since it breaks support for null coalescing and optional chaining in TypeScript: https://github.com/typescript-eslint/typescript-eslint/issues/1051 - https://github.com/typescript-eslint/typescript-eslint/issues/1052
        "no-unused-labels": "error",
        "no-var": "error",
        "no-void": "error",
        "object-shorthand": [
            "error",
            "never"
        ],
        "one-var": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "off",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "space-before-function-paren": [
            "warn",
            {
                "anonymous": "always",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "spaced-comment": "off",
        "use-isnan": "error",
        "valid-typeof": "error",
        "yoda": "error"
    }
};
