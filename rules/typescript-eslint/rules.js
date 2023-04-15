/* Main @typescript-eslint rules */
const rules = {
    "adjacent-overload-signatures": "error",
    "array-type": [
        "error",
        {
            "default": "array-simple",
            "readonly": "array-simple"
        }
    ],
    "await-thenable": "error",
    "ban-ts-comment": [
        "error",
        {
            "ts-expect-error": "allow-with-description",
            "ts-ignore": true,
            "ts-nocheck": true,
            "ts-check": false,
            "minimumDescriptionLength": 10,
            //"descriptionFormat": "someformathere"
        }
    ],
    "ban-tslint-comment": "error", // No longer use tslint - remove rules
    "ban-types": "off", // Can be used to ban certain types
    "class-literal-property-style": "off",
    "consistent-generic-constructors": ["off", "constructor"],
    "consistent-indexed-object-style": ["error", "record"],
    "consistent-type-assertions": [
        "error",
        {
            "assertionStyle": "as",
            "objectLiteralTypeAssertions": "allow"
        }
    ],
    "consistent-type-definitions": [
        "error",
        "interface"
    ],
    "consistent-type-exports": [
        "error",
        {
            "fixMixedExportsWithInlineTypeSpecifier": true
        }
    ],
    "consistent-type-imports": [
        "error",
        {
            "prefer": "type-imports",
            "fixStyle": "inline-type-imports",
            "disallowTypeAnnotations": false
        }
    ],
    "explicit-function-return-type": [
        "error",
        {
            "allowConciseArrowFunctionExpressionsStartingWithVoid": true,
            "allowExpressions": true,
            "allowFunctionsWithoutTypeParameters": false,
            "allowHigherOrderFunctions": true,
            "allowIIFEs": false,
            "allowTypedFunctionExpressions": true,
            "allowedNames": []
        }
    ],
    "explicit-member-accessibility": [
        "error",
        {
            "accessibility": "no-public"
        }
    ],
    "explicit-module-boundary-types": [ // same as "recommended" except error instead of warning
        "error",
        {
            "allowArgumentsExplicitlyTypedAsAny": false,
            "allowDirectConstAssertionInArrowFunctions": true,
            "allowHigherOrderFunctions": true,
            "allowTypedFunctionExpressions": true,
            "allowedNames": []
        }
    ],
    "member-delimiter-style": [
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
    "member-ordering": "off",
    "method-signature-style": "off", // useful rule since lambda method notation enforces stricter type checking, but has somme inconveniences for ovelaoads, "implement interface" refactoring, and general code complexity
    "naming-convention": [
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
                // "#private", // Did not work even if it was added in 5.49.0
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
                // "#private", // Did not work even if it was added in 5.49.0
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
    "no-base-to-string": "error",
    "no-confusing-non-null-assertion": "error",
    "no-confusing-void-expression": [
        "error",
        {
            "ignoreArrowShorthand": true
        }
    ],
    "no-duplicate-enum-values": "error",
    "no-duplicate-type-constituents": "error",
    "no-dynamic-delete": "error",
    "no-empty-interface": "off",
    "no-explicit-any": [
        "off",
        {
            "ignoreRestArgs": "false"
        }
    ],
    "no-extra-non-null-assertion": "error",
    "no-extraneous-class": "error",
    "no-floating-promises": "error", // Must be switched on to prevent promises not awaited
    "no-for-in-array": "error",
    "no-import-type-side-effects": "error",
    "no-inferrable-types": "off",
    "no-invalid-void-type": [
        "error",
        {
            "allowInGenericTypeArguments": true,
            "allowAsThisParameter": true
        }
    ],
    "no-meaningless-void-operator": "error",
    "no-misused-new": "error",
    "no-misused-promises": [
        "error",
        {
            "checksConditionals": true,
            "checksSpreads": true,
            "checksVoidReturn": true // {
            //     arguments: true, //Disables checking an asynchronous function passed as argument where the parameter type expects a function that returns void
            //     attributes: true, //Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns void
            //     properties: true, //Disables checking an asynchronous function passed as an object property expected to be a function that returns void
            //     returns: true, //Disables checking an asynchronous function returned in a function whose return type is a function that returns void
            //     variables: true //Disables checking an asynchronous function used as a variable whose return type is a function that returns void
            // }
        }
    ],
    "no-mixed-enums": "error",
    "no-namespace": "off",
    "no-non-null-asserted-nullish-coalescing": "error",
    "no-non-null-asserted-optional-chain": "error",
    "no-non-null-assertion": "off",
    "no-redundant-type-constituents": "error",
    "no-require-imports": "error",
    "no-unsafe-enum-comparison": "error",
    "no-this-alias": "error",
    "no-throw-literal": [
        "error",
        {
            "allowThrowingAny": false, // Default is to allow throwing values of type any
            "allowThrowingUnknown": true // Default is to allow throwing values of type unknown
        }
    ],
    "no-type-alias": "off",
    "no-unnecessary-boolean-literal-compare": "error",
    "no-unnecessary-condition": "off", // allow runtime null checks etc even if reported not necessary by type system
    "no-unnecessary-qualifier": "error",
    "no-unnecessary-type-arguments": "off",
    "no-unnecessary-type-assertion": "off",
    "no-unnecessary-type-constraint": "error",
    "no-unsafe-argument": "error",
    "no-unsafe-assignment": "error",
    "no-unsafe-call": "error",
    "no-unsafe-member-access": "error",
    "no-unsafe-return": "error",
    "no-unused-vars-experimental": "off", // to strict with method params...
    "no-useless-empty-export": "error",
    "no-var-requires": "error",
    "non-nullable-type-assertion-style": "error",
    "parameter-properties": [
        "error",
        {
            "prefer": "class-property", // or "parameter-property"
            "allow": ["private readonly", "private", "protected readonly"]
        }
    ],
    "prefer-as-const": "off",
    "prefer-enum-initializers": "error",
    "prefer-for-of": "error",
    "prefer-function-type": "error",
    "prefer-includes": "error",
    "prefer-literal-enum-member": "error",
    "prefer-namespace-keyword": "error",
    "prefer-nullish-coalescing": [
        "error",
        {
            "ignoreConditionalTests": true,
            "ignoreTernaryTests": true,
            "ignoreMixedLogicalExpressions": true
        }
    ],
    "prefer-optional-chain": "error",
    "prefer-readonly": "error",
    "prefer-readonly-parameter-types": "off", // Could be useful but requires too much work and verbose notation
    "prefer-reduce-type-parameter": "error",
    "prefer-regexp-exec": "error",
    "prefer-return-this-type": "error",
    "prefer-string-starts-ends-with": "error",
    "prefer-ts-expect-error": "error",
    "promise-function-async": "off",
    "require-array-sort-compare": "error",
    "restrict-plus-operands": [
        "error",
        {
            "checkCompoundAssignments": true,
            "allowAny": false
        }
    ],
    "restrict-template-expressions": [
        "error",
        {
            "allowAny": false,
            "allowBoolean": false,
            "allowNever": false,
            "allowNullish": false,
            "allowNumber": true,
            "allowRegExp": false
        }
    ],
    "sort-type-constituents": "off",
    "strict-boolean-expressions": [
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
    "switch-exhaustiveness-check": "error",
    "triple-slash-reference": "error",
    "type-annotation-spacing": "error", // This is a formatting rule
    "typedef": [
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
    "unbound-method": "error",
    "unified-signatures": "off",
};

// Rules - append "@typescript-eslint/" to rule names
module.exports.typescriptEslintRules = Object.entries(rules).reduce((aggr, [key, value]) => ({
    ...aggr,
    [`@typescript-eslint/${key}`]: value
}), {});
