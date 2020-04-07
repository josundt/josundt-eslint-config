module.exports = {
    "extends": [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "plugins": [
        "@typescript-eslint/eslint-plugin"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array-simple",
                "readonly": "array-simple"
            }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/ban-types": "off", // covered by naming-conventions rule
        "@typescript-eslint/camelcase": "off", // covered by naming-conventions rule
        "@typescript-eslint/class-name-casing": "off", // covered by naming-conventions rule
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "no-public"
            }
        ],
        "@typescript-eslint/indent": [
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
        "@typescript-eslint/interface-name-prefix": "off", // covered by naming-conventions rule
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": true
                }
            }
        ],
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "default",
                "format": [
                    "camelCase"
                ],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": "method",
                "modifiers": [
                    "private"
                ],
                "format": [
                    "camelCase"
                ],
                "leadingUnderscore": "allow",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": "property",
                "modifiers": [
                    "private"
                ],
                "format": [
                    "camelCase"
                ],
                "leadingUnderscore": "allow",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": "variable",
                "format": [
                    "camelCase"
                    //, "UPPER_CASE"
                ],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            },
            {
                "selector": "typeLike",
                "format": [
                    "PascalCase"
                ]
            },
            {
                "selector": "enumMember",
                "format": [
                    "camelCase",
                    "PascalCase"
                ]
            }
        ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-param-reassign": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/quotes": [
            "error",
            "double"
        ],
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/strict-boolean-expressions": [
            "off",
            {
                "allowNullable": true
            }
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/typedef": [
            "error",
            {
                "arrayDestructuring": false,
                "arrowParameter": false,
                "memberVariableDeclaration": true,
                "objectDestructuring": false,
                "parameter": true,
                "propertyDeclaration": true,
                "variableDeclaration": false
            }
        ],
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/unified-signatures": "off"
    }
};
