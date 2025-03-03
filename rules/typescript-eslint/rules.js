/* Main @typescript-eslint rules */
const rules = {
    "adjacent-overload-signatures": "error",
    "array-type": [
        "error",
        {
            default: "array-simple",
            readonly: "array-simple"
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
            "minimumDescriptionLength": 10
            //"descriptionFormat": "someformathere"
        }
    ],
    "ban-tslint-comment": "error", // No longer use tslint - remove rules
    "class-literal-property-style": "off",
    "consistent-generic-constructors": ["off", "constructor"],
    "consistent-indexed-object-style": ["error", "record"],
    "consistent-type-assertions": [
        "error",
        {
            arrayLiteralTypeAssertions: "allow",
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow"
        }
    ],
    "consistent-type-definitions": ["error", "interface"],
    "consistent-type-exports": [
        "error",
        {
            fixMixedExportsWithInlineTypeSpecifier: true
        }
    ],
    "consistent-type-imports": [
        "error",
        {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
            disallowTypeAnnotations: false
        }
    ],
    "explicit-function-return-type": [
        "error",
        {
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            allowExpressions: true,
            allowFunctionsWithoutTypeParameters: false,
            allowHigherOrderFunctions: true,
            allowIIFEs: false,
            allowTypedFunctionExpressions: true,
            allowedNames: []
        }
    ],
    "explicit-member-accessibility": [
        "error",
        {
            accessibility: "no-public"
        }
    ],
    "explicit-module-boundary-types": [
        // same as "recommended" except error instead of warning
        "error",
        {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowOverloadFunctions: false,
            allowTypedFunctionExpressions: true
        }
    ],
    "member-ordering": "off",
    "method-signature-style": "off", // useful rule since lambda method notation enforces stricter type checking, but has somme inconveniences for ovelaoads, "implement interface" refactoring, and general code complexity
    "naming-convention": [
        "error",
        {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid"
        },
        {
            selector: "typeLike",
            format: ["PascalCase"]
        },
        {
            selector: "method",
            modifiers: [
                // "#private", // Did not work even if it was added in 5.49.0
                "private"
            ],
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "forbid"
        },
        {
            selector: "property",
            modifiers: [
                // "#private", // Did not work even if it was added in 5.49.0
                "private"
            ],
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "forbid"
        },
        {
            selector: "import",
            format: ["camelCase", "PascalCase"]
        },
        {
            selector: "enumMember",
            format: ["camelCase", "PascalCase"]
        }
    ],
    "no-array-delete": "error",
    "no-base-to-string": "error",
    "no-confusing-non-null-assertion": "error",
    "no-confusing-void-expression": [
        "error",
        {
            ignoreArrowShorthand: true,
            ignoreVoidOperator: false,
            ignoreVoidReturningFunctions: false
        }
    ],
    "no-deprecated": "error",
    "no-duplicate-enum-values": "error",
    "no-duplicate-type-constituents": "error",
    "no-dynamic-delete": "error",
    "no-empty-interface": "off",
    "no-explicit-any": [
        "off",
        {
            ignoreRestArgs: "false"
        }
    ],
    "no-extra-non-null-assertion": "error",
    "no-extraneous-class": [
        "error",
        {
            allowConstructorOnly: false, // Whether to allow extraneous classes that contain only a constructor.
            allowEmpty: false, // Whether to allow extraeous classes that have no body (i.e. are empty).
            allowStaticOnly: true, // Whether to allow extraneous classes that only contain static members.
            allowWithDecorator: false // Whether to allow extraneous classes that include a decorator.
        }
    ],
    "no-floating-promises": "error", // Must be switched on to prevent promises not awaited
    "no-for-in-array": "error",
    "no-import-type-side-effects": "error",
    "no-inferrable-types": "off",
    "no-invalid-void-type": [
        "error",
        {
            allowInGenericTypeArguments: true,
            allowAsThisParameter: true
        }
    ],
    "no-meaningless-void-operator": "error",
    "no-misused-new": "error",
    "no-misused-promises": [
        "error",
        {
            checksConditionals: true,
            checksSpreads: true,
            checksVoidReturn: true // {
            //     arguments: true, //Disables checking an asynchronous function passed as argument where the parameter type expects a function that returns void
            //     attributes: true, //Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns void
            //     properties: true, //Disables checking an asynchronous function passed as an object property expected to be a function that returns void
            //     returns: true, //Disables checking an asynchronous function returned in a function whose return type is a function that returns void
            //     variables: true //Disables checking an asynchronous function used as a variable whose return type is a function that returns void
            // }
        }
    ],
    "no-misused-spread": "error",
    "no-mixed-enums": "error",
    "no-namespace": "off",
    "no-non-null-asserted-nullish-coalescing": "error",
    "no-non-null-asserted-optional-chain": "error",
    "no-non-null-assertion": "off",
    "no-redundant-type-constituents": "error",
    "no-require-imports": "error",
    "no-restricted-types": [
        "error",
        {
            types: {
                // // add a custom message, and tell the plugin how to fix it
                // OldAPI: {
                //     message: "Use NewAPI instead",
                //     fixWith: "NewAPI"
                // },
                // // add a custom message, and tell the plugin how to suggest a fix
                // SoonToBeOldAPI: {
                //     message: "Use NewAPI instead",
                //     suggest: ["NewAPIOne", "NewAPITwo"]
                // }
            }
        }
    ],
    "no-unsafe-enum-comparison": "error",
    "no-unsafe-unary-minus": "error",
    "no-this-alias": "error",
    "no-unnecessary-boolean-literal-compare": [
        "error",
        {
            allowComparingNullableBooleansToFalse: true,
            allowComparingNullableBooleansToTrue: true
        }
    ],
    "no-unnecessary-condition": "off", // allow runtime null checks etc even if reported not necessary by type system
    "no-unnecessary-parameter-property-assignment": "error",
    "no-unnecessary-qualifier": "error",
    "no-unnecessary-type-arguments": "off",
    "no-unnecessary-type-assertion": "off",
    "no-unnecessary-type-constraint": "error",
    "no-unnecessary-type-parameters": "off", // added but not yet switched on
    "no-unsafe-argument": "error",
    "no-unsafe-assignment": "error",
    "no-unsafe-call": "error",
    "no-unsafe-member-access": "error",
    "no-unsafe-return": "error",
    "no-unsafe-type-assertion": "off", // This rule will be difficult to enable because we sometimes need to force a type assertion
    "no-useless-empty-export": "error",
    "no-unnecessary-template-expression": "error",
    "no-var-requires": "error",
    "non-nullable-type-assertion-style": "error",
    "only-throw-error": [
        "error",
        {
            allow: [],
            allowThrowingAny: false, // Default is to disallow throwing values of type any
            allowThrowingUnknown: false // Default is to disallow throwing values of type unknown
        }
    ],
    "parameter-properties": [
        "error",
        {
            prefer: "class-property", // or "parameter-property"
            allow: ["private readonly", "private", "protected readonly"]
        }
    ],
    "prefer-as-const": "off",
    "prefer-enum-initializers": "error",
    "prefer-find": "error",
    "prefer-for-of": "error",
    "prefer-function-type": "error",
    "prefer-includes": "error",
    "prefer-literal-enum-member": "error",
    "prefer-namespace-keyword": "error",
    "prefer-nullish-coalescing": [
        "error",
        {
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            ignoreConditionalTests: true,
            ignoreTernaryTests: false,
            ignoreMixedLogicalExpressions: false,
            ignoreBooleanCoercion: false,
            ignorePrimitives: {
                string: false,
                number: false,
                bigint: false,
                boolean: false
            }
        }
    ],
    "prefer-optional-chain": "error",
    "prefer-readonly": "error",
    "prefer-readonly-parameter-types": "off", // Could be useful but requires too much work and verbose notation
    "prefer-reduce-type-parameter": "error",
    "prefer-regexp-exec": "error",
    "prefer-return-this-type": "error",
    "prefer-string-starts-ends-with": [
        "error",
        {
            allowSingleElementEquality: "never"
        }
    ],
    "promise-function-async": "off",
    "related-getter-setter-pairs": "error",
    "require-array-sort-compare": [
        "error",
        {
            ignoreStringArrays: false
        }
    ],
    "restrict-plus-operands": [
        "error",
        {
            skipCompoundAssignments: false,
            allowAny: false
        }
    ],
    "restrict-template-expressions": [
        "error",
        {
            allow: [{ name: ["URL", "URLSearchParams"], from: "lib" }],
            allowAny: false,
            allowArray: false,
            allowBoolean: false,
            allowNever: false,
            allowNullish: false,
            allowNumber: true,
            allowRegExp: false
        }
    ],
    "strict-boolean-expressions": [
        "off",
        {
            allowAny: false,
            allowNullableBoolean: true,
            allowNullableEnum: true,
            allowNullableNumber: true,
            allowNullableObject: true,
            allowNullableString: true,
            allowNumber: true,
            allowString: true
            //allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        }
    ],
    "switch-exhaustiveness-check": [
        "error",
        {
            allowDefaultCaseForExhaustiveSwitch: true,
            considerDefaultExhaustiveForUnions: true,
            requireDefaultForNonUnion: false
        }
    ],
    "triple-slash-reference": "error",
    "typedef": [
        "error",
        {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: true,
            objectDestructuring: false,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: false
        }
    ],
    "unbound-method": "error",
    "unified-signatures": "off",
    "use-unknown-in-catch-callback-variable": "error"
};

// Rules - append "@typescript-eslint/" to rule names
export const typescriptEslintRules = Object.entries(rules).reduce(
    (aggr, [key, value]) => ({
        ...aggr,
        [`@typescript-eslint/${key}`]: value
    }),
    {}
);
