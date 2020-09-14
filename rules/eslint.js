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
        "camelcase": "off",
        "capitalized-comments": [
            "off",
            "always"
        ],
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "complexity": [
            "off",
            {
                "max": 20
            }
        ],
        "constructor-super": "error",
        "curly": "error",
        "default-case": "off",
        "default-param-last": "error",
        "dot-notation": [
            "off",
            {
                "before": false,
                "after": true
            }
        ],
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "always"
        ],
        "func-call-spacing": [
            "error",
            "never"
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
        "indent": [
            "warn",
            4,
            {
                "ObjectExpression": "first",
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                },
                "SwitchCase": 1
            }
        ],
        "init-declarations": "off",
        "keyword-spacing": "error",
        "linebreak-style": [
            "off",
            "windows"
        ],
        "lines-between-class-members": [
            "off",
            "always",
            {
                "exceptAfterSingleLine": true
            }
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
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": [
            "error"
        ],
        "no-console": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "off",
        "no-implied-eval": "error",
        "no-inner-declarations": "off",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
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
            "off", // Below - rules to require Async suffix on async methods - not good enough
            // {
            //     "selector": "FunctionDeclaration[async=false][id.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                "selector": "FunctionDeclaration[async=true][id.name!=/Async$/][id.name!=/^(configure)$/]",
                "message": "Async function name must end in 'Async'"
            },
            // {
            //     "selector": "MethodDefinition[value.async=false][key.name=/Async$/]",
            //     "message": "Method ending in 'Async' must be declared async"
            // },
            {
                "selector": "MethodDefinition[value.async=true][key.name!=/Async$/][key.name!=/^(activate|deactivate|canActivate|canDeactivate|attached|bind)$/]",
                "message": "Async method name must end in 'Async'"
            },
            // {
            //     "selector": "Property[value.type=/FunctionExpression$/][value.async=false][key.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                "selector": "Property[value.type=/FunctionExpression$/][value.async=true][key.name!=/Async$/]",
                "message": "Async function name must end in 'Async'"
            },
            // {
            //     "selector": "VariableDeclarator[init.type=/FunctionExpression$/][init.async=false][id.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                "selector": "VariableDeclarator[init.type=/FunctionExpression$/][init.async=true][id.name!=/Async$/]",
                "message": "Async function name must end in 'Async'"
            },
            // "ForInStatement"
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
        "no-unused-expressions": "error", // Switched off since it breaks support for null coalescing and optional chaining in TypeScript: https://github.com/typescript-eslint/typescript-eslint/issues/1051 - https://github.com/typescript-eslint/typescript-eslint/issues/1052
        "no-unused-labels": "error",
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "no-use-before-define": "error",
        "no-useless-constructor": "error",
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
        "quotes": [
            "error",
            "double"
        ],
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "require-await": "error",
        "return-await": "error",
        "semi": [
            "error",
            "always"
        ],
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
