module.exports = {
    extends: ["eslint:recommended"],
    rules: {
        "arrow-body-style": "error",
        "arrow-parens": ["error", "as-needed"],
        "class-methods-use-this": ["off", { enforceForClassFields: true }], // Warn when methods could be static
        "complexity": ["warn", { max: 20 }],
        "curly": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": ["error", "property"],
        "eqeqeq": ["error", "always"],
        "guard-for-in": "error",
        "grouped-accessor-pairs": "error",
        "handle-callback-err": "error",
        "id-denylist": [
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
        "max-classes-per-file": ["off", 5],
        "max-depth": ["warn", { max: 5 }], // default 4
        "max-params": ["off", { max: 6 }], // default 3 - SWITCHED OFF - does not work well with constructor injection
        "max-statements-per-line": ["warn", { max: 1 }], // default 1
        "max-statements": ["warn", { max: 100 }], // default 50
        "max-len": "off",
        "max-lines": ["off", 2000],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "error",
        "no-constant-binary-expression": "error",
        "no-duplicate-imports": "error",
        "no-empty-function": [
            "error",
            {
                //allow: [/*"functions", "arrowFunctions", "generatorFunctions", "methods", "generatorMethods", "getters", "setters", "constructors", "asyncFunctions", "asyncMethods"*/]
            }
        ],
        "no-empty-static-block": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-implicit-coercion": ["error", { allow: ["!!"] }],
        "no-implied-eval": "error",
        "no-inner-declarations": "off", // Switched off from recommended rules, gave too many issues
        "no-invalid-this": "error",
        "no-multi-str": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-new-func": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-redeclare": "error",
        "no-restricted-imports": [
            "off",
            {
                paths: []
            }
        ],
        "no-restricted-syntax": [
            "off", // Below - rules to require Async suffix on async methods - not good enough
            // {
            //     "selector": "FunctionDeclaration[async=false][id.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                selector:
                    "FunctionDeclaration[async=true][id.name!=/Async$/][id.name!=/^(configure)$/]",
                message: "Async function name must end in 'Async'"
            },
            // {
            //     "selector": "MethodDefinition[value.async=false][key.name=/Async$/]",
            //     "message": "Method ending in 'Async' must be declared async"
            // },
            {
                selector:
                    "MethodDefinition[value.async=true][key.name!=/Async$/][key.name!=/^(activate|deactivate|canActivate|canDeactivate|attached|bind)$/]",
                message: "Async method name must end in 'Async'"
            },
            // {
            //     "selector": "Property[value.type=/FunctionExpression$/][value.async=false][key.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                selector:
                    "Property[value.type=/FunctionExpression$/][value.async=true][key.name!=/Async$/]",
                message: "Async function name must end in 'Async'"
            },
            // {
            //     "selector": "VariableDeclarator[init.type=/FunctionExpression$/][init.async=false][id.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                selector:
                    "VariableDeclarator[init.type=/FunctionExpression$/][init.async=true][id.name!=/Async$/]",
                message: "Async function name must end in 'Async'"
            }
            // "ForInStatement"
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                hoist: "all",
                builtinGlobals: false,
                ignoreOnInitialization: false,
                allow: [] // array of identifier names for which shadowing is allowed
            }
        ],
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "warn",
        "no-undef-init": "error",
        "no-unneeded-ternary": [
            "error",
            {
                defaultAssignment: true
            }
        ],
        "no-unused-expressions": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "none",
                destructuredArrayIgnorePattern: "^_"
            }
        ],
        "no-use-before-define": "error",
        "no-useless-constructor": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": ["warn", { terms: ["todo"] }],
        "object-shorthand": ["error", "never"],
        "one-var": ["error", "never"],
        "prefer-arrow-callback": "error",
        "prefer-const": [
            "error",
            { destructuring: "all", ignoreReadBeforeAssign: false }
        ],
        "prefer-destructuring": [
            "warn",
            {
                array: true,
                object: true
            },
            {
                enforceForRenamedProperties: false
            }
        ],
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-template": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "radix": "error",
        "require-await": "error",
        "require-unicode-regexp": "error",
        "return-await": "error",
        "unicode-bom": ["error", "never"],
        "yoda": "error"
    }
};
