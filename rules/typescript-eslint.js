const eslintRuleSet = require("./eslint");
const eslintRules = eslintRuleSet.rules;

// Map of all the typescript-eslint extensions.
// If extension rule has additional properties compared to standard eslint rule,
// the value of the map item has an object that will be merged with standard rule; otherwise null.
const extensions = new Map([
    ["brace-style", null],
    ["comma-dangle", null],
    ["comma-spacing", null],
    ["default-param-last", null],
    ["dot-notation", {
        "allowPrivateClassPropertyAccess": false,
        "allowProtectedClassPropertyAccess": false,
        "allowIndexSignaturePropertyAccess": false
    }],
    ["func-call-spacing", null],
    ["indent", null],
    ["init-declarations", null],
    ["keyword-spacing", null],
    ["lines-between-class-members", {
        "exceptAfterOverload": true
    }],
    ["no-array-constructor", null],
    ["no-dupe-class-members", null],
    ["no-duplicate-imports", null],
    ["no-empty-function", null],
    ["no-extra-parens", null],
    ["no-extra-semi", null],
    ["no-invalid-this", null],
    ["no-loop-func", null],
    ["no-loss-of-precision", null],
    ["no-magic-numbers", null],
    ["no-shadow", {
        "ignoreTypeValueShadow": true,
        "ignoreFunctionTypeParameterNameValueShadow": true
    }],
    ["no-unused-expressions", null],
    ["no-unused-vars", null],
    ["no-use-before-define", null],
    ["no-useless-constructor", null],
    ["object-curly-spacing", null],
    ["quotes", null],
    ["require-await", null],
    ["return-await", null],
    ["semi", null],
    ["space-before-function-paren", null],
    ["space-infix-ops", null]
]);

switchOffExtensions = new Set([
    "no-unused-vars",
    "no-invalid-this",
    "no-use-before-define",
    "no-useless-constructor"
]);

// Building eslint-typescript rules for existsing eslint rules and switching off original eslint rule
const extendedEslintRules = Object.entries(eslintRules).reduce((extRules, [key, value]) => {

    // Try to get from known extensions map
    const extension = extensions.get(key);

    // If found in known typescript eslint extension rules map
    if (extension !== undefined) {

        // Switch off standard eslint rule
        extRules[key] = "off";

        // Special handling of certain extension rules that need to be switched off:
        if (switchOffExtensions.has(key)) {
            extRules[`@typescript-eslint/${key}`] = "off";
        } else {
            // If extension rule has extended options, merge with standard eslint rule options:
            if (extension !== null) {
                value = [...value];
                value[value.length - 1] = { ...value[value.length - 1], ...extension }
            }
            // Add extension rule value with the @typescript-eslint key prefix
            extRules[`@typescript-eslint/${key}`] = value;
        }


    }
    // else: if no extension rule exists, the standard eslint rule will be used through the "extends" configuration below

    return extRules;
}, {});

// console.log(extensionRules);
// console.log(`Converted ${Object.keys(extensionRules).filter(k => !k.startsWith("@typescript")).length} of ${extensions.size} available extension rules`);
// console.log("Not converted:", Array.from(extensions.keys()).filter(k => !Object.keys(extensionRules).filter(k => !k.startsWith("@typescript")).includes(k)));

module.exports = {
    "extends": [
        "./eslint",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "plugins": [
        "@typescript-eslint/eslint-plugin"
    ],
    "rules": {

        /* Disabling certain eslint rules: */

        "camelCase": "off",

        /* Main @typescript-eslint rules */

        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array-simple",
                "readonly": "array-simple"
            }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-tslint-comment": "error", // No longer use tslint - remove rules
        "@typescript-eslint/ban-types": "off", // Can be used to ban certain types
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                "assertionStyle": "as",
                "objectLiteralTypeAssertions": "allow"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": [
            "error",
            "interface"
        ],
        "@typescript-eslint/consistent-type-imports": [
            "off",
            {
                "prefer": "type-imports",
                "disallowTypeAnnotations": true
            }
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true,
                "allowTypedFunctionExpressions": true,
                "allowHigherOrderFunctions": true,
                "allowConciseArrowFunctionExpressionsStartingWithVoid": true
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "no-public"
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": [ // same as "recommended" except error instead of warning
            "error",
            {
                "allowArgumentsExplicitlyTypedAsAny": false,
                "allowDirectConstAssertionInArrowFunctions": true,
                "allowedNames": [],
                "allowHigherOrderFunctions": true,
                "allowTypedFunctionExpressions": true,
            }
        ],
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
        "@typescript-eslint/method-signature-style": "off", // useful rule since lambda method notation enforces stricter type checking, but has somme inconveniences for ovelaoads, "implement interface" refactoring, and general code complexity
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
                "selector": "typeLike",
                "format": [
                    "PascalCase"
                ]
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
                "selector": "enumMember",
                "format": [
                    "camelCase",
                    "PascalCase"
                ]
            }
        ],
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": [
            "error",
            {
                "ignoreArrowShorthand": true
            }
        ],
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error", // Must be switched on to prevent promises not awaited
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-invalid-void-type": [
            "error",
            {
                "allowInGenericTypeArguments": true,
                "allowAsThisParameter": true
            }
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-parameter-properties": [
            "error",
            {
                "allows": ["private readonly", "private", "protected readonly"]
            }
        ],
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "off", // allow runtime null checks etc even if reported not necessary by type system
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-unused-vars-experimental": "off", // to strict with method params...
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off", // Could be useful but requires too much work and verbose notation
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/restrict-plus-operands": [
            "error",
            {
                "checkCompoundAssignments": true
            }
        ],
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/sort-type-union-intersection-members": "off",
        "@typescript-eslint/strict-boolean-expressions": [
            "off",
            {
                "allowString": true,
                "allowNumber": true,
                "allowNullableObject": true,
                "allowNullableString": true,
                "allowNullableNumber": true,
                "allowNullableBoolean": true,
                "allowAny": false
            }
        ],
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
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
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "off",

        ...extendedEslintRules
    }
};
